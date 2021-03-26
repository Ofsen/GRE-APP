import React from 'react';
import PropTypes from 'prop-types';
// CSS
import dishStyles from './dishStyles';
// Components
import { View, Text, Image, TouchableOpacity } from 'react-native';

const DishItem = ({ dish, navigation }) => {
	const {
		name,
		category,
		price,
		img: {
			data: { data },
		},
	} = dish;

	const {
		item,
		productContainer,
		productImage,
		itemContentContainer,
		productPrice,
		productName,
	} = dishStyles;

	return (
		<TouchableOpacity
			style={item}
			onPress={() =>
				navigation.navigate('DishSingle', {
					dish: dish,
					name: name.toUpperCase(),
				})
			}
		>
			<View style={productContainer}>
				<View style={productImage}>
					<Text>img here</Text>
				</View>
				{/* <Image
					progressiveRenderingEnabled={true}
					style={{
						width: 150,
						height: 150,
						resizeMode: 'cover',
						backgroundColor: 'red',
					}}
					source={{ uri: base64Img }}
				/> */}
				<View style={itemContentContainer}>
					<Text style={productName}>{name}</Text>
					<Text style={productPrice}>{price + ' DA'}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

DishItem.protoTypes = {
	dish: PropTypes.object.isRequired,
};

export default DishItem;
