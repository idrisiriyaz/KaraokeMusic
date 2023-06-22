import { View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'
import Container from '../component/Container'
import SongBookAppBar from '../component/SongBookAppBar'
import { Colors } from '../global'
import Carousel from 'react-native-snap-carousel';
import { itemWidth, sliderWidth } from '../component/Slide.style'
import SliderEntry from '../component/SlideEntry'
import SongBookTopTab from '../navigation/topTab/SongBookTopTab'
import { ENTRIES } from '../global/Dummy'
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
            <View style={{ paddingVertical: 10 }}>
                <Carousel
                    data={ENTRIES}
                    renderItem={_renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={1}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={0.7}
                    containerCustomStyle={{ overflow: 'visible' }}
                    loop
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
                <SongBookTopTab />
            </View>
        </Container>
    )
}

export default SongBookScreen
