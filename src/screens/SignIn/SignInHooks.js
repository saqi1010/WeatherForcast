import { Alert, Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';

const SignInHooks = () => {

    const navigation = useNavigation()
    const [mobileNumber, setMobileNumber] = React.useState('')
    const [loader, setLoader] = React.useState(false)


    const goToSignUp = () => {
        navigation.navigate(ScreenNames.SIGNUP_SCREEN)
    }

    const resetStackAndGoToBottom = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.HOME_SCREEN, }],
    });


    const goToOtp = async () => {
        if (mobileNumber.length > 9) {
            navigation.navigate(ScreenNames.HOME_SCREEN)
        } else {
            Alert.alert("Alert", "Please add your PhoneNumber")
        }

    }



    return {
        mobileNumber,
        setMobileNumber,
        goToSignUp,
        goToOtp,
        loader,

    }
}

export { SignInHooks }
