import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'
import { BlurView } from '@react-native-community/blur'
import { Colors, Constants } from '../global'
import Icon from 'react-native-vector-icons/Feather';

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <FocusAwareStatusBar isTopSpace={false} />
            <View style={styles.container}>
                <Image
                    key={'blurryImage'}
                    source={{ uri: 'https://i.imgur.com/UPrs1EWl.jpg' }}
                    style={styles.absolute}
                />
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={10}
                    reducedTransparencyFallbackColor="white"
                >
                    <View style={{ height: StatusBar.currentHeight }} />
                    <View style={{ justifyContent: "flex-end", alignItems: "flex-end", marginHorizontal: 20, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="user" color={Colors.WHITE} size={24} style={{ marginHorizontal: 10 }} />
                            <Icon name="user" color={Colors.WHITE} size={24} style={{ marginHorizontal: 10 }} />
                            <Icon name="user" color={Colors.WHITE} size={24} style={{ marginHorizontal: 10 }} />
                            <Icon name="user" color={Colors.WHITE} size={24} style={{ marginHorizontal: 10 }} />

                        </View>
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                        <View style={{ borderRadius: 60, height: 60, width: 60, borderColor: Colors.WHITE, borderWidth: 1 }}>
                            <Image source={{ uri: "https://i.imgur.com/UYiroysl.jpg" }} />
                        </View>
                    </View>
                </BlurView>
            </View>

            <View style={{ backgroundColor: Colors.WHITE, height: Constants.SCREEN_HEIGHT / 1.7, bottom: 20, borderRadius: 20 }}>

            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: Constants.SCREEN_HEIGHT / 2
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});