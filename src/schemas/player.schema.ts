const queryPlayers = `
  query MyQuery($page: Int, $limit: Int, $search: String) {
    players(page: $page, limit: $limit, name: $search) {
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
        position
        club {
          name
        }
        nation {
          name
        }
      }
    }
  }
`;

const queryPlayerById = `query MyQuery($id: ID!) {
	playerById(id: $id) {
    id
    name
    position
    nation {
      name
    }
    club {
      name
    }
  }
}`;

export { queryPlayers, queryPlayerById };
