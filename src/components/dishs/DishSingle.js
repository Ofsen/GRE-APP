import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
// Nav
import { useFocusEffect } from '@react-navigation/native';
// Components
import {
	FlatList,
	ScrollView,
	View,
	Text,
	ActivityIndicator,
	Image,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
// Icons
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
// CSS
import dishStyles from './dishStyles';

const DishSingle = ({
	route: {
		params: { dish },
	},
	navigation: { dangerouslyGetParent },
}) => {
	useFocusEffect(
		useCallback(() => {
			// Do something when the screen is focused
			const parent = dangerouslyGetParent();
			if (parent) {
				parent.setOptions({
					tabBarVisible: false,
				});
			}

			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
				if (parent) {
					parent.setOptions({
						tabBarVisible: true,
					});
				}
			};
		}, [dangerouslyGetParent])
	);

	return <Text>{JSON.stringify()}</Text>;
};

DishSingle.propTypes = {
	route: PropTypes.object.isRequired,
};

export default DishSingle;
