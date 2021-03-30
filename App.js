import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Redux
import store from './src/store';
import { Provider } from 'react-redux';
// Screens
import AppScreen from './src/components/screens/AppScreen';

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<StatusBar style='auto' />
				<AppScreen />
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
