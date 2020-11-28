import React, { Component } from "react";
import styles from './style'
import { View, Text, Platform, Image, ScrollView, ImageBackground, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { assets as assets } from '../../Res'
import Header from '../../Header/header'
export default class VerifyStart extends React.Component {

    constructor(props) {
        super(props)

        this.state = { list: [] }
    }
    componentDidMount() {

    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <ScrollView style={{ flex: 1, marginBottom: 0, backgroundColor: "#fff" }}>
                <View style={{
                    flex: 1, width: width, backgroundColor: "#fff"
                }}>

                    <ImageBackground style={{ width: "100%", height: 200 ,marginTop: Platform.OS == "ios" ? 25 : 0}} source={assets.icons.utilicon.topheader}>
                        <Header middleButtonComponent={true}></Header>
                    </ImageBackground>
                    {this.headerView()}
                </View>

            </ScrollView>
        );
    }
    /** Header View */
    headerView = () => {
        const { width, height } = Dimensions.get('window');
        return (
            <View style={{ width: width, height: height - 300, position: "relative" }}>

                <View style={{ flex: 1, position: "absolute", top: -100, alignSelf: "center" }}>
                    <Image style={{ width: 300, alignSelf: "center", height: 300 }} source={assets.lg1}></Image>
                    <Text style={{ fontSize: 19, textAlign: "center", padding: 15, fontFamily: "Montserrat-Medium" }}>{"Taste variety of foods from various chef’s in the same order"}</Text>
                </View>
                <View style={{
                    borderRadius: 25,
                    width: "100%", position: "absolute", bottom: 0, left: 0, height: 50
                }}>
                    <View style={{ backgroundColor: "#F37021", width: 250, borderRadius: 25, alignSelf: "center" }}>
                        <Text onPress={() => {
                            this.props.navigation.navigate('VerifyMobile');
                        }} style={{
                            fontSize: 19, color: "#fff", padding: 10, textAlign: "center", fontFamily: "Montserrat-Medium"
                        }}>{"Verify Mobile"}</Text>
                    </View>
                </View>
            </View>
        )
    }

}

