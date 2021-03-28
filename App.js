import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
// Redux
import store from './src/store';
import { Provider } from 'react-redux';
// Nav
import { NavigationContainer } from '@react-navigation/native';
// Screens
import WelcomeScreen from './src/components/screens/WelcomeScreen';
import HomeScreen from './src/components/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen
							name='Accueil'
							component={WelcomeScreen}
							options={() => ({
								headerTitleStyle: {
									color: '#E53E3E',
									fontSize: 16,
									marginStart: 8,
								},
								cardStyle: {
									backgroundColor: '#fff',
								},
							})}
						/>
						<Stack.Screen
							name='Produits'
							component={HomeScreen}
							options={() => ({
								headerTitleStyle: {
									color: '#E53E3E',
									fontSize: 16,
									marginStart: 8,
								},
								cardStyle: {
									backgroundColor: '#fff',
								},
							})}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
