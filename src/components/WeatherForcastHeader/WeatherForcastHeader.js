import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackArrowSvg from "../../assets/svgs/BackArrowSvg.svg"
import { useNavigation } from '@react-navigation/native'
import { styles } from './WeatherForcastHeaderStyles'
import { Constant, ScreenNames } from '../../global'
const WeatherForcastHeader = ({ leftButton, WeatherForcastHeaderText = "Header", externalHeaderContainer, profileDataFlag, rightButton = false, profileNavigationFlag = false, ScreenName = '' }) => {
    const navigation = useNavigation()
    const onpress = () => {
        if (profileNavigationFlag) {
            ScreenName != '' && navigation.navigate(ScreenName)
        } else {
            if (leftButton) {
                navigation.goBack()
            }
        }
    }
    return (
        <View style={styles.headerMainConatiner}>
            {
                leftButton &&
                <TouchableOpacity activeOpacity={0.3} hitSlop={{ left: 0, right: 0, top: 0, bottom: 0 }} onPress={onpress}>
                    <BackArrowSvg />
                </TouchableOpacity>
            }
            {
                WeatherForcastHeaderText &&
                <View style={[styles.headerContainer, externalHeaderContainer]}>
                    <Text style={styles.headerText}>{WeatherForcastHeaderText}</Text>
                </View>
            }


        </View>
    )
}

export default WeatherForcastHeader

