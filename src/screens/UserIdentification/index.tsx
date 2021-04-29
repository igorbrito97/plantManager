import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import colors from '../../assets/styles/colors';
import { Button } from '../../components/Button';
import { styles } from './styles';
import AsynStorage from '@react-native-async-storage/async-storage';
import { CONST } from '../../utils/constants';

export function UserIdentification() {
    const navigation = useNavigation();

    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState('');

    function handleInputBlur() {
        setIsFocused(false);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setName(value);
    }

    async function handleSubmit() {
        if (!name)
            return Alert.alert('Me diz como devo te chamar 😢');

        try {
            await AsynStorage.setItem(CONST.userName, name);
            navigation.navigate('Confirmation', {
                title: 'Prontinho',
                subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'PlantSelect'
            })
        }
        catch (error) {
            Alert.alert('Não foi possível salvar seu nome 😢')
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    😄
                                </Text>
                                <Text style={styles.title}>
                                    Como podemos {'\n'}
                                    chamar você?
                                </Text>
                            </View>

                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || !!name) && {
                                        borderColor: colors.green
                                    }
                                ]}
                                placeholder="Digite um nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <Button title="Confirmar" onPress={handleSubmit} />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}