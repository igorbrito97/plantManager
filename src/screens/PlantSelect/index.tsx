import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import colors from '../../assets/styles/colors';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import PlantCardPrimary from '../../components/PlantCard/PlantCardPrimary';
import api from '../../services/api';
import { EnvironmentProps, PlantProps } from '../../services/types';
import { styles } from './styles';

export function PlantSelect() {
    const navigation = useNavigation();

    const [environmentList, setEnvironmentList] = useState<EnvironmentProps[]>([]);
    const [plantList, setPlantList] = useState<PlantProps[]>([]);
    const [filteredList, setFilteredList] = useState<PlantProps[]>([]);
    const [selectedEnvironment, setSelectedEnvironment] = useState('all');
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        fetchEnvList();
        fetchPlantList();
    }, []);

    async function fetchEnvList() {
        console.log('FETCHING_ENVVVVVVVVVVVVVVVVVVVVVVVVVVS');
        try {
            const { data } = await api.get('plants_environments?_sort=title&_order=asc');
            console.log('dataaaaaaaENV', data);
            setEnvironmentList([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        } catch (error) {
            console.log("Erro ao carregar ambientes! ", error);
        }
    }

    async function fetchPlantList() {
        console.log('FETCHING_PLANTES');
        try {
            const { data } = await api.get(`plants?_sort=name&_order=asc&_page${page}&_limit=8`);
            console.log('dataaaaaaaPLAAAAAAAAAAAAAANTS', data);
            if (!data)
                setLoading(true);

            if (page > 1) {
                setPlantList(oldValue => [...oldValue, ...data]);
                setFilteredList(oldValue => [...oldValue, ...data]);
            } else {
                setPlantList(data);
                setFilteredList(data);
            }
        } catch (error) {
            console.log("Erro ao carregar plantas! ", error);
        }

        setLoading(false);
        setLoadingMore(false);
    }

    function handleFetchMore(distance: number) {
        if (distance < 1)
            return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlantList();
    }

    function handleEnvironmentClick(env: string) {
        setSelectedEnvironment(env);

        if (env === 'all')
            setFilteredList(plantList);
        else {
            const list = plantList.filter(plant => plant.environment.includes(env));
            setFilteredList(list);
        }
    }

    function handlePlantSelect(item: PlantProps) {
        navigation.navigate('PlantSave', { plant: item })
    }

    function renderTabItem(item: EnvironmentProps) {
        const { key, title } = item;
        return (
            <EnvironmentButton
                key={key}
                title={title}
                active={item.key === selectedEnvironment}
                onPress={() => handleEnvironmentClick(item.key)}
            />
        )
    }

    function renderCard(item: PlantProps) {
        const { name, photo } = item;
        return (
            <PlantCardPrimary
                name={name}
                photo={photo}
                onPress={() => handlePlantSelect(item)}
            />
        )
    }

    if (loading)
        return <Loading />

    return (
        <View style={styles.container}>
            <Header />

            <Text style={styles.title}>Em qual ambiente</Text>
            <Text style={styles.subtitle}>você quer colocar sua planta</Text>
            <FlatList
                data={environmentList}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => renderTabItem(item)}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.environmentList}
            />

            <View style={styles.plantList}>
                <FlatList
                    data={filteredList}
                    keyExtractor={(item) => `item_${item.id}`}
                    renderItem={({ item }) => renderCard(item)}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
                    ListFooterComponent={
                        loadingMore ?
                            <ActivityIndicator color={colors.green} />
                            :
                            <></>
                    }
                />
            </View>

        </View>
    )
}