import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'

const ActivityScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "blue" }}>
            <FocusAwareStatusBar />

            <Text>ActivityScreen</Text>
        </View>
    )
}

export default ActivityScreen

const styles = StyleSheet.create({})