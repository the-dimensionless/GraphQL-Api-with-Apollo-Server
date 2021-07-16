const resolvers = {
    Query: {
        sessions: (parent, args, context, info) => {
            const {dataSources} = context;
            //console.log(`parent : ${parent}`);
            //console.log(`args : ${JSON.stringify(args)}`);
            console.log(`context : ${JSON.stringify(context)}`);
            //console.log(`info : ${JSON.stringify(info)}`);
            return dataSources.sessionAPI.getSessions(args);
        },
        sessionById: (parent, {id}, {dataSources}, info) => {
            return dataSources.sessionAPI.getSessionById(id);
        },
        speakers: (parent, args, {dataSources}, info) => {
            return dataSources.speakersAPI.getSpeakers();
        },
        speakerById: (parent, {id}, {dataSources}, info) => {
            return dataSources.speakersAPI.getSpeakerById(id);
        }
    }
};

module.exports = resolvers;