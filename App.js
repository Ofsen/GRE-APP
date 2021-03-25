import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Redux
import store from './src/store';
import { Provider } from 'react-redux';
// Nav
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Components
import ProductsScreen from './src/components/screens/ProductsScreen';
import OrdersScreen from './src/components/screens/OrdersScreen';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<Provider store={store}>
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
		</Provider>
	);
};

export default App;
