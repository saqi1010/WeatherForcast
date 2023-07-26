import { StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global/index";
export const styles = StyleSheet.create({
    headerMainConatiner: {
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(20),
        paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    headerContainer: {
        flex: 1,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'flex-start',
        marginRight: Constant.CHANGE_BY_MOBILE_DPI(10)

    },
    skip: {

    },
    headerText: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
        color: Colors.WHITE,
        fontWeight: 'blod'
    }
})