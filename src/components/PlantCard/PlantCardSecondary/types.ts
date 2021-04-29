
import { RectButtonProps } from "react-native-gesture-handler";

export interface PlantCardSecondaryProps extends RectButtonProps {
    title: string;
    photo: string;
    hour: string;
    handleRemove: () => void;
}