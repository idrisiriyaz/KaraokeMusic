import React from 'react';
import { Animated, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Colors, ScreenNames } from '../global';


const SplashScreen = () => {

    const resetStackAndGoToHome = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.BOTTOM_TABS }],
    });

    const navigation = useNavigation();

    const opacity = React.useRef(new Animated.Value(0)).current;

    const onLoad = async () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true
        }).start(async ({ finished }) => {
            if (finished) {
                const userId = await AsyncStorage.getItem('userId');
                navigation.dispatch(resetStackAndGoToHome);
            }

        });

    };

    React.useEffect(() => {
        onLoad()
    }, []);

    return (
        <Animated.View style={{ flex: 1, }}>
            <Animated.View style={{ flex: 1, opacity, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.WHITE }} >
                <Text style={{ fontSize: 20, color: Colors.ARSENIC }}>Karaoke Music</Text>
            </Animated.View>
        </Animated.View>
    )
}


export default SplashScreen;