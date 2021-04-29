import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';
import { EnvironmentButtonProps } from './types';

export function EnvironmentButton({
    title,
    active = false,
    ...props
}: EnvironmentButtonProps) {
    return (
        <RectButton
            style={[
                styles.container,
                active && styles.activeContainer
            ]}
            {...props}
        >
            <Text style={[
                styles.text,
                active && styles.activeText
            ]}>
                {title}
            </Text>
        </RectButton>
    )
}