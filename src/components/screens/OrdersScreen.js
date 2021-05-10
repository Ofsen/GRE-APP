import React, { useEffect } from 'react';
import { Text, View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { getOrderedDishsByUser, resetOrderedDishs } from '../../actions/orderedDishsActions';
// CSS
import dishStyles from '../dishs/dishStyles';

const OrdersScreen = ({ navigation }) => {
	// Specific styles
	const { headerTitle, flContainer } = dishStyles;
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user.userId);
	const orderedDishsList = useSelector((state) => state.orderedDishs.orderedDishsList);
	const loadingOrderedDishs = useSelector((state) => state.orderedDishs.loadingOrderedDishs);

	const handleRefresh = () => {
		dispatch(resetOrderedDishs());
		dispatch(getOrderedDishsByUser(user));
	};

	useEffect(() => {
		dispatch(getOrderedDishsByUser(user));
	}, [orderedDishsList]);

	const header = (
		<View style={{ marginTop: 24, paddingVertical: 16 }}>
			<Text style={headerTitle}>VOTRE PANIER</Text>
		</View>
	);

	return (
		<FlatList
			ListHeaderComponent={header}
			contentContainerStyle={flContainer}
			columnWrapperStyle={{ justifyContent: 'space-around' }}
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
			numColumns={2}
			keyExtractor={(item, index) => index.toString()}
			data={orderedDishsList}
			renderItem={({ item, i }) => <Text>{JSON.stringify(item)}</Text>}
			refreshControl={<RefreshControl refreshing={loadingOrderedDishs} onRefresh={handleRefresh} colors={['#E53E3E']} />}
		/>
	);
};

export default OrdersScreen;
