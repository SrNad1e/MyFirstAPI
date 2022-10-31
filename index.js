const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB =
  "mongodb+srv://srnadie:1gYFeybAQn30I7qx@cluster0.hmalzwg.mongodb.net/?retryWrites=true&w=majority";
const typeDefsProduct = require("./graphql/productSell/typeDefs");
const resolversProduct = require("./graphql/productSell/resolver");
const typeDefsUser = require("./graphql/userTeam/typeDefs");
const resolversUser = require("./graphql/userTeam/resolvers");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const server = new ApolloServer({
  typeDefs: [typeDefsProduct, typeDefsUser],
  resolvers: [resolversProduct, resolversUser],
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDb Connection Successful");
    return server.listen({
      port: 5000,
    });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
