class User {
  constructor(model) {
    this.Model = model;
  }

  signIn = ({email, password}, ctx) => {
    const isAuth = ctx.authenticate({email, password});

    if(isAuth) console.log(`U are authenticated, ${email}! | User model`);

    return `Nice | User model`
  };

  signUp = (data) => {
    const {password, passwordConfirmation} = data

    if(password !== passwordConfirmation) throw new Error('Passwords do not match!')

    return this.Model.create(data);
  };

  signOut = () => "Sign out";
}

module.exports = User;
