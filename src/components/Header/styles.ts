import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import { statusBarHeight } from '../../utils/utils';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: statusBarHeight()
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.text,
        color: colors.heading,
        lineHeight: 40
    }
})