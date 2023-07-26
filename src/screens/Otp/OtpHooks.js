import React from 'react'
import { Alert, Animated, StyleSheet, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { ScreenNames } from '../../global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

const OtpHooks = () => {

    const navigation = useNavigation()
    const otpInput = React.useRef(null);

    // state
    const [confirm, setConfirm] = React.useState(null);
    const [code, setCode] = React.useState('');
    const [loader, setLoader] = React.useState(false)

    // function
    const resetStackAndGoToBottom = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.HOME_SCREEN }],
    });

    const goToHome = async () => {
        setLoader(true)
        try {
            await confirm.confirm(code)
            const messagingToken = await messaging().getToken();
            await AsyncStorage.setItem("userData", JSON.stringify(''));
            setLoader(false)
            navigation.dispatch(resetStackAndGoToBottom)
        } catch (error) {
            setLoader(false)
            Alert.alert("Alert", error.message)
            console.log('goToHome_error', error.message)
        }
    }

    const getOtpByMobileNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }
    const sendOtptoFirebase = () => {
        getOtpByMobileNumber(`+91${8669390062}`)
    }
    // useEffect
    React.useEffect(() => {
        sendOtptoFirebase()
    }, [])
    return {
        code,
        setCode,
        goToHome,
        loader,
        otpInput
    }
}

export { OtpHooks }
