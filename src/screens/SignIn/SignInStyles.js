import { StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global";
export const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: Colors.SNOW
    },
    subContainer: {

    },
    footerContainer: {
        alignItems: 'center'

    },
    loginFontStyle: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(24),
        color: Colors.RICH_BLACK
    },
    loginFontStyle: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(24),
        color: Colors.RICH_BLACK
    },
    suggestionFontStyle: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(18),
        color: Colors.RICH_BLACK,
        textAlign: 'center'
    },
    alignCenterContainer: {
        alignItems: 'center',
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(60)
    },
    externalStyle: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    svgContainerStyle: {
        top: Constant.CHANGE_BY_MOBILE_DPI(4)
    },
    buttonExternalStyle: {
        width: Constant.SCREEN_WIDTH - 40,
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    verticalContainer: {
        marginVertical: Constant.CHANGE_BY_MOBILE_DPI(30)
    },
    accountFontStyle: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.RICH_BLACK,
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(50)
    },
    accountFontStyleWithPrimaryColor: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.PRIMARY,
    },
    alginInCenter: {
        marginVertical: Constant.SCREEN_HEIGHT / 5
    }
})