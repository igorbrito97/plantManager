import { RectButtonProps } from 'react-native-gesture-handler';

export interface EnvironmentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}