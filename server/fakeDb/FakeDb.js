const {portfolios} = require('./data');
const Portfolio = require('../database/models/portfolio');
class FakeDb {
  clean = async () => await Portfolio.deleteMany({});
  addData = async () => await Portfolio.create(portfolios);
  populate = async () => {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDb();
