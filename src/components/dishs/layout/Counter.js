import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default Counter = ({ counter, increase, decrease }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				height: 64,
				margin: 16,
			}}
		>
			<TouchableOpacity
				onPress={() => decrease()}
				style={[
					{
						justifyContent: 'center',
						alignItems: 'center',
						padding: 10,
						borderRadius: 10,
						backgroundColor: '#4299E1',
					},
				]}
			>
				<MaterialCommunityIcons name='minus' size={32} color='#fff' />
			</TouchableOpacity>
			<Text
				style={[
					{
						fontSize: 22,
						color: '#718096',
						padding: 20,
					},
				]}
			>
				{counter}
			</Text>
			<TouchableOpacity
				onPress={() => increase()}
				style={[
					{
						justifyContent: 'center',
						alignItems: 'center',
						padding: 10,
						borderRadius: 10,
						backgroundColor: '#4299E1',
					},
				]}
			>
				<MaterialCommunityIcons name='plus' size={32} color='#fff' />
			</TouchableOpacity>
		</View>
	);
};
