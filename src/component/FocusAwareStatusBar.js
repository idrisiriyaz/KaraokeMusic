import * as React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../global';

const FocusAwareStatusBar = ({ barColor = Colors.TRANSPARENT, barStyle = "light-content", isTopSpace = true }) => {

	const insets = useSafeAreaInsets();
	const isFocused = useIsFocused();

	return Platform.OS === 'android' ? isFocused ?
		<>
			<StatusBar backgroundColor={barColor} translucent={true} barStyle={barStyle} />
			<View style={{ height: isTopSpace ? StatusBar.currentHeight : 0 }} />
		</>
		:
		<View style={{ height: StatusBar.currentHeight }} />
		:
		<View style={{ paddingTop: insets.top, backgroundColor: barColor }} >
			<StatusBar backgroundColor={barColor} translucent={true} barStyle={barStyle} />
		</View>
};

export default FocusAwareStatusBar;