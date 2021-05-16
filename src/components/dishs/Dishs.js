import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import { ActivityIndicator, Text, FlatList, View, RefreshControl } from 'react-native';
import DishItem from './DishItem';
// Actions
import { getDishs, reset } from '../../actions/dishActions';
// CSS
import dishStyles from './dishStyles';

const Dishs = ({ dish: { dishs, loadingDishs }, getDishs, reset, navigation }) => {
	// Specific styles
	const { headerTitle, flContainer } = dishStyles;

	const handleRefresh = () => {
		reset();
		getDishs();
	};

	useEffect(() => {
		getDishs();
	}, []);

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

Dishs.propTypes = {
	dish: PropTypes.object.isRequired,
	getDishs: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	dish: state.dish,
});

export default connect(mapStateToProps, { getDishs, reset })(Dishs);
