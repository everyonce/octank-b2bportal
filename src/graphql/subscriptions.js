// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateResource = `subscription OnCreateResource {
  onCreateResource {
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
export const onUpdateResource = `subscription OnUpdateResource {
  onUpdateResource {
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
export const onDeleteResource = `subscription OnDeleteResource {
  onDeleteResource {
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
export const onCreateSource = `subscription OnCreateSource {
  onCreateSource {
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
export const onUpdateSource = `subscription OnUpdateSource {
  onUpdateSource {
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
export const onDeleteSource = `subscription OnDeleteSource {
  onDeleteSource {
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
export const onCreateSourceResource = `subscription OnCreateSourceResource {
  onCreateSourceResource {
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
export const onUpdateSourceResource = `subscription OnUpdateSourceResource {
  onUpdateSourceResource {
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
export const onDeleteSourceResource = `subscription OnDeleteSourceResource {
  onDeleteSourceResource {
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
