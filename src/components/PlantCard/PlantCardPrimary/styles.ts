import { StyleSheet } from 'react-native';
import colors from '../../../assets/styles/colors';
import fonts from '../../../assets/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16
    }
})