const {ApolloServer, gql} = require('apollo-server');

const sessions = require('./data/sessions.json');


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
        track: String @deprecated(reason: "Dummy reason for deprecation"),
        level: String
    }`
    console.log('1');


const resolvers = {
    Query: {
        sessions: () => {
            return sessions;
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server
    .listen({
        port: process.env.PORT || 4000
    }).then( ({url}) => {
        console.log(`graphQL server is up and running at ${url}`);
    });