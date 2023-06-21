import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames } from '../../global';
import { styles } from './styles';

//stacks
import ProfileStack from '../stack/ProfileStack';
import SongBookStack from '../stack/SongBookStack';
import FeedStack from '../stack/FeedStack';
import ActivityStack from '../stack/ActivityStack';
import ExploreStack from '../stack/ExploreStack';

import CustomBottomTab from './CustomBottomTab';


const BottomTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBar={(props) => <CustomBottomTab {...props} />}
            backBehavior='none'
            initialRouteName={ScreenNames.SONG_BOOK_STACK}
            screenOptions={styles.screenOption}
        >
            <Tab.Screen name={ScreenNames.FEED_STACK} component={FeedStack} />
            <Tab.Screen name={ScreenNames.EXPLORE_STACK} component={ExploreStack} />
            <Tab.Screen name={ScreenNames.SONG_BOOK_STACK} component={SongBookStack} />
            <Tab.Screen name={ScreenNames.ACTIVITY_STACK} component={ActivityStack} />
            <Tab.Screen name={ScreenNames.PROFILE_STACK} component={ProfileStack} />

        </Tab.Navigator>
    )
}
export default BottomTab;