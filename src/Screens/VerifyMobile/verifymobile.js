import React, { Component } from "react";
import styles from './style'
import { View, Image, Platform, Dimensions, TextInput, TouchableOpacity, Text } from "react-native";
import { assets as assets } from '../../Res'
import Header from '../../Header/header'
import { StackActions, NavigationActions } from 'react-navigation';
export default class VerifyMobile extends React.Component {

    constructor(props) {
        super(props)

        this.state = { list: [], mobile: "" }
    }
    componentDidMount() {

    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <View style={{ flex: 1, width: width, backgroundColor: "#fff",marginTop: Platform.OS == "ios" ? 25 : 0 }}>
              
                <View style={{ marginTop: 0 }}>
                <Header style={{width:34,height:34}} middleButtonComponent={false}></Header>
                    <Image
                        style={{ width: 242.77, height: 167.33, alignSelf: "center", padding: 25 }}
                        source={assets.appimage}
                    />
                    <Text style={{ fontSize: 13, color: "#AAAAAA", padding: 5, paddingLeft: 30 }}>{"Enter Mobile Number"}</Text>
                    <TextInput
                        style={{
                            borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%"
                            , alignSelf: "center", height: 45, paddingLeft: 10
                        }}
                        autoCapitalize="none"
                        mode='number'
                        keyboardType='numeric'
                        maxLength={10}
                        placeholder="Mobile"
                        blurOnSubmit={false}
                        onChangeText={mobile => {
                            this.setState({ mobile })
                        }}
                        value={this.state.mobile}
                    />
                    <TouchableOpacity onPress={() => {
                        // this.props.navigation.navigate('Tabs');

                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: "Tabs" })],
                        });
                        this.props.navigation.dispatch(resetAction);


                        //  this.props.navigation.navigate('VerifySucess');
                    }} style={{ backgroundColor: "#F37021", width: "90%", borderRadius: 25, alignSelf: "center", marginTop: 25 }}>
                        <Text style={{
                            fontSize: 16, color: "#fff", padding: 10, textAlign: "center", fontFamily: "Montserrat-Medium"
                        }}>{"Verify Mobile"}</Text>
                    </TouchableOpacity>

                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: 12, color: "#979797", padding: 5, paddingTop: 15, textAlign: "center", fontFamily: "Montserrat-Medium"
                        }}>{"By continuing, you are agree to our "}</Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: 13, color: "#717171", padding: 0, textAlign: "center", fontFamily: "Montserrat-Medium"
                        }}>{"Terms and Conditions and Privacy Policy "}</Text>
                </View>
            </View>
        );
    }


}

