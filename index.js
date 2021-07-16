const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        sessions: [Session]
    }
    type Session {
        id: ID!,
        title: String!,
        description: String,
        startsAt: String,
        endsAt: String,
        room: String,
        day: String,
        format: String,
        track: String,
        level: String
    }`
    console.log('1');

const server = new ApolloServer({typeDefs});

server
    .listen({
        port: process.env.PORT || 4000
    }).then( ({url}) => {
        console.log(`graphQL server is up and running at ${url}`);
    });