import React from 'react';
import { Link } from '@react-navigation/native';
import { Text, Button, View, Dimensions } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 6,
				justifyContent: 'center',
				width: Dimensions.get('screen').width * 0.5,
				alignSelf: 'center',
			}}
		>
			<Text
				style={{
					color: '#E53E3E',
					fontSize: 32,
					fontWeight: 'bold',
					textAlign: 'center',
				}}
			>
				Bienvenu!
			</Text>
			<Text style={{ textAlign: 'center', marginBottom: 16 }}>
				Cliquez sur le bouton ci-dessous d'acceder a la liste de
				produits à commander.
			</Text>
			<Button
				style={{ fontSize: 32 }}
				title='Produits'
				onPress={() => navigation.navigate('Produits')}
			/>
		</View>
	);
};

export default WelcomeScreen;
