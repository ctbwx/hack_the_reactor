// You can create an object with labeled properties if you have multiple queries for one folder
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
