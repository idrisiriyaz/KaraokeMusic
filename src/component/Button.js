import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../global'

const Button = ({ style, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: Colors.DODGER_BLUE, justifyContent: "center", alignItems: "center", borderRadius: 2, ...style }}>
            <Text style={{ padding: 4, color: Colors.WHITE }}>{title ? title : "Button"}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({})