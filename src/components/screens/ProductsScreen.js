import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import Dishs from '../dishs/Dishs';
import DishSingle from '../dishs/DishSingle';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='LISTE DES PRODUITS'
				component={Dishs}
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
				name='DishSingle'
				component={DishSingle}
				options={({ route }) => ({
					title: route.params.name,
					headerTitleStyle: {
						marginStart: -14,
						color: '#E53E3E',
						fontSize: 16,
					},
					cardStyle: {
						backgroundColor: '#fff',
					},
				})}
			/>
		</Stack.Navigator>
	);
};

export default HomeScreen;
