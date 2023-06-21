import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <FocusAwareStatusBar />
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})