import { StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global";
export const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: Colors.SNOW
    },
    subContainer: {
        flex: 1,
    },
    footerContainer: {
        alignItems: 'center',
        marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20)

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
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(40)
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
    },
    accountFontStyleWithPrimaryColor: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.PRIMARY,
    },
    alginInCenter: {
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(60)
        // marginVertical: Constant.SCREEN_HEIGHT / 5
    },
    textInputStyle:
    {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.GRAY_MEDIUM,
        height: Constant.CHANGE_BY_MOBILE_DPI(45),
        width: Constant.CHANGE_BY_MOBILE_DPI(45),
        borderRadius: Constant.CHANGE_BY_MOBILE_DPI(4),
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(20),
        backgroundColor: Colors.WHITE,
        marginBottom: Constant.CHANGE_BY_MOBILE_DPI(25),
    }
})