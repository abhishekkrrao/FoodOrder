import React, { Component } from "react";
import styles from './style'
import { View, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, Text, Platform, ImageBackground } from "react-native";
import { assets as assets } from '../../Res'
import Header from '../../Header/header'
export default class SellerBasicInfo extends React.Component {

    constructor(props) {
        super(props)

        this.state = { list: [], selleremail: "", sellername: "", maleCheck: true, femaleCheck: false, otherCheck: false }
    }
    componentDidMount() {

    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <View style={{ flex: 1, width: width, backgroundColor: "#fff" }}>

                <ScrollView
                    style={{ flex: 1, height: height }}
                    nestedScrollEnabled={true}
                    scrollEnabled={true}
                >
                    {this.headerView()}
                    {this.inputView()}
                    {this.radioButtonView()}

                    {this.clickButtonView()}
                </ScrollView>
            </View>
        );
    }
    /** Header View */

    headerView = () => {
        return (
            <ImageBackground style={{ width: "100%", height: 200 }} source={assets.icons.utilicon.topheader}>
                <Header style={{marginTop:Platform.OS=="ios"?10:0}} middleButtonComponent={true}></Header>
            <Text style={{
                fontFamily: "Montserrat-Medium", fontSize: 20,
                color: "#4A4A4A", marginTop: 50, paddingLeft: 25
            }}>{"Sign up to Good Food"}</Text>
            </ImageBackground >
        )
    }


    inputView = () => {
        return (
            <View style={{ width: "100%", position: "relative" }}>
                <View style={{ width: "100%", position: "relative", alignItems: "center" }}>
                    <Image style={{ width: 100, height: 100 }} source={assets.icons.common.user_placeholder}></Image>
                    <Image style={{ width: 44, height: 44, marginTop: -20, marginLeft: 45 }} source={assets.icons.common.picker}></Image>
                </View>
                <Text style={{ fontSize: 12, color: "#AAAAAA", padding: 5, paddingLeft: 30, fontFamily: "Montserrat-Medium" }}>{"Seller Name"}</Text>
                <TextInput
                    style={{
                        borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%"
                        , alignSelf: "center", height: 45, paddingLeft: 10, fontFamily: "Montserrat-Medium"
                    }}
                    autoCapitalize="none"
                    mode='text'
                    keyboardType='default'
                    maxLength={10}
                    placeholder="Seller Name"
                    blurOnSubmit={false}
                    onChangeText={sellername => {
                        this.setState({ sellername })
                    }}
                    value={this.state.sellername}
                />


                <Text style={{ fontSize: 12, color: "#AAAAAA", padding: 5, paddingLeft: 30, paddingTop: 15, fontFamily: "Montserrat-Medium" }}>{"Email Address"}</Text>
                <TextInput
                    style={{
                        borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%"
                        , alignSelf: "center", height: 45, paddingLeft: 10, fontFamily: "Montserrat-Medium"
                    }}
                    autoCapitalize="none"
                    mode='text'
                    keyboardType='default'
                    maxLength={10}
                    placeholder="Email Address"
                    blurOnSubmit={false}
                    onChangeText={selleremail => {
                        this.setState({ selleremail })
                    }}
                    value={this.state.selleremail}
                />


            </View>
        )
    }

    radioButtonView = () => {
        return (

            <View style={{ flexDirection: "column", width: "100%" }}>

                <Text style={{ paddingLeft: 30, paddingTop: 20, fontFamily: "Montserrat-Medium" }}>{"Gender"}</Text>
                <View style={{ flexDirection: "row", width: "100%", padding: 15 }}>



                    {this.state.maleCheck ? <TouchableOpacity onPress={() => {
                        this.setState({ maleCheck: false }, () => { })
                    }} style={{ flex: 1, width: 24, height: 24, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                        <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checkedin} />
                        <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"Male"}</Text>
                    </TouchableOpacity> : <TouchableOpacity onPress={() => {
                        this.setState({ maleCheck: true, femaleCheck: false, otherCheck: false }, () => { })
                    }} style={{ flex: 1, width: 24, height: 24, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                            <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checked} />
                            <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"Male"}</Text>
                        </TouchableOpacity>}



                    {this.state.femaleCheck ? <TouchableOpacity onPress={() => {
                        this.setState({ femaleCheck: false }, () => { })
                    }} style={{ flex: 1, width: 24, height: 24, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                        <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checkedin} />
                        <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"Female"}</Text>
                    </TouchableOpacity> : <TouchableOpacity onPress={() => {
                        this.setState({ femaleCheck: true, maleCheck: false, otherCheck: false }, () => { })
                    }} style={{ flex: 1, width: 24, height: 24, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                            <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checked} />
                            <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"Female"}</Text>
                        </TouchableOpacity>}



                    {this.state.otherCheck ? <TouchableOpacity onPress={() => {
                        this.setState({ otherCheck: false }, () => { })
                    }} style={{ flex: 1, width: 24, height: 24, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                        <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checkedin} />
                        <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"Other"}</Text>
                    </TouchableOpacity> : <TouchableOpacity onPress={() => {
                        this.setState({ otherCheck: true, maleCheck: false, femaleCheck: false }, () => { })
                    }} style={{ flex: 1, width: 24, height: 24, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                            <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checked} />
                            <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"Other"}</Text>
                        </TouchableOpacity>}




                </View>


            </View>

        )
    }
    clickButtonView = () => {
        return (
            <View style={{ backgroundColor: "#F37021", width: 250, borderRadius: 25, alignSelf: "center" }}>
                <Text onPress={() => {
                    this.props.navigation.navigate('Seller2BasicInfo');
                }} style={{
                    fontSize: 16, color: "#fff", padding: 10, textAlign: "center", fontFamily: "Montserrat-Medium"
                }}>{"Continue 1/3"}</Text>
            </View>
        );
    }

}

