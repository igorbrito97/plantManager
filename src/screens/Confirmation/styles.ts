import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    emoji: {
        fontSize: 78,
        textAlign: 'center',
        marginBottom: 40
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        lineHeight: 38,
        color: colors.heading,
        textAlign: 'center',
        marginTop: 16
    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        paddingHorizontal: 10,
        color: colors.heading,
        textAlign: 'center'
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 40
    }
})