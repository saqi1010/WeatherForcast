import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

const SplashHook = () => {
    const navigation = useNavigation()
    const WeatherForcastOpacity = React.useRef(new Animated.Value(1)).current;

    // dispatch navigation
    const resetStackAndGoToWelcome = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.SIGNIN_SCREEN, }],
    });
    const resetStackAndGoToBottom = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.HOME_SCREEN, }],
    });

    // Api
    const checkUserExistOrNot = async () => {
        const messagingToken = await messaging().getToken();
        let getUserMobileNumberByAsyncStorge = await AsyncStorage.getItem('userData')
        let convertIntoParse = JSON.parse(getUserMobileNumberByAsyncStorge)
        let userPhoneNumber = convertIntoParse?.contactNo
        if (userPhoneNumber) {
            navigation.dispatch(resetStackAndGoToWelcome)
        } else {
            navigation.dispatch(resetStackAndGoToWelcome)
        }
    }

    const onLoad = async () => {
        Animated.timing(WeatherForcastOpacity, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
        }).start(async ({ finished }) => {
            if (finished) {
                checkUserExistOrNot()
            }
        })
    }
    React.useEffect(() => {
        onLoad()
    }, [])
    return {
        onLoad
    }
}

export { SplashHook }
