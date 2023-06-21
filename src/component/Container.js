import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Container = ({ children }) => {
    return (
        <View style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                {children}
            </KeyboardAvoidingView>
        </View>
    )
}

export default Container

const styles = StyleSheet.create({})