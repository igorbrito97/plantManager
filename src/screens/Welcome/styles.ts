import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20,
        fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        height: 56,
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        borderRadius: 16,
        marginBottom: 10
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})