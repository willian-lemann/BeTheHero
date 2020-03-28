import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from '../components/pages/Incidents/styles';

function IncidentItem({ data }) {
    const navigation = useNavigation();

    const navigateToDetail = (incident) => {
        navigation.navigate('Detail', { incident });
    }

    return (
        <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{data.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{data.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.value)}
            </Text>

            <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToDetail(data)}>
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
        </View>
    );
}

export default memo(IncidentItem);