import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	item: {
		width: Dimensions.get('screen').width * 0.9,
		marginBottom: 20,
	},
	productContainer: {
		backgroundColor: '#EDF2F7',
		padding: 2,
		borderRadius: 4,
		height: Dimensions.get('screen').width * 0.4,
		marginBottom: 5,
		flexDirection: 'row',
	},
	productImage: {
		width: 150,
		height: 150,
		resizeMode: 'cover',
		backgroundColor: 'white',
		borderRadius: 4,
		margin: 5,
	},
	itemContentContainer: {
		paddingHorizontal: 10,
		paddingVertical: 2,
	},
	productName: {
		fontSize: 16,
		fontWeight: '700',
	},
	productPrice: {
		fontSize: 20,
		color: '#ff4d00',
		fontWeight: '700',
	},
	vendorContainer: {
		flexDirection: 'row',
		paddingHorizontal: 10,
	},
	headerSearchInput: {
		borderWidth: 1,
		borderColor: '#c1c1c1',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 50,
		marginTop: 10,
	},
	headerTitle: {
		paddingTop: 20,
		marginVertical: 5,
		fontSize: 24,
		fontWeight: 'bold',
		color: '#E53E3E',
	},
	listTitle: {
		paddingVertical: 16,
		paddingHorizontal: 10,
		fontSize: 16,
	},
	flContainer: {
		width: Dimensions.get('window').width,
		paddingHorizontal: 20,
		flexGrow: 1,
	},
	singleProductimage: {
		resizeMode: 'cover',
		height: 400,
		width: Dimensions.get('window').width,
	},
	contentContainer: {
		backgroundColor: '#fff',
		padding: 20,
		marginBottom: 124,
	},
	heartShareContainer: {
		flexGrow: 1,
		alignItems: 'flex-end',
	},
	storeContainer: {
		justifyContent: 'space-between',
		fontSize: 24,
		paddingTop: 5,
		paddingBottom: 10,
		alignItems: 'center',
		borderBottomColor: '#c1c1c1',
		borderBottomWidth: 1,
		marginBottom: 10,
	},
	buyContainer: {
		bottom: 0,
		position: 'absolute',
		width: '100%',
	},
	buyContactButton: {
		flex: 1,
		paddingHorizontal: 5,
		textAlignVertical: 'center',
		color: '#fff',
		height: 65,
		margin: 5,
		borderRadius: 50,
	},
	buyButton: {
		flexGrow: 1.3,
		backgroundColor: '#ff4d00',
	},
	contactButton: {
		backgroundColor: '#e1e1e1',
	},
	contactText: {
		fontSize: 16,
		textAlignVertical: 'center',
		height: '100%',
		color: '#1D1D1D',
		paddingHorizontal: 5,
	},
	sectionHeader: {
		paddingVertical: 15,
		marginBottom: 10,
		justifyContent: 'space-between',
	},
	contactStoreButton: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#c1c1c1',
		marginBottom: 10,
		justifyContent: 'space-between',
	},
	flexOne: { flex: 1 },
	bgWhite: { backgroundColor: '#fff' },
	textACenter: { textAlign: 'center' },
	detailsText: { paddingVertical: 8 },
	flexDRow: { flexDirection: 'row' },
	fontBold: { fontWeight: 'bold' },
	colorGreen: { color: '#27ae60' },
	colorRed: { color: '#e74c3c' },
});
