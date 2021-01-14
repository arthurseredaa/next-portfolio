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
