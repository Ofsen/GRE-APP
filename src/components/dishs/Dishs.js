import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import { ActivityIndicator, Text, FlatList, View, RefreshControl, ScrollView } from 'react-native';
import DishItem from './DishItem';
import SingleCat from '../layout/SingleCat';
// Actions
import { getDishs, reset, setLoading } from '../../actions/dishActions';
// CSS
import dishStyles from './dishStyles';
import axios from 'axios';
import apiUrl from '../../apiUrl';

const Dishs = ({ navigation }) => {
	// Specific styles
	const { headerTitle, flContainer } = dishStyles;

	const dispatch = useDispatch();
	const dish = useSelector((state) => state.dish);
	const [cats, setCats] = useState([]);
	const [selectedCat, setSelectedCat] = useState('');

	const { dishs, loadingDishs } = dish;

	const handleRefresh = () => {
		dispatch(reset());
	};

	const getCats = () => {
		axios
			.get(apiUrl + 'categories')
			.then((response) => {
				setCats(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getCats();
		dispatch(getDishs(selectedCat));
		// return () => {
		// 	dispatch(reset());
		// };
	}, [selectedCat]);

	const all = {
		name: 'Tout',
		_id: '',
	};

	const header = (
		<View>
			<View>
				<Text style={headerTitle}>CATEGORIES</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<SingleCat item={all} setSelectedCat={setSelectedCat} />
					{cats.map((cat) => {
						return <SingleCat key={cat._id} item={cat} setSelectedCat={setSelectedCat} />;
					})}
				</ScrollView>
			</View>
			<View style={{ paddingBottom: 16 }}>
				<Text style={headerTitle}>LISTE DES PRODUITS</Text>
			</View>
		</View>
	);

	return loadingDishs === false ? (
		<FlatList
			ListHeaderComponent={header}
			contentContainerStyle={flContainer}
			ListEmptyComponent={
				<Text style={{ flex: 6, textAlign: 'center', textAlignVertical: 'center' }}>
					Cette catégorie ne contient aucun produit.
				</Text>
			}
			numColumns={1}
			keyExtractor={(item, index) => index.toString()}
			data={dishs}
			renderItem={({ item, i }) => <DishItem key={i} navigation={navigation} dish={item} />}
			refreshControl={<RefreshControl refreshing={loadingDishs} onRefresh={handleRefresh} colors={['#E53E3E']} />}
		/>
	) : (
		<ActivityIndicator style={{ flex: 6 }} size='large' color='#E53E3E' />
	);
};

export default Dishs;
