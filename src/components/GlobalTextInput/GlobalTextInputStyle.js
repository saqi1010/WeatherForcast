import { StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global";
export const styles = StyleSheet.create({
    inputMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Constant.CHANGE_BY_MOBILE_DPI(46),
        borderWidth: Constant.CHANGE_BY_MOBILE_DPI(1.5),
        borderColor: Colors.RICH_BLACK_30,
        borderRadius: Constant.CHANGE_BY_MOBILE_DPI(5),

    },
    svgContainer: {
        paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(10)
    },
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    placeHolderStyle: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.BLACK,
        height: Constant.CHANGE_BY_MOBILE_DPI(46),

    }
})
