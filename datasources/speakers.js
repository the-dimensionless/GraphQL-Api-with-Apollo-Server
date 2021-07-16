const {RESTDataSource} = require('apollo-datasource-rest');

class SpeakersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000/speakers';
        console.log('Speaker API contructor is created');
    }

    async getSpeakerById(id) {
        const data = await this.get(`/${id}`);
        return data;
    }
    async getSpeakers(arg) {
        const data = await this.get(`/`);
        return data;
    }
}

module.exports = SpeakersAPI;