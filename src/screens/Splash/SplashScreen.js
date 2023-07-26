import React from 'react'
import { Image, Text, View } from 'react-native';
import { Colors, ScreenNames } from '../../global/index';
import { styles } from './SplashStyles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { SplashHook } from './SplashHook';
import { Constant } from '../../global';
import WeatherSvg from '../../assets/svgs/weather.svg'


const SplashScreen = () => {
    const { onLoad } = SplashHook()
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar barColor={Colors.PRIMARY} isLightBar={true} isTopSpace={true} />
            <WeatherSvg height={Constant.CHANGE_BY_MOBILE_DPI(120)} width={Constant.CHANGE_BY_MOBILE_DPI(120)} />
        </View>
    )
}

export default SplashScreen

