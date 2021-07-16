const {ApolloServer, gql} = require('apollo-server');

const SessionAPI = require('./datasources/sessions');


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

const resolvers = {
    Query: {
        sessions: (parent, args, context, info) => {
            const {dataSources} = context;
            //console.log(`parent : ${parent}`);
            //console.log(`args : ${JSON.stringify(args)}`);
            console.log(`context : ${JSON.stringify(context)}`);
            //console.log(`info : ${JSON.stringify(info)}`);
            return dataSources.sessionAPI.getSessions();
        }
    }
}

const dataSources = () => ({
    sessionAPI: new SessionAPI()
});

const server = new ApolloServer({typeDefs, resolvers, dataSources});

server
    .listen({
        port: process.env.PORT || 4000
    }).then( ({url}) => {
        console.log(`graphQL server is up and running at ${url}`);
    });