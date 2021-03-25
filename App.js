import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductsScreen from './src/screens/ProductsScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName='Produits'
					tabBarOptions={{
						activeTintColor: '#ff4d00',
						labelStyle: { fontSize: 12 },
					}}
				>
					<Tab.Screen
						name='Produits'
						component={ProductsScreen}
						options={{
							tabBarLabel: 'Produits',
							tabBarIcon: ({ color, size }) => (
								<FontAwesome
									name='home'
									color={color}
									size={30}
								/>
							),
						}}
					/>
					<Tab.Screen
						name='Mon Panier'
						component={OrdersScreen}
						options={{
							tabBarLabel: 'Produits',
							tabBarIcon: ({ color, size }) => (
								<FontAwesome
									name='shopping-basket'
									color={color}
									size={size}
								/>
							),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default App;
