import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// CSS
import dishStyles from '../dishs/dishStyles';
// Components
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Counter from './Counter';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { setLoading } from '../../actions/orderedDishsActions';

import axios from 'axios';
import apiUrl from '../../apiUrl';

const SingleOrder = ({ item }) => {
	console.log(item);
	const { _id, option, quantity, userId, dish } = item;
	const { price, name, img, desc } = dish;
	const opLenght = option.length;
	const { flexDRow } = dishStyles;
	const [counter, setCounter] = useState(quantity);

	const dispatch = useDispatch();

	const increase = () => {
		setCounter(counter + 1);
		axios
			.put(apiUrl + 'orderedDishs/update/' + _id, {
				dish: dish._id,
				option: option,
				quantity: counter + 1,
				userId: userId,
			})
			.then(() => dispatch(setLoading()))
			.catch((err) => console.log(err));
	};
	const decrease = () => {
		if (counter > 1) {
			setCounter(counter - 1);
			axios
				.put(apiUrl + 'orderedDishs/update/' + _id, { ...item, quantity: counter - 1 })
				.then(() => dispatch(setLoading()))
				.catch((err) => console.log(err));
		}
	};
	const deleteOrder = () => {
		axios
			.delete(apiUrl + 'orderedDishs/delete/' + _id)
			.then(() => dispatch(setLoading()))
			.catch((err) => console.log(err));
	};

	return (
		<View
			style={{
				width: Dimensions.get('screen').width * 0.9,
				marginBottom: 20,
				backgroundColor: '#EDF2F7',
				padding: 2,
				borderRadius: 4,
				marginBottom: 5,
			}}
		>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					position: 'relative',
				}}
			>
				<Image
					progressiveRenderingEnabled={true}
					style={{ width: 69, height: 69, resizeMode: 'cover', borderRadius: 4, margin: 5 }}
					source={{ uri: apiUrl + 'uploads/' + img }}
				/>
				<View
					style={{
						paddingHorizontal: 10,
						paddingVertical: 2,
						justifyContent: 'center',
						width: Dimensions.get('screen').width * 0.7,
					}}
				>
					<Text style={{ fontSize: 26, fontWeight: '700' }}>{name}</Text>
					<View style={flexDRow}>
						<Text>
							{desc.main.map((item, i) => item.name.concat('', opLenght > 0 ? ', ' : ''))}
							{option.map((item, i) => (item.selected ? item.name.concat('', i < opLenght - 1 ? ', ' : '') : ''))}
						</Text>
					</View>
				</View>
				<TouchableOpacity
					onPress={() => deleteOrder()}
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						padding: 12,
						borderRadius: 10,
						backgroundColor: '#C53030',
						position: 'absolute',
						top: 5,
						right: 5,
					}}
				>
					<MaterialCommunityIcons name='close' size={32} color='#fff' />
				</TouchableOpacity>
			</View>
			<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<Counter buttonSize={10} count={counter} increase={increase} decrease={decrease} />
				<Text style={{ fontSize: 24, fontWeight: 'bold', color: '#C53030', marginEnd: 12 }}>
					{price * counter + ' DA'}
				</Text>
			</View>
		</View>
	);
};

export default SingleOrder;
