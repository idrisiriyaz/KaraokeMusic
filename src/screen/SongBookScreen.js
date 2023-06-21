import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'
import Container from '../component/Container'
import SongBookAppBar from '../component/SongBookAppBar'

const SongBookScreen = () => {
    return (
        <Container>
            <FocusAwareStatusBar isTopSpace={false} />
            <SongBookAppBar />
            <Text>SongBookScreen</Text>
        </Container>
    )
}

export default SongBookScreen
