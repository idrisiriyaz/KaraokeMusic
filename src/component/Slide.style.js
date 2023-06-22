import { StyleSheet, Platform } from 'react-native';
import { Colors, Constants } from '../global';
const IS_IOS = Platform.OS === 'ios';

function wp(percentage) {
    const value = (percentage * Constants.SCREEN_WIDTH) / 100;
    return Math.round(value);
}

const slideHeight = Constants.SCREEN_HEIGHT * 0.16;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = Constants.SCREEN_WIDTH;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 6;

export default StyleSheet.create({

    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },

    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    },
    imageContainerEven: {
        backgroundColor: Colors.BLACK,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius,
        elevation: 4,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        height: slideHeight,
        borderRadius: entryBorderRadius,
    },
});