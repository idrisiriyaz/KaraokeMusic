import { Animated, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Colors } from '../../global';
import Icon from 'react-native-vector-icons/Feather';

export const CustomSongTopTab = ({ state, descriptors, navigation, position }) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: Colors.WHITE, elevation: 4, alignItems: "center" }}>
            <View style={{ paddingHorizontal: 10 }}>
                <Icon name="list" size={24} color={Colors.BLACK} />
            </View>
            <ScrollView horizontal>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const inputRange = state.routes.map((_, i) => i);
                    const opacity = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                    });

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1 }}
                        >
                            <Animated.Text style={{ padding: 10, fontSize: 16, color: isFocused ? Colors.GRAY_DARK : Colors.GRAY_MEDIUM, fontWeight: isFocused ? 600 : 400 }}>
                                {label}
                            </Animated.Text>
                            <View style={{ height: 2, marginTop: 2, backgroundColor: isFocused ? Colors.PRIMARY : Colors.WHITE }} />
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

        </View>
    );
}

export default CustomSongTopTab;
