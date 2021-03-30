import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// Nav
import { useFocusEffect } from '@react-navigation/native';
// Components
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import BuyButton from './layout/buyButton';
// CSS
import dishStyles from './dishStyles';
// Actions
import { getDishById, resetSingle } from '../../actions/dishActions';

const DishSingle = ({
	route: {
		params: { dishId },
	},
	navigation: { dangerouslyGetParent },
}) => {
	const dispatch = useDispatch();
	const singleDish = useSelector((state) => state.dish.singleDish);

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
				// Useful for cleanup functions
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
			titlePriceContainer,
			buyContainer,
			sectionHeader,
			flexOne,
			flexDRow,
			fontBold,
			colorAgoOrange,
			dimWindowOneFourth,
			windowWidth,
		} = dishStyles;

		return (
			<View style={flexOne}>
				<ScrollView style={flexOne}>
					<Text>{JSON.stringify(img)}</Text>
					<View style={contentContainer}>
						<View style={flexDRow}>
							<View
								style={[
									titlePriceContainer,
									dimWindowOneFourth,
								]}
							>
								<Text
									style={[
										fontBold,
										dimWindowOneFourth,
										{ fontSize: 26 },
									]}
								>
									{name}
								</Text>
								<Text
									style={[
										fontBold,
										colorAgoOrange,
										dimWindowOneFourth,
										{ fontSize: 32 },
									]}
								>
									{price + ' DA'}
								</Text>
							</View>
						</View>
						<View style={[fontBold, flexDRow, sectionHeader]}>
							<Text
								style={[
									fontBold,
									{
										fontSize: 18,
									},
								]}
							>
								Ingrédients principales
							</Text>
						</View>
						{desc.main.map((item) => (
							<Text key={item.name.toString()}>{item.name}</Text>
						))}
						<View style={[fontBold, flexDRow, sectionHeader]}>
							<Text
								style={[
									fontBold,
									{
										fontSize: 18,
									},
								]}
							>
								Ingrédients optionnels
							</Text>
						</View>
						{desc.optional.map((item, i) => (
							<Text>{item.name} </Text>
						))}
						<Text>{JSON.stringify(category)}</Text>
					</View>
				</ScrollView>
				<View style={[buyContainer, flexDRow]}>
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
