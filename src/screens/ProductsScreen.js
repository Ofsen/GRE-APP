import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Accueil'>
				{() => (
					<View style={styles.container}>
						<Text
							style={{
								textAlign: 'center',
								padding: 20,
								fontSize: 28,
							}}
						>
							Home screen
						</Text>
						<View style={styles.buttonWrap}>
							<Button
								title='Produits'
								onPress={() => navigation.navigate('Produits')}
							/>
						</View>
						<View style={styles.buttonWrap}>
							<Button
								title='Mon Panier'
								onPress={() =>
									navigation.navigate('Mon Panier')
								}
							/>
						</View>
					</View>
				)}
			</Stack.Screen>
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
