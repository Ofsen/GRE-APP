import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Components
import ProductsScreen from './ProductsScreen';
import OrdersScreen from './OrdersScreen';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
	return (
		<Tab.Navigator
			initialRouteName='Produits'
			tabBarOptions={{
				activeTintColor: '#E53E3E',
				labelStyle: { fontSize: 12 },
			}}
		>
			<Tab.Screen
				name='Produits'
				component={ProductsScreen}
				options={{
					tabBarLabel: 'Produits',
					tabBarIcon: ({ color, size }) => <FontAwesome name='home' color={color} size={30} />,
				}}
			/>
			<Tab.Screen
				name='Mon Panier'
				component={OrdersScreen}
				options={{
					tabBarLabel: 'Panier',
					tabBarIcon: ({ color, size }) => <FontAwesome name='shopping-basket' color={color} size={size} />,
					cardStyle: {
						backgroundColor: '#fff',
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeScreen;
