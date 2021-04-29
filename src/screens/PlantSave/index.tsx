import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, Alert, View, Platform, Image } from 'react-native';
import { SvgFromUri } from 'react-native-svg'
import { styles } from './styles';
import waterDrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/core';
import { PlantSaveParams } from '../../routes/types';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { savePlants } from '../../services/storage';

export function PlantSave() {
    const navigation = useNavigation();
    const route = useRoute();
    const { plant } = route.params as PlantSaveParams;
    const { name, id, about, photo, water_tips, environment, frequency } = plant;

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios' ? true : false);

    useEffect(() => {

    }, [])

    function handleDateTime(event: Event, dateTime: Date | undefined) {
        if (Platform.OS === 'android') {
            setShowDatePicker(oldValue => !oldValue);
        }

        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Alert.alert("Escolha uma hora no futuro! ⏰");
        }

        if (dateTime)
            setSelectedDateTime(dateTime);
    }

    function handleOpenDateTimePickerAndroid() {
        setShowDatePicker(oldValue => !oldValue);
    }

    async function handleSave() {
        try {
            await savePlants({
                ...plant,
                dateTimeNotification: selectedDateTime
            });
            navigation.navigate('Confirmation', {
                title: 'Tudo certo',
                subtitle: 'Fique tranquilo que sempre vamos lembrar vocẽ de cuidar da sua plantinha com muito cuidado.',
                buttonTitle: 'Muito obrigado :D',
                icon: 'hug',
                nextScreen: 'MyPlants'
            })
        }
        catch (error) {
            Alert.alert("Não foi possível salvar 😢")
        }
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={photo}
                    height={150}
                    width={150}
                />

                <Text style={styles.plantName}>{name}</Text>
                <Text style={styles.plantAbout}>
                    {about}
                </Text>
            </View>
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image style={styles.tipImage} source={waterDrop} />
                    <Text style={styles.tipText}>
                        {water_tips}
                    </Text>
                </View>
                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>

                {
                    showDatePicker &&
                    <DateTimePicker
                        value={selectedDateTime}
                        mode="time"
                        display="spinner"
                        onChange={handleDateTime}
                    />
                }

                {
                    Platform.OS === 'android' &&
                    <TouchableOpacity
                        style={styles.dateTimePickerButton}
                        onPress={handleOpenDateTimePickerAndroid}
                    >
                        <Text
                            style={styles.dateTimePickerText}
                        >
                            {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                        </Text>

                    </TouchableOpacity>
                }
                <Button
                    title="Cadastrar planta"
                    onPress={handleSave}
                />
            </View>

        </ScrollView>
    )
}