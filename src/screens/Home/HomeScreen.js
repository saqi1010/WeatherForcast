import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, ScrollView, RefreshControl } from 'react-native';
import moment from 'moment';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, Constant } from '../../global';
import WeatherForcastHeader from '../../components/WeatherForcastHeader/WeatherForcastHeader';
import { HomeHooks } from './HomeHooks';
import { styles } from './HomeStyle';
const HomeScreen = () => {
    const { currentWeather,
        currentTemp,
        forecastData,
        date,
        isRefreshing,
        renderWeatherForcast,
        onRefresh } = HomeHooks()
    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barColor={Colors.PRIMARY} isLightBar={false} isTopSpace={true} />
            <WeatherForcastHeader WeatherForcastHeaderText={'WeatherForcast'} leftButton={false} />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                    />
                }
            >

                <View style={styles.alginInCenter}>
                    {/* <GlobalTextInput
                    placeholderColor={Colors.BLACK}
                    svg={<SearchSvg width={Constant.CHANGE_BY_MOBILE_DPI(20)} height={Constant.CHANGE_BY_MOBILE_DPI(20)} />}
                    setValue={setCityNameSearch}
                    placeholderText={'Search City'}
                    value={cityNameSearch}
                    externalMainContainerInputStyle={styles.externalStyle}
                // externalSvgContainerStyle={styles.svgContainerStyle}
                /> */}
                </View>
                <View style={styles.weatherContainer}>
                    <Text style={{ ...styles.temperatureSmall, marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20), marginTop: Constant.CHANGE_BY_MOBILE_DPI(10) }}>Mumbai</Text>
                    <View style={styles.flexDirectionRow1}>
                        <Text style={styles.timeFontStyle}>{moment(date).format('dddd')}</Text>
                        <Text style={styles.timeFontStyle1}>{moment(date).format('MM, MMM')}</Text>
                    </View>
                    <View style={styles.flexDirectionRow1}>
                        <View style={styles.flexDirection}>
                            <Text style={styles.temperature}>{currentTemp}</Text>
                            <Text style={styles.temperatureSmall}>°C</Text>
                        </View>
                        <Text style={styles.weatherCondition}>{currentWeather && currentWeather?.weather[0].main}</Text>
                    </View>
                </View>
                <Text style={styles.today}>{'5-Day Forecast'}</Text>

                {forecastData &&
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ marginLeft: Constant.CHANGE_BY_MOBILE_DPI(20) }}
                        data={forecastData} horizontal renderItem={renderWeatherForcast} />}
            </ScrollView>
        </View>
    );
};



export default HomeScreen;
