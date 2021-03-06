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
    },
    GridViewContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 5,
        borderRadius:5,
        borderColor:"#ccc"
     },
     GridViewTextLayout: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#000',
        padding: 10,
      }, textInput: {
        height: 65, width: "90%", fontSize: 12,
        borderRadius: 25, paddingLeft: 15,
        marginVertical: 0, color: "#000", marginTop: 5, 
        fontFamily: "Montserrat-Medium",alignSelf:"center"
    }
}