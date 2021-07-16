const {ApolloServer, gql} = require('apollo-server');

const SessionAPI = require('./datasources/sessions');
const SpeakersAPI = require('./datasources/speakers');


const typeDefs = require('./schemas/schema');
const resolvers = require('./resolvers/index');

const dataSources = () => ({
    sessionAPI: new SessionAPI(),
    speakersAPI: new SpeakersAPI()
});

// use introspection: false to disable the apollo playground
const server = new ApolloServer({typeDefs, resolvers, dataSources});

server
    .listen({
        port: process.env.PORT || 4000
    }).then( ({url}) => {
        console.log(`graphQL server is up and running at ${url}`);
    });