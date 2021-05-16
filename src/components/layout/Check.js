import React, { useState } from 'react';
// Components
import { Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// CSS
import dishStyles from '../dishs/dishStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Check = ({ name, selected, disabl, toggl, setToggl }) => {
	const [onOff, setOnOff] = useState(selected);
	const { flexDRow } = dishStyles;

	return (
		<TouchableOpacity
			style={[
				flexDRow,
				{
					alignItems: 'center',
					backgroundColor: '#EDF2F7',
					paddingVertical: 12,
					paddingHorizontal: 16,
					paddingStart: 22,
					borderRadius: 30,
					marginVertical: 5,
					marginRight: 10,
				},
			]}
			onPress={() => {
				if (disabl == false) {
					toggl.map((item) => {
						if (item.name == name) {
							setOnOff(!onOff);
							item.selected = !onOff;
						}
					});
					setToggl(toggl);
				}
			}}
		>
			<Text
				style={{
					fontSize: 18,
					marginBottom: 2,
				}}
			>
				{name}
			</Text>
			<CheckBox disabled={disabl} value={onOff} onValueChange={() => null} />
		</TouchableOpacity>
	);
};

export default Check;
