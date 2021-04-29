import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../../assets/watering.png';

export function Welcome() {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de{'\n'}
                    forma fácil
                </Text>
                <Image source={wateringImg} style={styles.image} resizeMode="contain" />
                <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar. </Text>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={handlePress}
                >
                    <Feather name="chevron-right" style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}