import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// Nav
import { useFocusEffect } from '@react-navigation/native';
// Components
import {
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	View,
	Text,
	ActivityIndicator,
	Dimensions,
	Alert,
	Modal,
} from 'react-native';
import BuyButton from './layout/buyButton';
import Check from './layout/Check';
import Counter from './layout/Counter';
// CSS
import dishStyles from './dishStyles';
// Actions
import { getDishById, resetSingle } from '../../actions/dishActions';
import { setOrderedDishs } from '../../actions/orderedDishsActions';

const DishSingle = ({
	route: {
		params: { dishId },
	},
	navigation: { dangerouslyGetParent, goBack },
}) => {
	const dispatch = useDispatch();
	const singleDish = useSelector((state) => state.dish.singleDish);
	const [counter, setCounter] = useState(1);
	const [ingr, setIngr] = useState([]);

	const userId = useSelector((state) => state.user.userId);
	const setOrderedDish = useSelector((state) => state.orderedDishs.setOrderedDish);
	const errorOrderedDishs = useSelector((state) => state.orderedDishs.error);

	const [modalVisible, setModalVisible] = useState(false);

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
			const parent = dangerouslyGetParent();
			if (parent) parent.setOptions({ tabBarVisible: false });
			return () => {
				// Do something when the screen is unfocused
				if (parent) parent.setOptions({ tabBarVisible: true });
			};
		}, [dangerouslyGetParent])
	);

	useEffect(() => {
		dispatch(getDishById(dishId));
	});

	if (singleDish == null) {
		return (
			<View style={dishStyles.flexOne}>
				<ActivityIndicator style={{ flex: 6 }} size='large' color='#E53E3E' />
			</View>
		);
	} else {
		const { name, img, desc, price, category } = singleDish;
		const { contentContainer, buyContainer, flexOne, flexDRow, fontBold } = dishStyles;

		let ing = [...desc.optional];
		ing.map((item) => {
			item.selected = true;
		});

		const buy = () => {
			var order = {
				dish: singleDish['_id'],
				option: ingr,
				quantity: counter,
				userId: userId,
			};
			setModalVisible(!modalVisible);
			dispatch(setOrderedDishs(order));
			if (errorOrderedDishs != null) {
				Alert.alert(errorOrderedDishs);
			}
		};

		if (ingr.length == 0) setIngr(ing);

		return (
			<View style={flexOne}>
				<Modal
					animationType='fade'
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert(setOrderedDish);
						setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Bien ajouté au panier</Text>
							<TouchableOpacity
								style={[styles.button, styles.buttonClose]}
								onPress={() => {
									goBack();
									setModalVisible(!modalVisible);
								}}
							>
								<Text style={styles.textStyle}>Super!</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
				<ScrollView style={flexOne}>
					<View style={{ backgroundColor: '#EDF2F7' }}>
						<Text>{JSON.stringify(img)}</Text>
					</View>
					<View style={contentContainer}>
						<View style={flexDRow}>
							<View style={[flexDRow, { justifyContent: 'space-between' }]}>
								<Text
									style={[
										fontBold,
										{ fontSize: 32, color: '#E53E3E', width: Dimensions.get('window').width * 0.6 },
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
											width: Dimensions.get('window').width * 0.3,
										},
									]}
								>
									{price + ' DA'}
								</Text>
							</View>
						</View>
						<View style={[fontBold, flexDRow, { paddingTop: 12, paddingBottom: 28 }]}>
							<Text style={[fontBold, { fontSize: 16, color: '#718096' }]}>{category.name.toUpperCase()}</Text>
						</View>
						<Text style={[fontBold, { fontSize: 24, color: '#2D3748', marginVertical: 10 }]}>
							{'Ingrédients'.toUpperCase()}
						</Text>
						<View style={[flexDRow, { alignItems: 'center', flexWrap: 'wrap' }]}>
							{desc.main.map((item, i) => (
								<Check key={i} name={item.name} disabl={true} selected={true} />
							))}
							{ingr.map((item, i) => (
								<Check
									key={i}
									name={item.name}
									selected={item.selected}
									disabl={false}
									toggl={ingr}
									setToggl={setIngr}
								/>
							))}
						</View>
					</View>
				</ScrollView>
				<View style={[buyContainer]}>
					<Counter increase={increase} decrease={decrease} count={counter} />
					<BuyButton buy={buy} />
				</View>
			</View>
		);
	}
};

DishSingle.propTypes = {
	route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	hideModal: {
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
		opacity: 0.5,
	},
	modalView: {
		position: 'absolute',
		margin: 16,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 10,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 50,
		padding: 20,
		width: Dimensions.get('window').width * 0.5,
		elevation: 2,
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 16,
	},
	modalText: {
		padding: 24,
		fontSize: 28,
		fontWeight: 'bold',
		color: '#38A169',
		marginBottom: 15,
		textAlign: 'center',
	},
});

export default DishSingle;
