// eslint-disable
// this is an auto generated file. This will be overwritten

export const getResource = `query GetResource($id: ID!) {
  getResource(id: $id) {
    id
    name
    sources {
      items {
        id
        price
        available
        unit
        version
      }
      nextToken
    }
  }
}
`;
export const listResources = `query ListResources(
  $filter: ModelResourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sources {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSource = `query GetSource($id: ID!) {
  getSource(id: $id) {
    id
    location
    name
    resources {
      items {
        id
        price
        available
        unit
        version
      }
      nextToken
    }
  }
}
`;
export const listSources = `query ListSources(
  $filter: ModelSourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      location
      name
      resources {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSourceResource = `query GetSourceResource($id: ID!) {
  getSourceResource(id: $id) {
    id
    price
    available
    resource {
      id
      name
      sources {
        nextToken
      }
    }
    source {
      id
      location
      name
      resources {
        nextToken
      }
    }
    unit
    version
  }
}
`;
export const listSourceResources = `query ListSourceResources(
  $filter: ModelSourceResourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listSourceResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      price
      available
      resource {
        id
        name
      }
      source {
        id
        location
        name
      }
      unit
      version
    }
    nextToken
  }
}
`;
