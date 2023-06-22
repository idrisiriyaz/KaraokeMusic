import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors, Constants } from '../../../global'
import SingItem from './SingItem';
import { ENTRIES } from '../../../global/Dummy';

const RecommendedScreen = () => {

    FlatListItemSeparator = () => {
        return (
            <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                <View
                    style={{
                        height: 1.4,
                        width: Constants.SCREEN_WIDTH - 90,
                        backgroundColor: Colors.GRAY_LIGHT + 20,
                    }}
                />
            </View>
        );
    }
    return (
        <View style={{ backgroundColor: Colors.WHITE, flex: 1 }}>


            <FlatList
                data={ENTRIES}
                ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={({ item, index }) => <SingItem key={index} item={item} />}

            />

        </View>
    )
}

export default RecommendedScreen

const styles = StyleSheet.create({})