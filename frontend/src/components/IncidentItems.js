import React from 'react';
import { FiTrash2 } from 'react-icons/fi';


function IncidentItems({ data, handleDeleteIncident }) {
    return (
        <li>
            <strong>CASO:</strong>
            <p>{data.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{data.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.value)}</p>

            <button onClick={() => handleDeleteIncident(data.id)} type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
            </button>
        </li>
    );
}

export default IncidentItems;
