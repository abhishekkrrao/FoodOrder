import { Dimensions, StyleSheet } from 'react-native';
export const { width, height } = Dimensions.get('window');
export default {
    headerContainer: { flex: 1, width: "100%" },
    container: {
        width: "100%",
        height: 200,
        backgroundColor: 'white',
        elevation:15
    },
    child: {
        height: 200,
        width,
        justifyContent: 'center',
        elevation:15
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center'
    }
}