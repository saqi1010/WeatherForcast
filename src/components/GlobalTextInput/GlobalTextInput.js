import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './GlobalTextInputStyle'
import { Constant } from '../../global'

const GlobalTextInput = ({ setValue, value = '', svg = null, externalMainContainerInputStyle,
    placeholderText = '',
    flagForManageInput = 0,
    externalSvgContainerStyle,
    placeholderColor = '', multiline = false,
    externalPlaceHolder, keyboardType = null, maxLength = null,
    onFocus = () => { },
    onBlur = () => { },
    editable = true }) => {
    const onChangeText = (text) => {
        setValue(text)
    }
    return (
        <View style={[styles.inputMainContainer, externalMainContainerInputStyle]}>
            <View style={[styles.svgContainer, externalSvgContainerStyle]}>
                {svg}
            </View>
            <View style={styles.flexContainer}>
                <TextInput
                    onFocus={onFocus}
                    onBlur={onBlur}
                    editable={editable}
                    multiline={multiline}
                    textAlignVertical={flagForManageInput == 1 ? 'top' : 'center'}
                    // style={{ backgroundColor: 'red' }}
                    style={[styles.placeHolderStyle, { marginTop: Constant.CHANGE_BY_MOBILE_DPI(10) }, externalPlaceHolder]}
                    placeholderTextColor={placeholderColor}
                    placeholder={placeholderText}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                >{value}</TextInput>
            </View>
        </View>
    )
}

export default GlobalTextInput
