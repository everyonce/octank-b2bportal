import React, { Component } from 'react';
import awsexports from './aws-exports';
import Amplify, { graphqlOperation } from 'aws-amplify';
import { Connect, withAuthenticator } from 'aws-amplify-react';
import logo from './logo.svg';
import './App.css';

import * as custom from './graphql/custom';
import * as subscriptions from './graphql/subscriptions';


import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
}
from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

Amplify.configure(awsexports);

class OrderResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      amount: ''
    };
  }

  handleChange(name, ev) {
    this.setState({
      [name]: ev.target.value
    });
  }

  async submit() {
    const { onOrder } = this.props;
    var input = {
      "id": this.props.id,
      "quantity": -this.state.amount
    };
    await onOrder(input);
  }

  render() {

    return (
      <span>
            <input
                name="orderAmount"
                placeholder="orderAmount"
                onChange={(ev) => { this.handleChange('amount', ev) }}
            />
            <button onClick={this.submit.bind(this)}>
                Order
            </button>
            </span>
    );
  }
}


class App extends Component {
  onSRChange = (prevQuery, newData) => {
    let incoming = newData.onSourceResource;
    let updatedQuery = Object.assign({}, prevQuery);
    updatedQuery.listResources.items.forEach(
      resource => {
        resource.sources.items.forEach(
          sr => { if (sr.id === incoming.id) sr.available = incoming.available; }
        );
      });
    return updatedQuery;
  }

  render() {

    const ListView = ({ resources }) => (
      <div>
      <h3>Available Resources</h3>
      <Accordion>
          {resources.map(resource => 
          <AccordionItem>
            <AccordionItemTitle>{resource.name} (
              {resource.sources.items.reduce((totalavail, sresource) => totalavail + sresource.available, 0)} available, 
              {(resource.sources.items.reduce((totalprice, sresource) => totalprice + (sresource.available*sresource.price), 0)/resource.sources.items.reduce((totalavail, sresource) => totalavail + sresource.available, 0)).toFixed(2)} average price/unit
              )
            </AccordionItemTitle>
            <AccordionItemBody>
                <h4>Sources:</h4>
                { 
                resource.sources.items.length > 0 ?
                resource.sources.items.map(source => { return(
                  <div>{source.source.name}: {source.available} available @ ${source.price} per {source.unit}
                    <Connect mutation={graphqlOperation(custom.orderResources)}>
                      {({mutation}) => (
                        <OrderResources id={source.id} onOrder={mutation} />
                      )}
                    </Connect>
                  </div>
                )})
                :
                <h4>No Sources Available for this Resource</h4>
                }
            </AccordionItemBody>
          </AccordionItem>
          )}
      </Accordion>
  </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Oktank Resource Portal
          </p>
        </header>
        <Connect 
           query={graphqlOperation(custom.listResources)}
           subscription={graphqlOperation(subscriptions.onSourceResource)}
           onSubscriptionMsg= {this.onSRChange}
         >
          {({ data: { listResources }, loading, error }) => {
              if (error) return (<h3>Error</h3>);
              if (loading || !listResources) return (<h3>Loading...</h3>);
              return (<ListView resources={listResources.items} /> );
          }}
      </Connect>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
