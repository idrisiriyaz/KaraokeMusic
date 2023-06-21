import { StyleSheet } from "react-native";
import { Colors } from "../../global";


export const styles = StyleSheet.create({
    con: {
        backgroundColor: Colors.WHITE,
        position: 'relative',
        height: 60,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        justifyContent: 'center'


    },
    tabBarCon: {
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    tabBar: {
        justifyContent: "center",
        alignItems: "center"

    },

    screenOption: {
        headerShown: false,
        tabBarStyle: {
            elevation: 2,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
        },
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.GRAY_MEDIUM,
    },
    tabBarText: {
        fontSize: 12,
        fontWeight: 600
    }
});