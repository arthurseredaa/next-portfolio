const express = require("express");
const next = require("next");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const data = {
  portfolios: [
    {
      _id: "0",
      title: "Job in Kyiv",
      content: "It was very nice experience",
      jobType: "React developer",
      daysOfExperience: 100,
      isCurrentlyEmployed: true,
    },
    {
      _id: "1",
      title: "Job in USA",
      content: "Sushis my love <3",
      jobType: "Sushi chef",
      daysOfExperience: 10,
      isCurrentlyEmployed: false,
    },
    {
      _id: "2",
      title: "Job in China",
      content: "It was very nice experience",
      jobType: "Guitar",
      daysOfExperience: 50,
      isCurrentlyEmployed: false,
    },
    {
      _id: "3",
      title: "Job in Germany",
      content: "It was nice experience",
      jobType: "Manager",
      daysOfExperience: 0,
      isCurrentlyEmployed: false,
    },
  ]
}

app.prepare().then(() => {
  const server = express();

  const schema = buildSchema(`
      type Portfolio {
        _id: ID!,
        title: String!,
        content: String!,
        jobType: String!,
        daisOfExperience: Int,
        isCurrentlyEmployed: Boolean
      },
      type Query {
        hello: String
        portfolios: [Portfolio],
      }
  `);

  const root = {
    hello: () => "Hello, world!",
    portfolios: () => data.portfolios
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
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
