const ProfileService = require('../services/ProfileService');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;
        const incidents = await ProfileService.ListSpecificIncidents(ong_id);
        return response.json(incidents);
    },
};