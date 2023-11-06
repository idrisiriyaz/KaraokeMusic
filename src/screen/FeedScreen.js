import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'
import Button from '../component/Button'
import { ScreenNames } from '../global'

const FeedScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: "center" }}>
                <Button title={"Go to Carra Web Page"} onPress={() => navigation.navigate(ScreenNames.TEST_SCREEN)} />
                <Button title={"Go to Form Screen"} onPress={() => navigation.navigate(ScreenNames.FORM_SCREEN)} />
            </View>
            <Text>FeedScreen</Text>
        </View>
    )
}

export default FeedScreen
