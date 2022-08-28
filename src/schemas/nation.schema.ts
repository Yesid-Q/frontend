const queryNations = `query MyQuery($page: Int, $limit: Int, $search: String) {
	nations(page: $page, limit: $limit, name: $search) {
    pageInfo {
      count
      countTotal
      page
      pageTotal
      itemsPerPage
    }
    items {
      id
      name
    }
  }
}`;

const queryNationById = `query MyQuery($id: ID!) {
	nationById(id: $id) {
    id
    name
  }
}`;

export { queryNations, queryNationById };
