import { View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'
import Container from '../component/Container'
import SongBookAppBar from '../component/SongBookAppBar'
import { Colors } from '../global'
import SliderEntry from '../component/SlideEntry'
import SongBookTopTab from '../navigation/topTab/SongBookTopTab'
const SongBookScreen = () => {
    const _renderItemWithParallax = ({ item, index }, parallaxProps) => {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }
    return (
        <Container>
            <FocusAwareStatusBar isTopSpace={false} />
            <SongBookAppBar />

            <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
                <SongBookTopTab />
            </View>
        </Container>
    )
}

export default SongBookScreen
