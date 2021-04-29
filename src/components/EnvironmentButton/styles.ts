import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        height: 56,
        width: 76,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    activeContainer: {
        backgroundColor: colors.green_light
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },
    activeText: {
        fontFamily: fonts.text,
        color: colors.green_dark
    }
})