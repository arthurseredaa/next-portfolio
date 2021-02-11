const {portfolios, users} = require('./data');
const Portfolio = require('../database/models/portfolio');
const User = require('../database/models/user');
class FakeDb {
  clean = async () => {
    await Portfolio.deleteMany({});
    await User.deleteMany({});
  };
  addData = async () => {
    await Portfolio.create(portfolios);
    await User.create(users);
  }
  populate = async () => {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDb();
