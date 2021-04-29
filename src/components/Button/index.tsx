import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { ButtonProps } from './types';

export function Button({ title, ...props }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            {...props}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}