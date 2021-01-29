// PORTFOLIO
const portfolioFields = `
  title: String
  company: String
  companyWebsite: String
  location: String
  jobTitle: String
  description: String
  startDate: String
  endDate: String
`;

exports.portfolioType = `
  type Portfolio {
    _id: ID!
    ${portfolioFields}
  }

  input PortfolioInput {
    ${portfolioFields}
  }
`;

// USER
const userFields = `
  login: String
  password: String
`;

exports.userType = `
  type User {
    _id: ID!
    ${userFields}
  }
`;
