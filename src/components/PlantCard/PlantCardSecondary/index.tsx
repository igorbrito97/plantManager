import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { styles } from './styles';
import { SvgFromUri } from 'react-native-svg';
import { PlantCardSecondaryProps } from './types';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import colors from '../../../assets/styles/colors';

export const PlantCardSecondary = ({
    title,
    photo,
    hour,
    handleRemove,
    ...props }: PlantCardSecondaryProps) => {

    function renderSwipeCard() {
        return (
            <Animated.View>
                <View>
                    <RectButton
                        style={styles.buttonRemove}
                        onPress={handleRemove}
                    >
                        <Feather name="trash" size={32} color={colors.white} />
                    </RectButton>
                </View>
            </Animated.View>
        )
    }

    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={renderSwipeCard}
        >
            <RectButton
                style={styles.container}
                {...props}
            >
                <SvgFromUri
                    uri={photo}
                    width={50}
                    height={50}
                />
                <Text style={styles.title} >
                    {title}
                </Text>
                <View style={styles.details}>
                    <Text style={styles.timeLabel} >
                        Regar às
                    </Text>
                    <Text style={styles.time} >
                        {hour}
                    </Text>
                </View>
            </RectButton>
        </Swipeable>
    )
}

export default PlantCardSecondary;