import React, { Component } from "react";
import styles from './style'
import { View, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, Text, Platform, ImageBackground, Picker } from "react-native";
import { assets as assets } from '../../Res'
import Header from '../../Header/header'
import { Dropdown } from 'react-native-material-dropdown-v2'
import { StackActions, NavigationActions } from 'react-navigation';
export default class Seller3BasicInfo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedValue: "09:00 AM", data: [], selfDeliver: false,
            collectFromHome: false, bothDeliver: false
        }
    }
    componentDidMount() {
        let data = [{
            value: '09:00 AM',
        }, {
            value: '10:00 PM',
        }, {
            value: '06:00 AM',
        }];
        this.setState({ data: data }, () => { })
    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (


            <View style={{ flex: 1, width: width, height: height, backgroundColor: "#fff" }}>

                <ScrollView
                    nestedScrollEnabled={true}
                    style={{ flex: 1, backgroundColor: "#fff", height: height, width: width,flexDirection:"column" }}>


                    {this.inputView()}

                   
                </ScrollView>



            </View>

        );
    }
    /** Header View */

    inputView = () => {
        return (
            <View style={{flex:1, width: "100%", position: "relative", marginTop: 15 }}>

                <Header middleButtonComponent={true}></Header>

                <View style={{ width: "100%", flexDirection: "row" }}>
                    <Dropdown
                        labelFontSize={8}
                        value={this.state.selectedValue}
                        containerStyle={{ flex: 1, marginRight: 5, marginLeft: 10 }}
                        label='Opening Time'
                        data={this.state.data}
                    />
                    <Dropdown
                        labelFontSize={8}
                        value={this.state.selectedValue}
                        containerStyle={{ flex: 1, marginRight: 5, marginLeft: 5 }}
                        label='Closing Time'
                        data={this.state.data}
                    />
                </View>


                <View style={{ width: "100%", flexDirection: "row" }}>
                    <Dropdown
                        labelFontSize={8}
                        value={this.state.selectedValue}
                        containerStyle={{ flex: 1, marginRight: 5, marginLeft: 10, fontSize: 11 }}
                        label='Minimum Delivery Time'
                        data={this.state.data}
                    />
                    <Dropdown
                        labelFontSize={8}
                        value={this.state.selectedValue}
                        containerStyle={{ flex: 1, marginRight: 5, marginLeft: 5 }}
                        label='Delivery Area'
                        data={this.state.data}
                    />
                </View>

                {this.radioButtonView()}
                {this.uploadButtonView()}
             
         
            </View>
        )
    }


    radioButtonView = () => {
        return (

            <View style={{ flexDirection: "column", width: "100%" }}>
                <Text style={{ paddingLeft: 30, paddingTop: 20, fontSize: 12, fontFamily: "Montserrat-Medium", color: "#AAAAAA" }}>{"Select Mode"}</Text>
                <View style={{ flexDirection: "column", width: "100%", padding: 15, height: 150 }}>



                    {this.state.selfDeliver ? <TouchableOpacity onPress={() => {
                        this.setState({ selfDeliver: false }, () => { })
                    }} style={{ flex: 1, width: "100%", height: 50, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                        <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checkedin} />
                        <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"I can deliver to customer"}</Text>
                    </TouchableOpacity> : <TouchableOpacity onPress={() => {
                        this.setState({ selfDeliver: true, collectFromHome: false, bothDeliver: false }, () => { })
                    }} style={{ flex: 1, width: "100%", height: 50, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                            <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checked} />
                            <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"I can deliver to customer"}</Text>
                        </TouchableOpacity>}



                    {this.state.collectFromHome ? <TouchableOpacity onPress={() => {
                        this.setState({ collectFromHome: false }, () => { })
                    }} style={{ flex: 1, width: "100%", height: 50, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                        <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checkedin} />
                        <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"Collection from Home/Restaurant"}</Text>
                    </TouchableOpacity> : <TouchableOpacity onPress={() => {
                        this.setState({ collectFromHome: true, selfDeliver: false, bothDeliver: false }, () => { })
                    }} style={{ flex: 1, width: "100%", height: 50, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                            <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checked} />
                            <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"Collection from Home/Restaurant"}</Text>
                        </TouchableOpacity>}



                    {this.state.bothDeliver ? <TouchableOpacity onPress={() => {
                        this.setState({ bothDeliver: false }, () => { })
                    }} style={{ flex: 1, width: "100%", height: 50, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                        <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checkedin} />
                        <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"Both"}</Text>
                    </TouchableOpacity> : <TouchableOpacity onPress={() => {
                        this.setState({ bothDeliver: true, selfDeliver: false, collectFromHome: false }, () => { })
                    }} style={{ flex: 1, width: "100%", height: 50, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center", paddingLeft: 12 }}>
                            <Image style={{ width: 24, height: 24 }} source={assets.icons.common.radio_button_checked} />
                            <Text style={{ fontFamily: "Montserrat-Medium", padding: 5 }}>{"Both"}</Text>
                        </TouchableOpacity>}




                </View>


            </View>

        )
    }



    uploadButtonView = () => {
        return (
            <View style={{
                borderRadius: 25,
                width: "100%", height: 90
            }}>
                <View style={{ backgroundColor: "#FFFBEE", width: 350, height: 90, borderRadius: 25, alignSelf: "center", marginTop: 10, flexDirection: "column", justifyContent: "center" }}>

                    <Text onPress={() => {
                        // this.props.navigation.navigate('VerifyMobile');
                    }} style={{
                        fontSize: 13, color: "#474747", padding: 10, paddingTop: 19, textAlign: "center", fontFamily: "Montserrat-Medium"
                    }}>{"Upload Kitchen Images"}</Text>
                    <Image style={{ width: 18, height: 18, alignSelf: "center" }} source={assets.icons.common.upload}></Image>


                </View>
                {this.clickButtonView()}
         
            </View>
        )
    }
    clickButtonView = () => {
        return (
            <View style={{
                borderRadius: 25,
                width: "100%", height: 50,marginTop:30
            }}>
                <View style={{ backgroundColor: "#F37021", width: 250, borderRadius: 25, alignSelf: "center" }}>
                    <Text onPress={() => {
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: "Tabs" })],
                        });
                        this.props.navigation.dispatch(resetAction);
                    }} style={{
                        fontSize: 16, color: "#fff", padding: 10, textAlign: "center", fontFamily: "Montserrat-Medium"
                    }}>{"Continue 3/3"}</Text>
                </View>
            </View>
        )
    }

}

