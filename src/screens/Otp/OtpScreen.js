import React from 'react'
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import WeatherForcastHeader from '../../components/WeatherForcastHeader/WeatherForcastHeader'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constant } from '../../global/index'
import GlobalButton from '../../components/GlobalButton/GlobalButton'
import { styles } from './OtpStyles'
import { OtpHooks } from './OtpHooks'
import OTPTextInput from 'react-native-otp-textinput';
const OtpScreen = () => {
    const {
        goToHome,
        code,
        setCode,
        loader,
        otpInput
    } = OtpHooks()
    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <WeatherForcastHeader WeatherForcastHeaderText={''} leftButton={true} />
            <View style={styles.subContainer}>
                <View style={styles.alignCenterContainer}>
                    <Text style={styles.loginFontStyle}>Enter OTP</Text>
                    <Text style={styles.suggestionFontStyle}>Enter Unique verification code{'\n'} which you have received on your{'\n'} phone number.</Text>
                </View>
                <View style={styles.alginInCenter}>
                    {/* <OtpInput setValue={(text) => {
                        let removeArray = text?.join('')
                        setCode(removeArray)
                    }} /> */}
                    <OTPTextInput
                        handleTextChange={(item) => {
                            setCode(item);
                            if (item.length == 6) {
                                Keyboard.dismiss();
                            }
                        }}
                        underlineColorAndroid='transparent'
                        ref={otpInput}
                        inputCount={6}
                        tintColor={Colors.RICH_BLACK_30}
                        offTintColor={Colors.GRAY_MEDIUM}
                        containerStyle={{ alignment: 'center', paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(11) }}
                        textInputStyle={styles.textInputStyle}
                    />


                </View>
            </View>
            <View style={styles.footerContainer}>
                <GlobalButton
                    loader={loader}
                    buttonPress={goToHome}
                    externalButtonContainerStyle={styles.buttonExternalStyle}
                    buttonText='Submit'
                />
            </View>
        </View>
    )
}
export default OtpScreen