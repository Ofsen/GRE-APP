import React from 'react';
// Components
import { TouchableOpacity, Text } from 'react-native';
// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
// CSS
import dishStyles from '../dishStyles';

const BuyButton = ({ buy }) => {
	const { buyContactButton, buyButton, textACenter, flexDRow, fontBold } = dishStyles;

	return (
		<TouchableOpacity
			onPress={() => buy()}
			style={[
				buyContactButton,
				textACenter,
				buyButton,
				flexDRow,
				{
					justifyContent: 'center',
					alignItems: 'center',
				},
			]}
		>
			<MaterialCommunityIcons name='cart-plus' size={28} color='#fff' />
			<Text
				style={[
					fontBold,
					{
						fontSize: 22,
						color: '#fff',
						paddingHorizontal: 8,
					},
				]}
			>
				ACHETER
			</Text>
		</TouchableOpacity>
	);
};

export default BuyButton;
