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
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(40),
        marginBottom: Constant.CHANGE_BY_MOBILE_DPI(70)
    },
    externalStyle: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
        marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    svgContainerStyle: {
        top: Constant.CHANGE_BY_MOBILE_DPI(4)
    },
    buttonExternalStyle: {
        width: Constant.SCREEN_WIDTH - 40,
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
        marginBottom: Constant.CHANGE_BY_MOBILE_DPI(30)
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
        marginVertical: Constant.SCREEN_HEIGHT / 5
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    checkBoxStyle: {
        transform: [{ scale: 0.85 }],
        borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50)
    }
})