const SessionService = require('../services/SessionService');

module.exports = {
    async store(request, response) {
        const { id } = request.body;

        const ong = await SessionService.create(id);

        if (!ong)
            return response.status(400).json({ error: 'No ONG found with this ID' });

        return response.json(ong);
    },

};