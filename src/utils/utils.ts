import { Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const statusBarHeight = () => {
    if (Platform.OS === 'ios')
        return getStatusBarHeight();
    else
        return StatusBar.currentHeight;
}