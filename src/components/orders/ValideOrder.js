import React, { useCallback } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useFocusEffect } from '@react-navigation/native';

import { resetOrder } from '../../actions/orderActions';
import { resetUser } from '../../actions/userActions';

const ValideOrder = ({ navigation }) => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.order.count);

	// Hide tab bar
	useFocusEffect(
		useCallback(() => {
			// Do something when the screen is focused
			const parent = navigation.dangerouslyGetParent();
			if (parent) parent.setOptions({ tabBarVisible: false });
			return () => {
				// Do something when the screen is unfocused
				if (parent) parent.setOptions({ tabBarVisible: true });
			};
		}, [navigation])
	);

	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Commande Validé!{'\n'}</Text>
			<Text style={styles.welcomeSubText}>
				Vous êtes le{'\n'}
				<Text style={styles.countText}>
					N°{count}
					{'\n'}
				</Text>{' '}
				dans la liste
			</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					dispatch(resetOrder());
					dispatch(resetUser());
				}}
			>
				<Text style={styles.textButton}>Prendre Une Nouvelle Commande</Text>
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
	countText: {
		color: '#1A365D',
		fontSize: 96,
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
		textAlign: 'center',
		fontSize: 24,
		paddingTop: 16,
		paddingBottom: 18,
		paddingHorizontal: 32,
	},
});

export default ValideOrder;
