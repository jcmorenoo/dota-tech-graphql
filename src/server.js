import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { fromPromise } from 'apollo-link';
import Schema from './schema/schema';
import DataLoaders from './dataLoaders/dataLoaders';


const PORT = process.env.PORT || 4000;

const app = express();

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!'
//   },
// };

const server = new ApolloServer({ 
  typeDefs: Schema,
  resolvers: DataLoaders
});
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)