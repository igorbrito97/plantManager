import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import { CONST } from "../utils/constants";
import { PlantProps, StoragePlantProps } from "./types";
import * as Notifications from 'expo-notifications';

export async function savePlants(plant: PlantProps): Promise<void> {
    try {
        const data = await AsyncStorage.getItem(CONST.plants);
        const plantList = data ? (JSON.parse(data) as StoragePlantProps) : {};
        const notificationId = scheduleNotification(plant);

        const newPlant = {
            [plant.id]: {
                data: plant,
                notificationId
            }
        }
        await AsyncStorage.setItem(CONST.plants, JSON.stringify({
            ...newPlant,
            ...plantList
        }))

    } catch (error) {
        throw new Error(error);
    }
}

async function scheduleNotification(plant: PlantProps) {
    const nextTime = new Date(plant.dateTimeNotification);
    const now = new Date();
    const { times, repeat_every } = plant.frequency;
    if (repeat_every === 'weak') {
        const interval = Math.trunc(7 / times);
        nextTime.setDate(now.getDate() + interval);
    }
    else {
        nextTime.setDate(nextTime.getDate() + 1)
    }

    const seconds = Math.abs(Math.ceil(now.getTime() - nextTime.getTime()) / 1000);

    return Notifications.scheduleNotificationAsync({
        content: {
            title: 'Heeeeey,  🌱',
            body: `Está na hora de cuidar da sua ${plant.name}`,
            sound: true,
            priority: Notifications.AndroidNotificationPriority.HIGH,
            data: {
                plant
            },
        },
        trigger: {
            seconds: seconds < 60 ? 60 : seconds,
            repeats: true
        }
    })
}

export async function loadPlants(): Promise<PlantProps[]> {
    try {
        const data = await AsyncStorage.getItem(CONST.plants);
        const plantList = data ? (JSON.parse(data) as StoragePlantProps) : {}

        const sortedPlants = Object.keys(plantList).map((plant) => {
            return {
                ...plantList[plant].data,
                hour: format(new Date(plantList[plant].data.dateTimeNotification), 'HH:mm')
            }
        }).sort((a, b) => Math.floor(
            new Date(a.dateTimeNotification).getTime() / 1000 -
            Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        ))

        return sortedPlants;

    } catch (error) {
        throw new Error(error);
    }
}

export async function removePlant(id: number) {
    const data = await AsyncStorage.getItem(CONST.plants);
    const plants = data ? JSON.parse(data) as StoragePlantProps : {};

    await Notifications.cancelScheduledNotificationAsync(plants[id].notificationId);

    delete plants[id];
    await AsyncStorage.setItem(CONST.plants, JSON.stringify(plants));
}
