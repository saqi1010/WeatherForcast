import { Alert, Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenNames } from '../../global/index';
import { useNavigation } from '@react-navigation/native';


const SignUpHook = () => {
    // state
    const navigation = useNavigation()
    const [fullName, setFullName] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const [dateOfBirth, setDateOfBirth] = React.useState(new Date())
    const [email, setEmail] = React.useState('')
    const [mobileNumber, setMobileNumber] = React.useState('')
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    const [dateOfBirthPickerVisibility, setDateOfBirthPickerVisibility] = React.useState(false)


    // function
    const toggleDateOfPickerVisibility = () => setDateOfBirthPickerVisibility(!dateOfBirthPickerVisibility)

    const goToSignIn = () => {
        navigation.navigate(ScreenNames.SIGNIN_SCREEN)
    }
    const goToTermsAndCondition = () => {

    }


    return {
        mobileNumber,
        setMobileNumber,
        fullName,
        setFullName,
        userName,
        setUserName,
        dateOfBirth,
        setDateOfBirth,
        email,
        setEmail,
        goToSignIn,
        goToTermsAndCondition,
        toggleCheckBox,
        setToggleCheckBox,

    }
}

export { SignUpHook }
