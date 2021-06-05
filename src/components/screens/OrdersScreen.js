import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Components
import Orders from '../orders/Orders';
import ValideOrder from '../orders/ValideOrder';
// Redux
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const OrdersScreen = () => {
	const order = useSelector((state) => state.order);

	return (
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
			{order.order === false ? (
				<Stack.Screen name='Accueil' component={Orders} />
			) : (
				<Stack.Screen name='Produits' component={ValideOrder} />
			)}
		</Stack.Navigator>
	);
};

export default OrdersScreen;
