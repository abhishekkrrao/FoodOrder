import React, { Component } from "react";
import styles from './style'
import { View, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, Text, Platform, ImageBackground } from "react-native";
import { assets as assets } from '../../Res'
import Header from '../../Header/header'
export default class Seller2BasicInfo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [], kitchenName: "", kitchenContactNo: "",
            kitchenEmail: "", kitchenLocation: "", kitchenCity: "", kitchenPincode: ""
        }
    }
    componentDidMount() {

    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (

                <View style={{ flex: 1, width: width, height: height, backgroundColor: "#fff" }}>
            

                    <ScrollView
                        horizontal={false}
                        style={{ flex: 1, backgroundColor: "#fff" }}>
                        <View style={{ flex: 1, marginTop: 15 }}>
                        <Header middleButtonComponent={true}></Header>
                            <View style={{ width: "100%", alignItems: "center" }}>
                                <Image style={{ width: 100, height: 100 }} source={assets.icons.common.upic}></Image>
                                <Image style={{ width: 44, height: 44, marginTop: -20, marginLeft: 45 }} source={assets.icons.common.picker}></Image>
                            </View>
                            <Text style={{ fontSize: 12, color: "#AAAAAA", padding: 5, paddingLeft: 30, fontFamily: "Montserrat-Medium" }}>{"Kitchen Name"}</Text>
                            <TextInput
                                style={{
                                    borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%"
                                    , alignSelf: "center", height: 45, paddingLeft: 10, fontFamily: "Montserrat-Medium"
                                }}
                                autoCapitalize="none"
                                mode='text'
                                keyboardType='default'
                                maxLength={10}
                                placeholder="Kitchen Name"
                                blurOnSubmit={false}
                                onChangeText={kitchenName => {
                                    this.setState({ kitchenName })
                                }}
                                value={this.state.kitchenName}
                            />

                            <Text style={{ fontSize: 12, color: "#AAAAAA", padding: 5, paddingLeft: 30, fontFamily: "Montserrat-Medium" }}>{"Kitchen Contact No."}</Text>
                            <TextInput
                                style={{
                                    borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%"
                                    , alignSelf: "center", height: 45, paddingLeft: 10, fontFamily: "Montserrat-Medium"
                                }}
                                autoCapitalize="none"
                                mode='numeric'
                                keyboardType='numeric'
                                maxLength={10}
                                placeholder="Kitchen Contact No."
                                blurOnSubmit={false}
                                onChangeText={kitchenContactNo => {
                                    this.setState({ kitchenContactNo })
                                }}
                                value={this.state.kitchenContactNo}
                            />


                            <Text style={{ fontSize: 12, color: "#AAAAAA", padding: 5, paddingLeft: 30, paddingTop: 15, fontFamily: "Montserrat-Medium" }}>{"Kitchen Email Address"}</Text>
                            <TextInput
                                style={{
                                    borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%"
                                    , alignSelf: "center", height: 45, paddingLeft: 10, fontFamily: "Montserrat-Medium"
                                }}
                                autoCapitalize="none"
                                mode='text'
                                keyboardType='default'
                                maxLength={10}
                                placeholder="Kitchen Email Address"
                                blurOnSubmit={false}
                                onChangeText={kitchenEmail => {
                                    this.setState({ kitchenEmail })
                                }}
                                value={this.state.kitchenEmail}
                            />

                            <Text style={{ fontSize: 12, color: "#AAAAAA", padding: 5, paddingLeft: 30, paddingTop: 15, fontFamily: "Montserrat-Medium" }}>{"Kitchen Location"}</Text>
                            <TextInput
                                style={{
                                    borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%"
                                    , alignSelf: "center", height: 45, paddingLeft: 10, fontFamily: "Montserrat-Medium"
                                }}
                                autoCapitalize="none"
                                mode='text'
                                keyboardType='default'
                                maxLength={10}
                                placeholder="Kitchen Location"
                                blurOnSubmit={false}
                                onChangeText={kitchenLocation => {
                                    this.setState({ kitchenLocation })
                                }}
                                value={this.state.kitchenLocation}
                            />

                            <Text style={{ fontSize: 12, color: "#AAAAAA", padding: 5, paddingLeft: 30, paddingTop: 15, fontFamily: "Montserrat-Medium" }}>{"City"}</Text>
                            <TextInput
                                style={{
                                    borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%"
                                    , alignSelf: "center", height: 45, paddingLeft: 10, fontFamily: "Montserrat-Medium"
                                }}
                                autoCapitalize="none"
                                mode='text'
                                keyboardType='default'
                                maxLength={10}
                                placeholder="City"
                                blurOnSubmit={false}
                                onChangeText={kitchenCity => {
                                    this.setState({ kitchenCity })
                                }}
                                value={this.state.kitchenCity}
                            />

                            <Text style={{ fontSize: 12, color: "#AAAAAA", padding: 5, paddingLeft: 30, fontFamily: "Montserrat-Medium" }}>{"Pincode"}</Text>
                            <TextInput
                                style={{
                                    borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%"
                                    , alignSelf: "center", height: 45, paddingLeft: 10, fontFamily: "Montserrat-Medium"
                                }}
                                autoCapitalize="none"
                                mode='numeric'
                                keyboardType='numeric'
                                maxLength={10}
                                placeholder="Pincode"
                                blurOnSubmit={false}
                                onChangeText={kitchenPincode => {
                                    this.setState({ kitchenPincode })
                                }}
                                value={this.state.kitchenPincode}
                            />
                            {this.uploadButtonView()}

                            <Text onPress={() => {
                                this.props.navigation.navigate('FSSAIDocument');
                            }} style={{
                                fontSize: 13, color: "#474747", padding: 10, paddingTop: 19, textAlign: "center", fontFamily: "Montserrat-Medium",
                                textDecorationLine: 'underline'
                            }}>{"Don't have FSSAI Document?"}</Text>
                        </View>


                        {this.clickButtonView()}
                    </ScrollView>



                </View>
          

        );
    }
    /** Header View */

    headerView = () => {
        return (
            <ImageBackground style={{ width: "100%", height: 200, marginTop: -50 }} source={assets.icons.utilicon.topheader}>
                <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 20, color: "#4A4A4A", marginTop: 93, paddingLeft: 25 }}>{"Sign up to Good Food"}</Text>
            </ImageBackground>
        )
    }

    // inputView = () => {
    //     const { width, height } = Dimensions.get('window');
    //     return (

    //     )
    // }

    uploadButtonView = () => {
        return (
            <View style={{
                borderRadius: 25,
                width: "100%", height: 60
            }}>
                <View style={{ backgroundColor: "#FFFBEE", width: 350, height: 60, borderRadius: 25, alignSelf: "center", marginTop: 10, flexDirection: "row", justifyContent: "center" }}>
                    <Image style={{ width: 18, height: 18, alignSelf: "center" }} source={assets.icons.common.upload}></Image>
                    <Text onPress={() => {
                        // this.props.navigation.navigate('VerifyMobile');
                    }} style={{
                        fontSize: 13, color: "#474747", padding: 10, paddingTop: 19, textAlign: "center", fontFamily: "Montserrat-Medium"
                    }}>{"Upload FSSAI Document"}</Text>
                </View>
            </View>
        )
    }
    clickButtonView = () => {
        return (
            <View style={{ backgroundColor: "#F37021", width: 250, borderRadius: 25, alignSelf: "center",marginBottom:50 }}>
                <Text onPress={() => {
                    this.props.navigation.navigate('Seller3BasicInfo');
                }} style={{
                    fontSize: 16, color: "#fff", padding: 10, textAlign: "center", fontFamily: "Montserrat-Medium"
                }}>{"Continue 2/3"}</Text>
            </View>
        )
    }

}

