import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { getOrderedDishsByUser, resetOrderedDishs } from '../../actions/orderedDishsActions';
// CSS
import dishStyles from '../dishs/dishStyles';
// Components
import SingleOrder from '../layout/SingleOrder';

const OrdersScreen = ({ navigation }) => {
	// Specific styles
	const { headerTitle, flContainer } = dishStyles;
	const dispatch = useDispatch();

	const [totalPrice, setTotalPrice] = useState(0);

	const user = useSelector((state) => state.user.userId);
	const orderedDishsList = useSelector((state) => state.orderedDishs.orderedDishsList);
	const loadingOrderedDishs = useSelector((state) => state.orderedDishs.loadingOrderedDishs);

	const handleRefresh = () => {
		dispatch(resetOrderedDishs());
		dispatch(getOrderedDishsByUser(user));
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
		getTotal();
	}, [user, loadingOrderedDishs]);

	const header = (
		<View style={{ marginTop: 24, paddingVertical: 16 }}>
			<Text style={headerTitle}>VOTRE PANIER</Text>
		</View>
	);

	const footer = () => {
		if (totalPrice != 0) {
			return (
				<View style={{ flexDirection: 'row-reverse', alignItems: 'center', paddingVertical: 16 }}>
					<Text style={{ fontSize: 28, fontWeight: 'bold', color: '#C53030' }}>{totalPrice + ' DA'}</Text>
					<Text style={{ fontSize: 28 }}>Total: </Text>
				</View>
			);
		} else {
			return <></>;
		}
	};

	return (
		<FlatList
			ListHeaderComponent={header}
			ListFooterComponent={footer}
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

export default OrdersScreen;
