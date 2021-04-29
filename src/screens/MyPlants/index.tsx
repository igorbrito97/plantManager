import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Alert } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';
import waterdrop from "../../assets/waterdrop.png";
import { PlantProps } from '../../services/types';
import { loadPlants, removePlant } from '../../services/storage';
import { format, formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import PlantCardSecondary from '../../components/PlantCard/PlantCardSecondary';
import { Loading } from '../../components/Loading';

export function MyPlants() {
    const [plantList, setPlantList] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextToWater, setNextToWater] = useState('');

    useEffect(() => {
        loadStorageData();
    }, [])

    async function loadStorageData() {
        const list = await loadPlants();

        const nextTime = formatDistance(
            new Date(list[0].dateTimeNotification).getTime(),
            new Date().getTime(),
            { locale: pt }
        );

        setPlantList(list);
        setNextToWater(`Não esqueça de regar a ${list[0].name} à ${nextTime} horas.`);
        setLoading(false);
    }

    function handleRemove(plant: PlantProps) {
        Alert.alert('Remover', `Deseje remover a  ${plant.name}>`, [
            {
                text: 'Não 🙏',
                style: 'cancel',
                onPress: () => { }
            },
            {
                text: 'Sim 😢',
                onPress: async () => {
                    try {
                        await removePlant(plant.id);
                        setPlantList((oldData) => oldData.filter((item) => item.id !== plant.id))
                    }
                    catch (error) {
                        Alert.alert('Não foi possível remover! 😢');
                    }

                }
            }
        ])
    }

    function renderPlantCard(item: PlantProps) {
        return (
            <PlantCardSecondary
                hour={format(item.dateTimeNotification, 'HH:mm')}
                photo={item.photo}
                title={item.name}
                handleRemove={() => handleRemove(item)}
            />
        )
    }

    if (loading)
        return <Loading />

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.spotlight}>
                <Image source={waterdrop} style={styles.image} />
                <Text style={styles.spotlightText}>
                    {nextToWater}
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>Pŕoximas regadas</Text>

                <FlatList
                    data={plantList}
                    keyExtractor={(item) => `item_${item.id}`}
                    renderItem={({ item }) => renderPlantCard(item)}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1 }}
                />
            </View>
        </View>
    )
}