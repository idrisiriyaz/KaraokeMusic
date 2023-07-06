import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'
import Button from '../component/Button'
import { ScreenNames } from '../global'

const FeedScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <FocusAwareStatusBar />
            <Button title={"Go to Carra Web Page"} onPress={() => navigation.navigate(ScreenNames.TEST_SCREEN)} />

            <Text>FeedScreen</Text>
        </View>
    )
}

export default FeedScreen
