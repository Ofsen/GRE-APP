import React, { useEffect, useState } from 'react';
import {
	Text,
	View,
	FlatList,
	RefreshControl,
	ScrollView,
	Modal,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { getOrderedDishsByUser } from '../../actions/orderedDishsActions';
// CSS
import dishStyles from '../dishs/dishStyles';
// Components
import SingleOrder from '../layout/SingleOrder';
import { resetUser } from '../../actions/userActions';

import axios from 'axios';
import apiUrl from '../../apiUrl';

const OrdersScreen = () => {
	// Specific styles
	const { headerTitle } = dishStyles;
	const dispatch = useDispatch();

	const [totalPrice, setTotalPrice] = useState(0);

	const user = useSelector((state) => state.user.userId);
	const orderedDishsList = useSelector((state) => state.orderedDishs.orderedDishsList);
	const loadingOrderedDishs = useSelector((state) => state.orderedDishs.loadingOrderedDishs);

	const [modalVisible, setModalVisible] = useState(false);
	const [count, setCount] = useState(0);

	const validerCommande = () => {
		if (count === 0)
			axios
				.post(apiUrl + 'orders/', {
					orderedDishs: orderedDishsList.map((item) => item._id),
				})
				.then((data) => {
					setCount(data.data.count);
				})
				.catch((err) => {
					console.log(err);
				});
		setModalVisible(!modalVisible);
	};

	const getTotal = () => {
		var total = 0;
		if (orderedDishsList != null)
			orderedDishsList.map((item) => {
				total = total + item.dish.price * item.quantity;
			});
		setTotalPrice(total);
	};

	useEffect(() => {
		getTotal();
		dispatch(getOrderedDishsByUser(user));
	}, [loadingOrderedDishs, orderedDishsList]);

	const footer = (total) => {
		return (
			<View style={{ justifyContent: 'space-between', flexDirection: 'row-reverse', marginVertical: 20 }}>
				{total !== 0 ? (
					<TouchableOpacity
						style={{ padding: 20, paddingHorizontal: 26, backgroundColor: '#38A169', borderRadius: 8 }}
						onPress={() => validerCommande()}
					>
						<Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Valider</Text>
					</TouchableOpacity>
				) : (
					<Text> </Text>
				)}
				<View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16 }}>
					<Text style={{ fontSize: 28 }}>Total: </Text>
					<Text style={{ fontSize: 28, fontWeight: 'bold', color: '#C53030' }}>{total + ' DA'}</Text>
				</View>
			</View>
		);
	};

	const header = () => {
		return (
			<View style={{ marginTop: 24, paddingVertical: 16, backgroundColor: '#fff' }}>
				<Modal
					animationType='fade'
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert(setOrderedDish);
						setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>
								<Text>Commande Validé!{'\n'}</Text>
								<Text>Vous êtes le{'\n'}</Text>
								<Text style={{ fontSize: 54, color: '#E53E3E' }}>
									N°{count}
									{'\n'}
								</Text>
								<Text> dans la liste</Text>
							</Text>
							<TouchableOpacity
								style={[styles.button, styles.buttonClose]}
								onPress={() => {
									dispatch(resetUser());
									setModalVisible(!modalVisible);
								}}
							>
								<Text style={styles.textStyle}>Prendre Une Nouvelle Commande</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
				<Text style={headerTitle}>VOTRE PANIER</Text>
			</View>
		);
	};

	return orderedDishsList === null || orderedDishsList.length === 0 ? (
		<View
			style={{
				flexGrow: 1,
				justifyContent: 'center',
				alignItems: 'center',
				paddingHorizontal: 20,
				backgroundColor: '#fff',
			}}
		>
			<Text style={headerTitle}>VOTRE PANIER EST VIDE!</Text>
			<Text>Ajoutez des commandes afin de remplire votre panier.</Text>
		</View>
	) : (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={{ paddingHorizontal: 20 }} stickyHeaderIndices={[0]}>
				{header()}
				{orderedDishsList.map((item, i) => (
					<SingleOrder key={i} item={item} />
				))}
				{footer(totalPrice)}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: '#fff',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	hideModal: {
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
		opacity: 0.5,
	},
	modalView: {
		position: 'absolute',
		margin: 16,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 10,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 50,
		padding: 20,
		paddingHorizontal: 22,
		width: Dimensions.get('window').width * 0.5,
		elevation: 2,
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 20,
	},
	modalText: {
		padding: 24,
		fontSize: 28,
		fontWeight: 'bold',
		color: '#38A169',
		marginBottom: 15,
		textAlign: 'center',
	},
});

export default OrdersScreen;
