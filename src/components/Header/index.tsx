import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { CONST } from '../../utils/constants';
import { styles } from './styles';

export function Header() {
    const [name, setName] = useState('');

    useEffect(() => {
        loadStorageName();
    }, [])

    async function loadStorageName() {
        const value = await AsyncStorage.getItem(CONST.userName);
        setName(value || '');
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>
                    Olá,
                </Text>
                <Text style={styles.userName}>
                    {name}
                </Text>
            </View>
            {/* <Image source={} style={styles.image}/> */}
        </View>
    )
}