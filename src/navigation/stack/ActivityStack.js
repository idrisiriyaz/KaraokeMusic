
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//screens
import { ScreenNames } from '../../global';
import ActivityScreen from '../../screen/ActivityScreen';

const ActivityStack = ({
    params,
}) => {

    const Stack = createNativeStackNavigator();
    const initialRouteName = ScreenNames.ACTIVITY_SCREEN;
    return (
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.ACTIVITY_SCREEN} component={ActivityScreen} />
        </Stack.Navigator>
    );
};

export default ActivityStack;