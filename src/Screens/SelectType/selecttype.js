import React, { Component } from "react";
import styles from './style'
import { View, Text, FlatList, Image, ScrollView, Platform, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { assets as assets } from '../../Res'
import Header from '../../Header/header'
export default class SelectType extends React.Component {

    constructor(props) {
        super(props)

        this.state = { list: [] }
    }
    componentDidMount() {

    }

    render() {
        return (
            <ScrollView style={{ flex: 1, marginBottom: 0, backgroundColor: "#fff" }}>
                <View style={{
                    flex: 1, backgroundColor: "#fff",
                    marginTop: Platform.OS == "ios" ? 25 : 0
                }}>
                    <Header middleButtonComponent={true}></Header>
                    {this.headerView()}

                </View>
            </ScrollView>
        );
    }
    /** Header View */
    headerView = () => {
        const { width, height } = Dimensions.get('window');
        return (
            <View style={{ flex: 1, justifyContent: "center", width: width, height: height - 300, alignItems: "center" }}>
                <Text style={{ fontSize: 24, textAlign: "left", width: "100%", paddingLeft: 45, padding: 10, fontFamily: "Montserrat-Medium" }}>{"I am here to"}</Text>
                <Text onPress={() => {
                    this.props.navigation.navigate('VerifyStart');
                }} style={{ fontSize: 19, borderWidth: 1, borderColor: "#F37021", color: "#F37021", width: "80%", borderRadius: 15, padding: 10, textAlign: "center", margin: 5, fontFamily: "Montserrat-Medium" }}>{"Buy Food"}</Text>
                <Text onPress={() => {
                    this.props.navigation.navigate('SellerBasicInfo');
                }} style={{ fontSize: 19, borderWidth: 1, borderColor: "#F37021", color: "#F37021", width: "80%", borderRadius: 15, padding: 10, textAlign: "center", margin: 5, fontFamily: "Montserrat-Medium" }}>{"Sell Food"}</Text>
            </View>
        )
    }

}

