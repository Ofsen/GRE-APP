import React from 'react';
// Components
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

const SingleCat = ({ item, setSelectedCat }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: '#EDF2F7',
				paddingVertical: 12,
				paddingHorizontal: 16,
				marginEnd: 8,
				borderRadius: 16,
			}}
			onPress={() => {
				setSelectedCat(item._id);
			}}
		>
			<Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
		</TouchableOpacity>
	);
};

export default SingleCat;
