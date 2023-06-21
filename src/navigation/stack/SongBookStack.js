
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../../global';
import SongBookScreen from '../../screen/SongBookScreen';

const SongBookStack = ({
    params,
}) => {

    const Stack = createNativeStackNavigator();
    const initialRouteName = ScreenNames.SONG_BOOK_SCREEN;
    return (
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.SONG_BOOK_SCREEN} component={SongBookScreen} />
        </Stack.Navigator>
    );
};

export default SongBookStack;