// eslint-disable
// this is an auto generated file. This will be overwritten

export const orderResources = `mutation OrderResources($id: ID!, $quantity: Float) {
  orderResources(id: $id, quantity: $quantity) {
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
export const createResource = `mutation CreateResource($input: CreateResourceInput!) {
  createResource(input: $input) {
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
export const updateResource = `mutation UpdateResource($input: UpdateResourceInput!) {
  updateResource(input: $input) {
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
export const deleteResource = `mutation DeleteResource($input: DeleteResourceInput!) {
  deleteResource(input: $input) {
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
export const createSource = `mutation CreateSource($input: CreateSourceInput!) {
  createSource(input: $input) {
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
export const updateSource = `mutation UpdateSource($input: UpdateSourceInput!) {
  updateSource(input: $input) {
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
export const deleteSource = `mutation DeleteSource($input: DeleteSourceInput!) {
  deleteSource(input: $input) {
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
export const createSourceResource = `mutation CreateSourceResource($input: CreateSourceResourceInput!) {
  createSourceResource(input: $input) {
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
export const updateSourceResource = `mutation UpdateSourceResource($input: UpdateSourceResourceInput!) {
  updateSourceResource(input: $input) {
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
export const deleteSourceResource = `mutation DeleteSourceResource($input: DeleteSourceResourceInput!) {
  deleteSourceResource(input: $input) {
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
