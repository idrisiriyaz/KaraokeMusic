
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//screens
import { ScreenNames } from '../../global';
import FeedScreen from '../../screen/FeedScreen';

const FeedStack = ({
    params,
}) => {

    const Stack = createNativeStackNavigator();
    const initialRouteName = ScreenNames.FEED_SCREEN;
    return (
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.FEED_SCREEN} component={FeedScreen} />
        </Stack.Navigator>
    );
};

export default FeedStack;