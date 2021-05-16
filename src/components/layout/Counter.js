import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Counter = ({ count, increase, decrease, buttonSize, setCounter }) => {
	if (increase == undefined)
		increase = () => {
			setCounter(count + 1);
		};
	if (decrease == undefined)
		decrease = () => {
			if (count > 1) setCounter(count - 1);
		};

	return (
		<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 64, margin: 16 }}>
			<TouchableOpacity
				onPress={() => decrease()}
				style={[
					{
						justifyContent: 'center',
						alignItems: 'center',
						padding: buttonSize,
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
						fontSize: 46,
						color: '#1A365D',
						padding: 32,
					},
				]}
			>
				{count}
			</Text>
			<TouchableOpacity
				onPress={() => increase()}
				style={[
					{
						justifyContent: 'center',
						alignItems: 'center',
						padding: buttonSize,
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

export default Counter;
