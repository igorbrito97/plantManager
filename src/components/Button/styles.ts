import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        borderRadius: 16,
        padding: 16
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.complement
    }
})