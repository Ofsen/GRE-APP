import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Redux
import { useSelector } from 'react-redux';
// Nav
import { NavigationContainer } from '@react-navigation/native';
// Screens
import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const AppScreen = () => {
	const userId = useSelector((state) => state.user.userId);
	const order = useSelector((state) => state.order);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					cardStyle: {
						backgroundColor: '#fff',
					},
					headerTitleStyle: {
						color: '#E53E3E',
						fontSize: 16,
						marginStart: 8,
					},
				}}
			>
				{userId == null ? (
					<Stack.Screen name='Accueil' component={WelcomeScreen} />
				) : (
					<Stack.Screen name='Produits' component={HomeScreen} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppScreen;
