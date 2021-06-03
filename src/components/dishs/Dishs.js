import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import { ActivityIndicator, Text, FlatList, View, RefreshControl } from 'react-native';
import DishItem from './DishItem';
// Actions
import { getDishs, reset } from '../../actions/dishActions';
// CSS
import dishStyles from './dishStyles';

const Dishs = ({ navigation }) => {
	// Specific styles
	const { headerTitle, flContainer } = dishStyles;
	const dispatch = useDispatch();

	const dish = useSelector((state) => state.dish);

	const { dishs, loadingDishs } = dish;

	const handleRefresh = () => {
		dispatch(reset());
	};

	useEffect(() => {
		dispatch(getDishs());
		return () => {
			dispatch(reset());
		};
	}, [loadingDishs]);

	const header = (
		<View style={{ paddingBottom: 16 }}>
			<Text style={headerTitle}>LISTE DES PRODUITS</Text>
		</View>
	);

	return (
		<FlatList
			ListHeaderComponent={header}
			contentContainerStyle={flContainer}
			ListEmptyComponent={<ActivityIndicator style={{ flex: 6 }} size='large' color='#E53E3E' />}
			numColumns={1}
			keyExtractor={(item, index) => index.toString()}
			data={dishs}
			renderItem={({ item, i }) => <DishItem key={i} navigation={navigation} dish={item} />}
			refreshControl={<RefreshControl refreshing={loadingDishs} onRefresh={handleRefresh} colors={['#E53E3E']} />}
		/>
	);
};

export default Dishs;
