import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, Constants } from '../global'
import Icon from 'react-native-vector-icons/Feather';

const SongBookAppBar = () => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.PRIMARY, Colors.SECONDARY]} style={styles.linearGradient}>
            <View style={styles.appContainer}>
                <View style={styles.appBarRow}>
                    <Icon name="search" size={20} color={Colors.WHITE} />
                    <Text numberOfLines={1} style={styles.appBarText}>
                        Search for songs, singers, invitation
                    </Text>
                </View>
                <View style={styles.messageContainer}>
                    <Icon name="message-circle" size={20} color={Colors.WHITE} />
                    <View style={styles.messageBadge} >
                        <Text style={styles.badgeText}>1</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default SongBookAppBar

const styles = StyleSheet.create({
    linearGradient: {
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 10,
        elevation: 2,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    appContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    appBarRow: {
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: Colors.BLACK + 30,
        paddingHorizontal: 6,
        paddingVertical: 10,
        alignItems: "center",
    },
    appBarText: {
        marginLeft: 10,
        color: Colors.WHITE,
        fontSize: 16,
        width: Constants.SCREEN_WIDTH * 0.7,
    },
    messageContainer: { flex: 1, justifyContent: "center", alignItems: "flex-end" },
    messageBadge: { height: 16, width: 16, borderRadius: 16, justifyContent: "center", alignItems: 'center', backgroundColor: Colors.CERISE, position: 'absolute', bottom: 10, left: 34 },
    badgeText: { color: Colors.WHITE, fontSize: 8 }
})
