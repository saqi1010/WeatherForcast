import { Dimensions, StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global/index";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY
    },
    temperature: {
        fontSize: 50,
        fontWeight: 'bold',
        color: Colors.WHITE,
    },
    temperatureSmall: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.WHITE,
    },
    weatherCondition: {
        fontSize: 24,
        textTransform: 'capitalize',
        color: Colors.WHITE,
        alignSelf: 'center'
    },
    forecastItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        height: Constant.CHANGE_BY_MOBILE_DPI(100),
        width: Constant.CHANGE_BY_MOBILE_DPI(100),
        borderRadius: Constant.CHANGE_BY_MOBILE_DPI(10),
        backgroundColor: Colors.WHITE + 10,
        marginRight: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    forecastDate: {
        fontSize: 16,
        color: Colors.WHITE
    },
    forecastTemp: {
        fontSize: 18,
        color: Colors.WHITE
    },
    alginInCenter: {
    },
    externalStyle: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    svgContainerStyle: {
        top: Constant.CHANGE_BY_MOBILE_DPI(4)
    },
    weatherContainer: {
        height: Constant.CHANGE_BY_MOBILE_DPI(200),
        backgroundColor: Colors.WHITE + 10,
        borderRadius: Constant.CHANGE_BY_MOBILE_DPI(10),
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(20)

    },
    flexDirection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexDirectionRow1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    timeFontStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.WHITE,
    },
    timeFontStyle1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.WHITE,
    },
    today: {
        fontSize: 30,
        color: Colors.WHITE,
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
});