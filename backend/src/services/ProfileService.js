const connection = require('../database/connection');

exports.ListSpecificIncidents = async (ong_id) => {
    const incidents = await connection('incidents').where('ong_id', ong_id).select('*');
    return incidents;
};

