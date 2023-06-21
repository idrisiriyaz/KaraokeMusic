import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'

const ExploreScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "yellow" }}>
            <FocusAwareStatusBar />

            <Text>ExploreScreen</Text>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({})