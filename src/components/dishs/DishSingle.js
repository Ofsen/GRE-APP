import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// Nav
import { useFocusEffect } from '@react-navigation/native';
// Components
import {
	ScrollView,
	View,
	Text,
	ActivityIndicator,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import BuyButton from './layout/buyButton';
import Counter from './layout/Counter';
// CSS
import dishStyles from './dishStyles';
// Actions
import { getDishById, resetSingle } from '../../actions/dishActions';
// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DishSingle = ({
	route: {
		params: { dishId },
	},
	navigation: { dangerouslyGetParent },
}) => {
	const dispatch = useDispatch();
	const singleDish = useSelector((state) => state.dish.singleDish);
	const [counter, setCounter] = useState(1);

	const increase = () => {
		setCounter(counter + 1);
	};

	const decrease = () => {
		if (counter > 1) setCounter(counter - 1);
	};

	// Hide tab bar
	useFocusEffect(
		useCallback(() => {
			// Do something when the screen is focused
			dispatch(getDishById(dishId));
			const parent = dangerouslyGetParent();
			if (parent) {
				parent.setOptions({
					tabBarVisible: false,
				});
			}

			return () => {
				// Do something when the screen is unfocused
				dispatch(resetSingle());
				if (parent) {
					parent.setOptions({
						tabBarVisible: true,
					});
				}
			};
		}, [dangerouslyGetParent])
	);

	if (singleDish == null) {
		return (
			<View style={dishStyles.flexOne}>
				<ActivityIndicator
					style={{ flex: 6 }}
					size='large'
					color='#E53E3E'
				/>
			</View>
		);
	} else {
		const { name, img, desc, price, category } = singleDish;

		const {
			contentContainer,
			buyContainer,
			flexOne,
			flexDRow,
			fontBold,
		} = dishStyles;

		return (
			<View style={flexOne}>
				<ScrollView style={flexOne}>
					<View>
						<Text>{JSON.stringify(img)}</Text>
					</View>
					<View style={contentContainer}>
						<View style={flexDRow}>
							<View
								style={[
									flexDRow,
									{
										justifyContent: 'space-between',
									},
								]}
							>
								<Text
									style={[
										fontBold,
										{
											fontSize: 32,
											color: '#E53E3E',
											width:
												Dimensions.get('window').width *
												0.6,
										},
									]}
								>
									{name.toUpperCase()}
								</Text>
								<Text
									style={[
										fontBold,
										{
											fontSize: 32,
											textAlign: 'right',
											color: '#4299E1',
											width:
												Dimensions.get('window').width *
												0.3,
										},
									]}
								>
									{price + ' DA'}
								</Text>
							</View>
						</View>
						<View
							style={[
								fontBold,
								flexDRow,
								{ paddingTop: 12, paddingBottom: 28 },
							]}
						>
							<Text
								style={[
									fontBold,
									{
										fontSize: 16,
										color: '#718096',
									},
								]}
							>
								{category.name.toUpperCase()}
							</Text>
						</View>
						<Text
							style={[
								fontBold,
								{
									fontSize: 24,
									color: '#2D3748',
								},
							]}
						>
							{'Ingrédients'.toUpperCase()}
						</Text>
						{desc.main.map((item) => (
							<Text key={item.name.toString()}>{item.name}</Text>
						))}
						{desc.optional.map((item) => (
							<Text key={item.name.toString()}>{item.name} </Text>
						))}
					</View>
				</ScrollView>
				<View style={[buyContainer]}>
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
									padding: 16,
									borderRadius: 10,
									backgroundColor: '#4299E1',
								},
							]}
						>
							<MaterialCommunityIcons
								name='minus'
								size={32}
								color='#fff'
							/>
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
							{counter}
						</Text>
						<TouchableOpacity
							onPress={() => increase()}
							style={[
								{
									justifyContent: 'center',
									alignItems: 'center',
									padding: 16,
									borderRadius: 10,
									backgroundColor: '#4299E1',
								},
							]}
						>
							<MaterialCommunityIcons
								name='plus'
								size={32}
								color='#fff'
							/>
						</TouchableOpacity>
					</View>
					<BuyButton />
				</View>
			</View>
		);
	}
};

DishSingle.propTypes = {
	route: PropTypes.object.isRequired,
};

export default DishSingle;
