import React from 'react';
import PropTypes from 'prop-types';
// CSS
import dishStyles from './dishStyles';
// Components
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import apiUrl from '../../apiUrl';

const DishItem = ({ dish, navigation }) => {
	const { name, desc, category, price, img } = dish;

	const opLenght = desc.optional.length;

	const { itemList, productContainer, productImage, itemContentContainer, productPrice, productName, flexDRow } = dishStyles;

	return (
		<TouchableOpacity
			style={[itemList]}
			onPress={() =>
				navigation.navigate('DishSingle', {
					dishId: dish._id,
					name: name.toUpperCase(),
				})
			}
		>
			<View style={productContainer}>
				<Image
					progressiveRenderingEnabled={true}
					style={{
						width: 150,
						height: 150,
						borderRadius: 5,
					}}
					source={{ uri: apiUrl + 'uploads/' + img }}
				/>
				<View style={[itemContentContainer, { width: Dimensions.get('screen').width * 0.5, position: 'relative' }]}>
					<Text style={productName}>{name}</Text>
					<Text>Catégory: {category.name}</Text>
					<View>
						<Text>Ingredients : </Text>
						<Text>
							{desc.main.map((item, i) => item.name.concat('', opLenght > 0 ? ', ' : ''))}
							{desc.optional.map((item, i) => item.name.concat('', i < opLenght - 1 ? ', ' : ''))}
						</Text>
					</View>
					<Text style={[productPrice, { position: 'absolute', bottom: 8, right: 8 }]}>{price + ' DA'}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

DishItem.protoTypes = {
	dish: PropTypes.object.isRequired,
};

export default DishItem;
