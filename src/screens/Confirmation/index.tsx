import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Button } from '../../components/Button';
import { ConfirmationParams } from '../../routes/types';
import { styles } from './styles';

export function Confirmation() {
    const navigation = useNavigation();
    const routes = useRoute();
    const { buttonTitle, icon, nextScreen, subtitle, title } = routes.params as ConfirmationParams;

    function handlePress() {
        navigation.navigate(nextScreen);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.emoji}>
                    {icon === 'smile' ? '😁' : '🤗'}
                </Text>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>

                <View style={styles.footer}>
                    <Button title={buttonTitle} onPress={handlePress} />
                </View>
            </View>
        </SafeAreaView>
    )
}