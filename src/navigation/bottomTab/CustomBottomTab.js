import * as React from 'react';
import { Animated, TouchableOpacity, View, } from 'react-native';

import { Colors } from '../../global';
import { styles } from './styles';
import TabBarItem from './TabBarItem';

const CustomBottomTab = ({ state, navigation }) => {

    const focusColor = Colors.PRIMARY
    const unFocusColor = Colors.GRAY_MEDIUM

    const IconList = [
        <TabBarItem iconColor={unFocusColor} textColor={unFocusColor} iconName={"radio"} tabName="Feed" />,
        <TabBarItem iconColor={unFocusColor} textColor={unFocusColor} iconName={"layers"} tabName="Explore" />,
        <TabBarItem iconColor={unFocusColor} textColor={unFocusColor} iconName={"headphones"} tabName="Songbook" />,
        <TabBarItem iconColor={unFocusColor} textColor={unFocusColor} iconName={"bar-chart"} tabName="Activity" />,
        <TabBarItem iconColor={unFocusColor} textColor={unFocusColor} iconName={"user"} tabName="Profile" />,

    ];

    const FocusIconList = [
        <TabBarItem iconColor={focusColor} textColor={focusColor} iconName={"radio"} tabName="Feed" />,
        <TabBarItem iconColor={focusColor} textColor={focusColor} iconName={"layers"} tabName="Explore" />,
        <TabBarItem iconColor={focusColor} textColor={focusColor} iconName={"headphones"} tabName="Songbook" />,
        <TabBarItem iconColor={focusColor} textColor={focusColor} iconName={"bar-chart"} tabName="Activity" />,
        <TabBarItem iconColor={focusColor} textColor={focusColor} iconName={"user"} tabName="Profile" />,
    ];

    return (
        <View style={styles.con}>
            <View style={styles.tabBarCon}>
                {
                    state.routes.map((route, index) => {
                        const isFocused = state.index === index;
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TouchableOpacity key={`${index}`} activeOpacity={1} onPress={onPress}>
                                <Animated.View>
                                    {
                                        isFocused
                                            ? FocusIconList[index] : IconList[index]
                                    }
                                </Animated.View>
                            </TouchableOpacity>
                        );
                    })
                }

            </View>
        </View>
    );
};

export default CustomBottomTab;