
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../../global';
import FeedScreen from '../../screen/FeedScreen';
import ProfileScreen from '../../screen/ProfileScreen';

const ProfileStack = ({
    params,
}) => {

    const Stack = createNativeStackNavigator();
    const initialRouteName = ScreenNames.PROFILE_SCREEN;
    return (
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.PROFILE_SCREEN} component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default ProfileStack;