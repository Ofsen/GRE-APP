import React, { useEffect, useState } from 'react';
import {
	Text,
	View,
	FlatList,
	RefreshControl,
	ActivityIndicator,
	Modal,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	StatusBar,
} from 'react-native';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { getOrderedDishsByUser, resetOrderedDishs } from '../../actions/orderedDishsActions';
// CSS
import dishStyles from '../dishs/dishStyles';
// Components
import SingleOrder from '../layout/SingleOrder';
import { resetUser } from '../../actions/userActions';

import axios from 'axios';
import apiUrl from '../../apiUrl';

const OrdersScreen = ({ navigation }) => {
	// Specific styles
	const { headerTitle, flContainer } = dishStyles;
	const dispatch = useDispatch();

	const [totalPrice, setTotalPrice] = useState(0);

	const user = useSelector((state) => state.user.userId);
	const orderedDishsList = useSelector((state) => state.orderedDishs.orderedDishsList);
	const loadingOrderedDishs = useSelector((state) => state.orderedDishs.loadingOrderedDishs);

	const [modalVisible, setModalVisible] = useState(false);
	const [count, setCount] = useState(0);

	const handleRefresh = () => {
		dispatch(resetOrderedDishs());
		dispatch(getOrderedDishsByUser(user));
	};

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
		dispatch(getOrderedDishsByUser(user));
		if (orderedDishsList != null) getTotal();
		return () => {
			setTotalPrice(0);
		};
	}, [loadingOrderedDishs]);

	const header = (
		<View style={{ marginTop: 24, paddingVertical: 16 }}>
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

	const footer = (total) => {
		if (total != 0) {
			return (
				<View style={{ justifyContent: 'space-between', flexDirection: 'row-reverse', marginVertical: 20 }}>
					<TouchableOpacity
						style={{ padding: 20, paddingHorizontal: 26, backgroundColor: '#38A169', borderRadius: 8 }}
						onPress={() => validerCommande()}
					>
						<Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Valider</Text>
					</TouchableOpacity>
					<View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16 }}>
						<Text style={{ fontSize: 28 }}>Total: </Text>
						<Text style={{ fontSize: 28, fontWeight: 'bold', color: '#C53030' }}>{total + ' DA'}</Text>
					</View>
				</View>
			);
		} else {
			return <></>;
		}
	};

	return (
		<FlatList
			ListHeaderComponent={header}
			ListFooterComponent={footer(totalPrice)}
			contentContainerStyle={flContainer}
			ListEmptyComponent={() => {
				if (orderedDishsList != null) {
					return (
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<Text style={{ fontSize: 16 }}>Votre panier est vide.</Text>
						</View>
					);
				} else {
					return <ActivityIndicator style={{ flex: 1 }} size='large' color='#E53E3E' />;
				}
			}}
			numColumns={1}
			keyExtractor={(item, index) => index.toString()}
			data={orderedDishsList}
			renderItem={({ item, i }) => <SingleOrder key={i} item={item} />}
			refreshControl={<RefreshControl refreshing={loadingOrderedDishs} onRefresh={handleRefresh} colors={['#E53E3E']} />}
		/>
	);
};

const styles = StyleSheet.create({
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
