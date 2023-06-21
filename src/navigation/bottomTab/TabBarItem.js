import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../global';


const TabBarItem = ({ iconName, iconColor, tabName, textColor }) => {
    return (
        <View style={styles.tabBar}>
            <Icon name={iconName} size={24} color={iconColor ? iconColor : Colors.BLACK} />
            <Text style={[styles.tabBarText, { color: textColor ? textColor : "black" }]}>{tabName}</Text>
            {
                tabName == "Feed" ? <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: Colors.CERISE, position: 'absolute', bottom: 30, left: 20 }} /> : null
            }
        </View >
    )
}

export default TabBarItem
