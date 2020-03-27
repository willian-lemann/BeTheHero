const OngService = require('../services/OngService');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await OngService.index();

        if (ongs == null)
            return response.status(404).json();

        return response.json(ongs);
    },

    async store(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        const ong = {
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        }

        await OngService.create(ong);

        return response.json({ id })
    },

    async destroy(request, response) {
        const { id } = request.params;
        const ong = await OngService.destroy(id);

        if (ong == null)
            return response.status(404).json();

        return response.status(204).send();
    },
};