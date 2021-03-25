import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import {
	ActivityIndicator,
	Text,
	FlatList,
	View,
	RefreshControl,
	TextInput,
} from 'react-native';
import DishItem from './DishItem';
// Actions
import { getDishs, reset } from '../../actions/dishActions';
// CSS
import dishStyles from './dishStyles';

const Dishs = ({ dish: { dishs, loading }, getDishs, reset, navigation }) => {
	// Specific styles
	const {
		headerSearchInput,
		headerTitle,
		listTitle,
		flContainer,
	} = dishStyles;

	const handleRefresh = () => {
		reset();
		getDishs();
	};

	useEffect(() => {
		getDishs();
	}, []);

	const header = (
		<View>
			<Text style={headerTitle}>LISTE DES PRODUITS</Text>
		</View>
	);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				ListHeaderComponent={header}
				contentContainerStyle={flContainer}
				columnWrapperStyle={{ justifyContent: 'space-around' }}
				ListEmptyComponent={
					<ActivityIndicator
						style={{ flex: 6 }}
						size='large'
						color='#ff4d00'
					/>
				}
				numColumns={2}
				keyExtractor={(item, index) => index.toString()}
				data={dishs}
				renderItem={({ item }) => (
					<DishItem navigation={navigation} dish={item} />
				)}
				refreshControl={
					<RefreshControl
						refreshing={loading}
						onRefresh={handleRefresh}
						colors={['#ff4d00']}
					/>
				}
			/>
		</View>
	);
};

Dishs.propTypes = {
	dish: PropTypes.object.isRequired,
	getDishs: PropTypes.func.isRequired,
	incrementPage: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	dish: state.dish,
});

export default connect(mapStateToProps, { getDishs, reset })(Dishs);
