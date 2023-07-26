import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './SignInStyles'
import WeatherForcastHeader from '../../components/WeatherForcastHeader/WeatherForcastHeader'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constant } from '../../global'
import GlobalTextInput from '../../components/GlobalTextInput/GlobalTextInput'
import GlobalButton from '../../components/GlobalButton/GlobalButton'
import CallSvg from "../../assets/svgs/phone-call.svg"
import { SignInHooks } from './SignInHooks'

const SignInScreen = () => {
    const { mobileNumber, setMobileNumber, goToSignUp, goToOtp, loader } = SignInHooks()
    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <WeatherForcastHeader WeatherForcastHeaderText={''} leftButton={false} />
            <View style={styles.subContainer}>
                <View style={styles.alignCenterContainer}>
                    <Text style={styles.loginFontStyle}>Login</Text>
                </View>
                <View style={styles.alginInCenter}>
                    <GlobalTextInput
                        placeholderColor={Colors.BLACK}
                        svg={<CallSvg width={Constant.CHANGE_BY_MOBILE_DPI(26)} height={Constant.CHANGE_BY_MOBILE_DPI(26)} />}
                        setValue={setMobileNumber}
                        placeholderText={'+65 8958 4458'}
                        keyboardType={'phone-pad'}
                        maxLength={10}
                        value={mobileNumber}
                        externalMainContainerInputStyle={styles.externalStyle}
                        externalSvgContainerStyle={styles.svgContainerStyle}
                    />
                </View>
            </View>
            <View style={styles.footerContainer}>
                <GlobalButton
                    loader={loader}
                    buttonPress={goToOtp}
                    externalButtonContainerStyle={styles.buttonExternalStyle}
                    buttonText='Get OTP'
                />
                <Text style={styles.accountFontStyle}>Don’t have an account? <Text onPress={goToSignUp} style={styles.accountFontStyleWithPrimaryColor}>Create account</Text></Text>
            </View>
        </View>
    )
}
export default SignInScreen

