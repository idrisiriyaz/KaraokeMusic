import React from 'react'
import MainStack from './src/navigation/MainStack';
import FocusAwareStatusBar from './src/component/FocusAwareStatusBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorBoundary from './src/component/ErrorBoundary';

const App = () => {
    return (
        <SafeAreaProvider>
            <ErrorBoundary>
                <MainStack />
            </ErrorBoundary>
        </SafeAreaProvider>
    )
}

export default App