import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './SignUpStyles'
import WeatherForcastHeader from '../../components/WeatherForcastHeader/WeatherForcastHeader'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constant } from '../../global'
import GlobalTextInput from '../../components/GlobalTextInput/GlobalTextInput'
import GlobalButton from '../../components/GlobalButton/GlobalButton'
import CallSvg from "../../assets/svgs/phone-call.svg"
import PersonSvg from "../../assets/svgs/user.svg"
import Message from "../../assets/svgs/Message.svg"
import { SignUpHook } from './SignUpHook'


const SignUpScreen = () => {
    const {
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
        openDatePicker,
        setToggleCheckBox,
        loader
    } = SignUpHook()


    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <WeatherForcastHeader WeatherForcastHeaderText={''} leftButton={true} />
            <ScrollView>

                <View style={styles.subContainer}>
                    <View style={styles.alignCenterContainer}>
                        <Text style={styles.loginFontStyle}>Create account</Text>
                        <Text style={styles.suggestionFontStyle}>Create and start exploring creative {'\n'}campaigns with a minimal clicks.</Text>
                    </View>
                    <GlobalTextInput
                        placeholderText={'Full Name'}
                        placeholderColor={Colors.BLACK}
                        svg={<PersonSvg width={Constant.CHANGE_BY_MOBILE_DPI(20)} height={Constant.CHANGE_BY_MOBILE_DPI(20)} />}
                        setValue={setFullName}
                        value={fullName}
                        externalMainContainerInputStyle={styles.externalStyle}
                    />
                    <GlobalTextInput
                        placeholderText={'User Name'}
                        placeholderColor={Colors.BLACK}
                        svg={<PersonSvg width={Constant.CHANGE_BY_MOBILE_DPI(20)} height={Constant.CHANGE_BY_MOBILE_DPI(20)} />}
                        setValue={setUserName}
                        value={userName}
                        externalMainContainerInputStyle={styles.externalStyle}
                    />

                    <GlobalTextInput
                        placeholderText={'Email'}
                        placeholderColor={Colors.BLACK}
                        svg={<Message width={Constant.CHANGE_BY_MOBILE_DPI(20)} height={Constant.CHANGE_BY_MOBILE_DPI(20)} />}
                        setValue={setEmail}
                        value={email}
                        externalMainContainerInputStyle={styles.externalStyle}
                    />
                    <GlobalTextInput
                        placeholderText={'Phone Number'}
                        maxLength={10}
                        keyboardType={'phone-pad'}
                        placeholderColor={Colors.BLACK}
                        svg={<CallSvg width={Constant.CHANGE_BY_MOBILE_DPI(20)} height={Constant.CHANGE_BY_MOBILE_DPI(20)} />}
                        setValue={setMobileNumber}
                        value={mobileNumber}
                        externalMainContainerInputStyle={styles.externalStyle}
                        externalSvgContainerStyle={styles.svgContainerStyle}
                    />
                </View>
            </ScrollView>

            <View style={styles.footerContainer}>
                <GlobalButton
                    // buttonPress={null}
                    loader={loader}
                    externalButtonContainerStyle={styles.buttonExternalStyle}
                    buttonText='Sign Up'
                />
                <Text style={styles.accountFontStyle}>Already have an account? <Text onPress={goToSignIn} style={styles.accountFontStyleWithPrimaryColor}>Sign In</Text></Text>
            </View>


        </View>
    )
}
export default SignUpScreen

