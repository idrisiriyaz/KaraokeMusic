import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import RNRestart from 'react-native-restart';
import { Colors } from '../global';

export class ErrorBoundary extends React.Component {

    state = {
        error: false,
        errMsg: "",
    }

    static getDerivedStateFromError(error) {
        return { error: true };
    }

    onPress = async () => {
        RNRestart.Restart();
    }

    componentDidCatch(error, errorInfo) {
        const mod = JSON.stringify(error);
        this.setState({ errMsg: mod });
    }

    render() {

        if (this.state.error) {
            return (
                <SafeAreaView style={styles.parentContainer}>

                    <View style={styles.parentContainer}>
                        <View style={styles.icon}>
                        </View>
                        <Text style={styles.title}>Oops, Something Went Wrong</Text>

                        <Text style={styles.textHead}>
                            The app ran into a problem and could not continue.
                            We apologies for any inconvenience this has caused!
                            Press the button below to restart the app.
                            Please contact us if this issue persist.</Text>
                        <ScrollView>
                            <Text style={styles.text}>{this.state.errMsg && this.state.errMsg}</Text>
                        </ScrollView>
                        <View style={styles.gap} />
                        <Button title={"Back To Home"} onPress={() => { this.onPress() }} />
                    </View>
                </SafeAreaView>

            )
        } else {
            return this.props.children;
        }
    }
};

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    },
    title: {
        color: Colors.PRIMARY,
        fontSize: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    text: {
        color: '#000',
        fontSize: 12,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    textHead: {
        color: '#000',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    icon: {
        paddingHorizontal: 20,
        paddingBottom: 5,
    },
    gap: {
        height: 20,
    }
});

export default ErrorBoundary;