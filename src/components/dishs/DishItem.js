import React from 'react';
import PropTypes from 'prop-types';
// CSS
import dishStyles from './dishStyles';
// Components
import { View, Text, Image, TouchableOpacity } from 'react-native';
// Icons
import { Entypo } from '@expo/vector-icons';

const DishItem = ({ dish, navigation }) => {
	const { name, images, price } = dish;

	const {
		item,
		imageContainer,
		productImage,
		vendorContainer,
		itemContentContainer,
		productPrice,
		productName,
	} = productStyles;

	return (
		<Text>{JSON.stringify(dish)}</Text>
		// <TouchableOpacity
		// 	style={item}
		// 	onPress={() =>
		// 		navigation.navigate('ProductSingle', {
		// 			product: product,
		// 			name: name.toUpperCase(),
		// 		})
		// 	}
		// >
		// 	<View style={imageContainer}>
		// 		{images.length !== 0 && (
		// 			<Image
		// 				progressiveRenderingEnabled={true}
		// 				style={productImage}
		// 				source={{ uri: `${images[0].src}` }}
		// 			/>
		// 		)}
		// 	</View>
		// 	<View style={vendorContainer}>
		// 		<Entypo
		// 			style={{ paddingEnd: 5 }}
		// 			name='shop'
		// 			size={16}
		// 			color='#c1c1c1'
		// 		/>
		// 		<Text>{shop_name}</Text>
		// 	</View>
		// 	<View style={itemContentContainer}>
		// 		<Text style={productPrice}>{price + ' ' + currency_code}</Text>
		// 		<Text style={productName}>{name}</Text>
		// 	</View>
		// </TouchableOpacity>
	);
};

DishItem.protoTypes = {
	product: PropTypes.object.isRequired,
};

export default DishItem;
