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
        items {
          id
          price
          available
          unit
          source {
            name
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
