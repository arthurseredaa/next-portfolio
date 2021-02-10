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

exports.portfolioTypes = `
  type Portfolio {
    _id: ID!
    ${portfolioFields}
  }

  input PortfolioInput {
    ${portfolioFields}
  }
`;

// USER

exports.userTypes = `
  input SignUpInput {
    avatar: String
    email: String!
    name: String
    username: String!
    password: String!
    passwordConfirmation: String!
  }
`;
