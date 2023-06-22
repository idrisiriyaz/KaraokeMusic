import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Constants, ScreenNames } from '../../global';
import RecommendedScreen from './tabScreen/RecommendedScreen';
import CustomSongTopTab from './CustomSongTopTab';

const Tab = createMaterialTopTabNavigator();

const SongBookTopTab = () => {
    return (
        <Tab.Navigator
            tabBar={props => <CustomSongTopTab {...props} />}
            screenOptions={{
                swipeEnabled: true,
                tabBarStyle: {
                    height: 50,


                }, tabBarScrollEnabled: true
            }} >
            <Tab.Screen name={"Recommended"} component={RecommendedScreen} />
            <Tab.Screen name={"Popular"} component={RecommendedScreen} />
            <Tab.Screen name={"Free"} component={RecommendedScreen} />
            <Tab.Screen name={"Trending Now"} component={RecommendedScreen} />
        </Tab.Navigator>
    );
}
export default SongBookTopTab;