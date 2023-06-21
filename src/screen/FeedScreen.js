import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'

const FeedScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "red" }}>
            <FocusAwareStatusBar />

            <Text>FeedScreen</Text>
        </View>
    )
}

export default FeedScreen
