import { PlantProps } from "../services/types";

export interface PlantSaveParams {
    plant: PlantProps
}

export interface ConfirmationParams {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    nextScreen: string;
}
