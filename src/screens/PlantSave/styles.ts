import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 16
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingBottom: getBottomSpace() || 20,
        paddingTop: 20
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.blue_light,
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
        position: 'relative',
        bottom: 60
    },
    tipImage: {
        height: 56,
        width: 56
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        color: colors.blue,
        fontSize: 17,
        fontFamily: fonts.text,
        textAlign: 'justify'
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 8
    },
    dateTimePickerButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
    },
    dateTimePickerText: {
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text
    }

})