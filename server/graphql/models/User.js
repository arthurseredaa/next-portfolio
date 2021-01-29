class User {
  constructor(model) {
    this.Model = model;
  }

  signIn = () => "Sign in";

  signUp = () => "Sign up";

  signOut = () => "Sign out";
}

module.exports = User;
