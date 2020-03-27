const connection = require('../database/connection');

exports.create = async (id) => {
    const ong = await connection('ongs').where('id', id).select('name').first();
    return ong;
};
