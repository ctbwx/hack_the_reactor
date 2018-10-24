module.exports.query = `query API($id: ID!) {
  Folder(id: $id) {
    id
    name
    documents {
      _meta {
        id
        name
        updatedAt
        createdAt
        published
      }
      ... on Item {
        title
        body
      }
    }
  }
}
`;
