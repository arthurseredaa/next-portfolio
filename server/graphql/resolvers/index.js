const Portfolio = require('../../database/models/portfolio');

const data = {
  portfolios: [
    {
      _id: "sad87da79",
      title: "Job in Netcentric",
      company: "Netcentric",
      companyWebsite: "http://www.google.com",
      location: "Spain, Barcelona",
      jobTitle: "Engineer",
      description: "Doing something, programing....",
      startDate: "01/01/2014",
      endDate: "01/01/2016",
    },
    {
      _id: "da789ad1",
      title: "Job in Siemens",
      company: "Siemens",
      companyWebsite: "http://www.google.com",
      location: "Slovakia, Kosice",
      jobTitle: "Software Engineer",
      description: "Responsoble for parsing framework for JSON medical data.",
      startDate: "01/01/2011",
      endDate: "01/01/2013",
    },
    {
      _id: "sadcxv9",
      title: "Work in USA",
      company: "WhoKnows",
      companyWebsite: "http://www.google.com",
      location: "USA, Montana",
      jobTitle: "Housekeeping",
      description: "So much responsibility....Overloaaaaaad",
      startDate: "01/01/2010",
      endDate: "01/01/2011",
    },
  ],
};

exports.portfolioQueries = {
  portfolios: () => Portfolio.find({}),
  portfolio: (root, { id }) => Portfolio.findById(id),
};

exports.portfolioMutations = {
  createPortfolio: async (root, { input }) => {
    const createdPortfolio = Portfolio.create(input)
    return createdPortfolio;
  },
  updatePortfolio: async (root, { id, input }) => {
    const updatedPortfolio = await Portfolio.findOneAndUpdate({_id: id}, input, {new: true})
    return updatedPortfolio;
  },
  deletePortfolio: async (root, { id }) => {
    const deletedPortfolioId = await Portfolio.findOneAndDelete({_id: id})
    return deletedPortfolioId._id
  },
};
