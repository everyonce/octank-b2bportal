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

export const orderResources = `mutation OrderResources(
  $id: ID!
  $quantity: Float
  ) {
  orderResources(
 id:$id
  quantity: $quantity
 ) {
 id,available
 }
}
`;
