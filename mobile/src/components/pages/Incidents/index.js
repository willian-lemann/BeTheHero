import React, { useState, useEffect, useMemo } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../../assets/logo.png';
import styles from './styles';
import api from '../../../services/api';

import IncidentItem from '../../IncidentItem';

function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const loadIncidents = async () => {
        if (loading)
            return

        if (total > 0 && incidents.length === total)
            return;

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        }); 
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1)
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents()
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}> Bem-vindo! </Text>
            <Text style={styles.description}> Escolha um dos caso abaixo e salve o dia. </Text>


            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => <IncidentItem data={incident} />}
            />
        </View>

    );
}

export default Incidents;
