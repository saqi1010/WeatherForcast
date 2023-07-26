import React from "react";
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Colors, ScreenNames } from "../global";
import SplashScreen from "../screens/Splash/SplashScreen";
import SignInScreen from "../screens/SignIn/SignInScreen";
import OtpScreen from "../screens/Otp/OtpScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SignUpScreen from "../screens/SignUp/SignUpScreen";

enableScreens();
const Stack = createStackNavigator();
const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={ScreenNames.SPLASH_SCREEN}>
                <Stack.Screen name={ScreenNames.SPLASH_SCREEN} component={HomeScreen} />
                <Stack.Screen name={ScreenNames.SIGNIN_SCREEN} component={SignInScreen} />
                <Stack.Screen name={ScreenNames.SIGNUP_SCREEN} component={SignUpScreen} />
                <Stack.Screen name={ScreenNames.OTP_SCREEN} component={OtpScreen} />
                <Stack.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;