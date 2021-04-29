import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { SvgFromUri } from 'react-native-svg';
import { PlantCardPrimaryProps } from './types';

export const PlantCardPrimary = ({
    name,
    photo,
    ...props }: PlantCardPrimaryProps) => {

    return (
        <RectButton
            style={styles.container}
            {...props}
        >
            <SvgFromUri
                uri={photo}
                width={70}
                height={70}
            />
            <Text style={styles.text} >
                {name}
            </Text>
        </RectButton>
    )
}

export default PlantCardPrimary;