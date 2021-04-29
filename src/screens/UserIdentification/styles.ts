import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    form: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 12,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 20
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
})