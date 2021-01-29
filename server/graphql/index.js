const mongoose = require("mongoose");
//GraphQL Models
const Portfolio = require("./models/Portfolio");
const User = require("./models/User");
//resolvers
const {
  portfolioQueries,
  portfolioMutations,
  userMutations,
} = require("./resolvers");
//types
const { portfolioType, userType } = require("./types");

const { ApolloServer, gql } = require("apollo-server-express");

exports.createApolloServer = () => {
  const typeDefs = gql(`

  ${portfolioType}

  ${userType}

  type Query {
    hello: String,
    portfolios: [Portfolio],
    portfolio(id: ID): Portfolio,
  }

  type Mutation {
    createPortfolio(input: PortfolioInput): Portfolio,
    updatePortfolio(id: ID, input: PortfolioInput): Portfolio,
    deletePortfolio(id: ID): ID,

    signIn: String,
    signUp: String,
    signOut: String
  }
`);

  const resolvers = {
    Query: { ...portfolioQueries },
    Mutation: { ...portfolioMutations, ...userMutations },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      models: {
        Portfolio: new Portfolio(mongoose.model("Portfolio")),
        User: new User(mongoose.model("User")),
      },
    }),
  });

  return apolloServer;
};
