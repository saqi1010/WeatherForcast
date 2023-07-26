import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Animated, FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios';
import { styles } from './HomeStyle';
import moment from 'moment';

const HomeHooks = () => {
    const API_KEY = '6215fe7e9214bc483d9f4c574b99e7ca';
    const BASE_URL_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q='
    const BASE_URL_FORCAST = 'https://api.openweathermap.org/data/2.5/forecast?q='

    const [currentWeather, setCurrentWeather] = useState(null);
    const [currentTemp, setCurrentTemp] = useState(null);
    const [forecastData, setForecastData] = useState([]);
    const [cityNameSearch, setCityNameSearch] = useState('Mumbai');
    const [date, setDate] = useState(new Date());
    const [isRefreshing, setIsRefreshing] = useState(false);






    const getWeatherData = () => {
        axios
            .get(`${BASE_URL_WEATHER}${cityNameSearch}&appid=${API_KEY}`)
            .then((response) => {
                setCurrentWeather(response.data);
                setCurrentTemp(Math.round(response?.data?.main?.temp - 273.15))
            })
            .catch((error) => console.error('error', error.message));

        axios
            .get(`${BASE_URL_FORCAST}${cityNameSearch}&appid=${API_KEY}`)
            .then((response) => {
                const nextFiveDaysData = response.data.list.filter((item, index) => index % 8 === 0);
                setForecastData(nextFiveDaysData);
            })
            .catch((error) => console.error('error', error.message));
    }




    const onRefresh = () => {
        setIsRefreshing(true)
        getWeatherData()
        setIsRefreshing(false)
    }

    const renderWeatherForcast = ({ item, index }) => {
        return (
            <View key={index} style={styles.forecastItem}>
                <Text style={styles.forecastDate}>{moment(item.dt_txt).format('MMM D')}</Text>
                <Text style={styles.forecastTemp}>
                    {Math.round(item.main.temp - 273.15)}°C
                </Text>
            </View>

        )
    }

    useEffect(() => {
        getWeatherData()
    }, []);
    return {
        currentWeather,
        currentTemp,
        forecastData,
        date,
        isRefreshing,
        getWeatherData,
        renderWeatherForcast,
        onRefresh
    }
}

export { HomeHooks }
