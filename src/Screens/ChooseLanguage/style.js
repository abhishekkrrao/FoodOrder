import { Dimensions, StyleSheet } from 'react-native';
export const { width, height } = Dimensions.get('window');
export default {
    headerContainer: { flex: 1, width: "100%" },
    container: {
        width: "100%",
        height: 200,
        backgroundColor: 'white',
        elevation: 15
    },
    child: {
        height: 200,
        width,
        justifyContent: 'center',
        elevation: 15
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center'
    },
    GridViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 5,
        borderRadius: 5,
        borderColor: "#ccc"
    },
    GridViewTextLayout: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#000',
        padding: 10,
    },
    selectedButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 8,
        borderRadius: 5,
        backgroundColor: "#F37021"
    },
    normalButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 8,
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1.5,
        backgroundColor: "#fff"
    },
    selectedTxtStyle: {
        fontSize: 20,
        justifyContent: 'center',
        color: '#fff',
        padding: 10,
        fontFamily: "Montserrat-Medium"
    }, normalText: {
        fontSize: 20,
        justifyContent: 'center',
        color: '#000',
        padding: 10,
        fontFamily: "Montserrat-Medium"
    }
}