import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { reset } from '../../actions/userActions';

const OrdersScreen = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	console.log(user);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Orders! Orders everywhere!!</Text>
			{console.log(user)}
			<Button
				title="Retour a l'accueil"
				onPress={() => {
					dispatch(reset());
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 17,
	},
});

export default OrdersScreen;
