import React from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	Dimensions,
	StyleSheet,
} from 'react-native';
// Redux
import { useDispatch } from 'react-redux';
// Actions
import { setUser } from '../../actions/userActions';

const ObjectId = require('bson-objectid');

const WelcomeScreen = () => {
	const dispatch = useDispatch();
	const newUserId = ObjectId();

	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Bienvenu!</Text>
			<Text style={styles.welcomeSubText}>
				Cliquez sur le bouton ci-dessous d'acceder a la liste de
				produits à commander.
			</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => dispatch(setUser(newUserId))}
			>
				<Text style={styles.textButton}>Liste des produits!</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 6,
		justifyContent: 'center',
		width: Dimensions.get('screen').width * 0.85,
		alignSelf: 'center',
	},
	welcomeText: {
		color: '#E53E3E',
		fontSize: 56,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	welcomeSubText: {
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 16,
		color: '#718096',
	},
	button: {
		backgroundColor: '#4299E1',
		alignSelf: 'center',
		borderRadius: 32,
		margin: 16,
		elevation: 4,
	},
	textButton: {
		color: 'white',
		fontSize: 24,
		paddingTop: 16,
		paddingBottom: 18,
		paddingHorizontal: 32,
	},
});

export default WelcomeScreen;
