
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//screens
import { ScreenNames } from '../../global';
import ExploreScreen from '../../screen/ExploreScreen';

const ExploreStack = ({
    params,
}) => {

    const Stack = createNativeStackNavigator();
    const initialRouteName = ScreenNames.EXPLORE_SCREEN;
    return (
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.EXPLORE_SCREEN} component={ExploreScreen} />
        </Stack.Navigator>
    );
};

export default ExploreStack;