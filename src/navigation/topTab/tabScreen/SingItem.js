import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../../component/Button'
import { Colors, Constants } from '../../../global'
import Icon from 'react-native-vector-icons/Feather';

const SingItem = ({ item }) => {

    const { title, subtitle, illustration } = item;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={{ uri: illustration }} />
            </View>
            <View style={{ padding: 8 }}>
                <Text numberOfLines={1} style={{ ...styles.textStyle, color: Colors.BLACK, fontSize: 16, fontWeight: 500 }}>
                    {title}
                </Text>
                <Text numberOfLines={1} style={{ ...styles.textStyle, color: Colors.GRAY_MEDIUM, fontSize: 14, fontWeight: 400 }}>
                    {subtitle}
                </Text>
                <View style={styles.centerRow}>
                    <Icon name="user" color={Colors.GRAY_LIGHT} />
                    <Text numberOfLines={1} style={{ ...styles.textStyle, color: Colors.GRAY_LIGHT, fontSize: 12, marginLeft: 2 }}>
                        {title}
                    </Text>
                </View>
            </View>
            <View style={styles.singContainer}>
                <Button title='Sing' style={{ marginBottom: 6 }} />
                <View style={styles.centerRow}>
                    <Text style={{ color: Colors.JADE, fontSize: 12 }}>
                        84% (2K+)
                    </Text>
                    <Icon name="thumbs-up" color={Colors.JADE} />
                </View>
            </View>
        </View>
    )
}

export default SingItem

const styles = StyleSheet.create({

    container: { flexDirection: "row", alignItems: "center", width: Constants.SCREEN_WIDTH, padding: 20, paddingVertical: 10, },
    textStyle: {
        width: Constants.SCREEN_WIDTH * 0.46,
    },

    imageContainer: { flex: 1, height: 60, width: 60, backgroundColor: Colors.ALERT, borderRadius: 6, },
    singContainer: { flex: 1, justifyContent: "flex-start", },
    centerRow: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
    imageStyle: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: 6,
    }
})