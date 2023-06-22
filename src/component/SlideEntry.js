import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './Slide.style';

const SliderEntry = ({ data }) => {
    return (
        <TouchableOpacity activeOpacity={1} style={styles.slideInnerContainer}>
            <View style={[styles.imageContainer]}>
                <Image source={{ uri: data.illustration }} style={styles.image} />
            </View>
        </TouchableOpacity>
    );
};



export default SliderEntry;
