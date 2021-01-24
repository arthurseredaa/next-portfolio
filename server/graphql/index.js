const mongoose = require("mongoose");
//GraphQL Models
const Portfolio = require("./models/Portfolio");
//resolvers
const { portfolioQueries, portfolioMutations } = require("./resolvers");
//types
const { portfolioType } = require("./types");

const {ApolloServer, gql} = require("apollo-server-express")

exports.createApolloServer = () => {
  const typeDefs = gql(`
  ${portfolioType}

  type Query {
    hello: String
    portfolios: [Portfolio],
    portfolio(id: ID): Portfolio,
  }

  type Mutation {
    createPortfolio(input: PortfolioInput): Portfolio,
    updatePortfolio(id: ID, input: PortfolioInput): Portfolio,
    deletePortfolio(id: ID): ID
  }
`);

  const resolvers = {
    Query: { ...portfolioQueries },
    Mutation: { ...portfolioMutations },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      models: {
        Portfolio: new Portfolio(mongoose.model("Portfolio")),
      },
    }),
  });

  return apolloServer;
};
