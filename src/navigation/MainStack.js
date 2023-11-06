import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../global';
import BottomTab from './bottomTab/BottomTab';
import ActivityScreen from '../screen/ActivityScreen';
import FeedScreen from '../screen/FeedScreen';
import SongBookScreen from '../screen/SongBookScreen';
import ExploreScreen from '../screen/ExploreScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SplashScreen from '../screen/SplashScreen';
import TestScreen from '../screen/TestScreen';
import FormScreen from '../screen/FormScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ScreenNames.SPLASH_SCREEN} >
        <Stack.Screen name={ScreenNames.BOTTOM_TABS} component={BottomTab} />
        <Stack.Screen name={ScreenNames.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={ScreenNames.ACTIVITY_SCREEN} component={ActivityScreen} />
        <Stack.Screen name={ScreenNames.FEED_SCREEN} component={FeedScreen} />
        <Stack.Screen name={ScreenNames.SONG_BOOK_SCREEN} component={SongBookScreen} />
        <Stack.Screen name={ScreenNames.EXPLORE_SCREEN} component={ExploreScreen} />
        <Stack.Screen name={ScreenNames.PROFILE_SCREEN} component={ProfileScreen} />
        <Stack.Screen name={ScreenNames.TEST_SCREEN} component={TestScreen} />
        <Stack.Screen name={ScreenNames.FORM_SCREEN} component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;