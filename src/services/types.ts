export interface EnvironmentProps {
    key: string;
    title: string;
}

export interface PlantProps {
    id: number;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environment: [string];
    frequency: FrequencyDTO;
    dateTimeNotification: Date;
}

interface FrequencyDTO {
    times: number;
    repeat_every: string;
}

export interface StoragePlantProps {
    [id: string]: {
        data: PlantProps,
        notificationId: string;
    }
}