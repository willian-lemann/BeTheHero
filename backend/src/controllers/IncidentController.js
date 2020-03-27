const IncidentService = require('../services/IncidentService');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;

        const [incidents, count] = await IncidentService.index(page);

        if (incidents == null)
            return response.status(404).json();

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async store(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const incident = {
            title,
            description,
            value,
            ong_id,
        };

        const [id] = await IncidentService.create(incident);
        return response.json({ id });
    },

    async destroy(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await IncidentService.destroy(id, ong_id);

        if (incident.error)
            return response.status(401).json();

        return response.status(204).send();
    },
};