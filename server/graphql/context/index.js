const authenticateUser = ({password, email}) => {
  console.log(`Sign in user: ${email}| authenticateUser()`);
  return true;
};

exports.createAuthContext = (authData) => {
  const authMethods = {
    authenticate: (authData) => authenticateUser(authData)
  }

  return authMethods
}
