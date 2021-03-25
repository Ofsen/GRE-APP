import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Products! Products everywhere!!</Text>
			<StatusBar style='auto' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 17,
	},
});

export default Home;
