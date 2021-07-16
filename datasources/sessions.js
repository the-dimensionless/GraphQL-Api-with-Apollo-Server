const sessions = require('../data/sessions.json');
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');
class SessionAPI extends DataSource {
    constructor() {
        super();
        console.log('Session API constructor is created');
    }

    initialize(config) {

    }

    getSessions(args) {
        const results = _.filter(sessions, args);
        return results;
    }

    getSessionById(id) {
        const results = _.filter(sessions, {id: parseInt(id)});
        return results[0];
    }
}

module.exports = SessionAPI;