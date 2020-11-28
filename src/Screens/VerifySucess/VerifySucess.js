import React, { Component } from "react";
import styles from './style'
import { View, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, Text ,Platform} from "react-native";
import { assets as assets } from '../../Res'
import Header from '../../Header/header'
export default class VerifySucess extends React.Component {

    constructor(props) {
        super(props)

        this.state = { list: [], mobile: "" }
    }
    componentDidMount() {

    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <View style={{ flex: 1, width: width, marginTop: Platform.OS == 'ios' ? 50 : 0, backgroundColor: "#fff" }}>
                <Header middleButtonComponent={true}></Header>
               
            </View>
        );
    }
    /** Header View */
    inputView = () => {
        return (
            <View style={{ flex: 1, width: "100%", justifyContent: "center" }}>



            </View>
        )
    }

}

