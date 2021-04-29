import { StyleSheet } from 'react-native';
import colors from '../../../assets/styles/colors';
import fonts from '../../../assets/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5
    },
    title: {
        flex: 1,
        fontFamily: fonts.heading,
        marginLeft: 10,
        fontSize: 17,
        color: colors.heading
    },
    details: {
        alignItems: 'flex-end'
    },
    timeLabel: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.body_dark
    },
    buttonRemove: {
        width: 100,
        height: 85,
        backgroundColor: colors.red,
        marginTop: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right: 20,
        paddingLeft: 15
    }
})