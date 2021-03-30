import React from 'react';
import PropTypes from 'prop-types';
// CSS
import dishStyles from './dishStyles';
// Components
import { View, Text, Image, TouchableOpacity } from 'react-native';

const DishItem = ({ dish, navigation }) => {
	const {
		name,
		desc,
		category,
		price,
		img: {
			data: { data },
		},
	} = dish;

	const opLenght = desc.optional.length;

	const {
		item,
		productContainer,
		productImage,
		itemContentContainer,
		productPrice,
		productName,
		flexDRow,
	} = dishStyles;

	return (
		<TouchableOpacity
			style={item}
			onPress={() =>
				navigation.navigate('DishSingle', {
					dishId: dish._id,
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
					<Text>Catégory: {category.name}</Text>
					<View style={flexDRow}>
						<Text>Ingredients : </Text>
						{desc.main.map((item) => (
							<Text key={item.name.toString()}>
								{item.name},{' '}
							</Text>
						))}
						{desc.optional.map((item, i) => (
							<Text>
								{item.name}
								{opLenght === i + 1 ? '' : ', '}
							</Text>
						))}
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

DishItem.protoTypes = {
	dish: PropTypes.object.isRequired,
};

export default DishItem;
