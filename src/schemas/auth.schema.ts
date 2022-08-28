const mutationLogin = `mutation MyMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      name
      email
      token
    }
  }
`;

const mutationRegister = `mutation MyMutation($email: String!, $name: String!, $password: String!, $veryPassword: String!) {
    registerUser(email: $email, name: $name, password: $password, veryPassword: $veryPassword) {
      id
      name
      email
      token
    }
  }
`;

export { mutationLogin, mutationRegister };
