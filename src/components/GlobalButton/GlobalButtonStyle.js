import { StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global";
export const styles = StyleSheet.create({
    buttonMainContainer: {
        height: Constant.CHANGE_BY_MOBILE_DPI(40),
        backgroundColor: Colors.PRIMARY,
        borderRadius: Constant.CHANGE_BY_MOBILE_DPI(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonFontStyle: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(13),
        color: Colors.WHITE
    }
})