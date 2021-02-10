class User {
  constructor(model) {
    this.Model = model;
  }

  signIn = () => "Sign in";

  signUp = (data) => {
    const {password, passwordConfirmation} = data

    if(password !== passwordConfirmation) throw new Error('Password do not match!')

    return this.Model.create(data);
  };

  signOut = () => "Sign out";
}

module.exports = User;
