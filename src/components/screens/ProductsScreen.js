import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import Dishs from '../dishs/Dishs';
import DishSingle from '../dishs/DishSingle';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='LISTE DES PRODUITS' component={Dishs} />
			<Stack.Screen
				name='DishSingle'
				component={DishSingle}
				options={({ route }) => ({
					title: route.params.name,
					headerTitleStyle: {
						marginStart: -14,
					},
				})}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonWrap: {
		width: '100%',
		margin: 5,
	},
});

export default HomeScreen;
