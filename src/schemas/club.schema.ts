const queryClubs = `query MyQuery($page: Int, $limit: Int, $search: String) {
	clubs(page: $page, limit: $limit, name: $search) {
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

const queryClubById = `query MyQuery($id: ID!) {
	clubById(id: $id) {
    id
    name
  }
}`;

export { queryClubs, queryClubById };
