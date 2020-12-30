const express = require("express");
const next = require("next");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

//resolvers
const { portfolioResolvers } = require("./graphql/resolvers");
//types
const { portfolioType } = require("./graphql/types");


app.prepare().then(() => {
  const server = express();

  const schema = buildSchema(`
      ${portfolioType}
      type Query {
        hello: String
        portfolios: [Portfolio],
        portfolio(id: ID): Portfolio,
      }
  `);

  const root = {
    ...portfolioResolvers
  };

  server.use(
    "/graphql",
    graphqlHTTP({
      graphiql: true,
      rootValue: root,
      schema,
    })
  );

  server.all("*", (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
