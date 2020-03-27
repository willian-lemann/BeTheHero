const connection = require('../database/connection');

exports.index = async (request, response) => {
    const ongs = await connection('ongs').select('*');
    return ongs;
};

exports.create = async (data) => {
    return await connection('ongs').insert(data);
};
 
exports.destroy = async (id) => {
    const ong = await connection('ongs').select('*').where('id', id);

    if (!ong)
        return null;

    return await connection('ongs').delete().where('id', id)

};