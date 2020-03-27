const connection = require('../database/connection');

exports.index = async (page) => {
    let currentPage = page - 1;
    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ])
        .limit(5)
        .offset(currentPage * 5)
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id');
    return [incidents, count];
};

exports.create = async (data) => {
    return await connection('incidents').insert(data);
};

exports.destroy = async (id, ong_id) => {
    const incident = await connection('incidents').where('id', id).select('ong_id').first();

    if (incident.ong_id != ong_id)
        return { error: 'Operation not permitted.' };

    return await connection('incidents').where('id', id).delete();
};