import React, { Component } from "react";
import styles from './style'
import { View, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, Text, Platform, ImageBackground, Picker } from "react-native";
import { assets as assets } from '../../Res'
import Header from '../../Header/header'
import { StackActions, NavigationActions } from 'react-navigation';
export default class FSSAIDocument extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <ScrollView
                nestedScrollEnabled={true}
                style={{
                    flex: 1, 
                    height: height, width: width, backgroundColor: "#fff",
                    position: "relative"
                }}>
                     
                <View style={{ flex: 1, width: width, height: height - 200, backgroundColor: "#fff" }}>
                 
                <Header style={{marginTop:20}} middleButtonComponent={true}></Header>
                    <View style={{ flex: 1, width: width, justifyContent: "center" }}>
                  
                        <ImageBackground
                            style={{ width: 240, height: 220, alignSelf: "center" }}
                            source={assets.icons.common.verify_otp}>
                            <Image style={{ width: 85.28, height: 78.74, alignSelf: "center", marginTop: 70 }} source={assets.icons.common.document}></Image>
                        </ImageBackground>
                        <Text style={{
                            fontSize: 24, color: "#4A4A4A"
                            , textAlign: "center", padding: 25, fontFamily: "Montserrat-Medium"
                        }}>{"FSSAI Documents"}</Text>

                        <Text style={{
                            fontSize: 16, color: "#4A4A4A"
                            , textAlign: "center", paddingLeft: 25, paddingRight: 25, fontFamily: "Montserrat-Medium"
                        }}>{"Contact us if you don't have FSSAI Document. We will support you with your application."}</Text>
                    </View>


                </View>
                {this.clickButtonView()}
            </ScrollView>

        );
    }
    /** Header View */

    clickButtonView = () => {
        return (
            <View style={{
                borderRadius: 25,
                width: "100%", position: "absolute", bottom: 0, left: 0, height: 50
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
                    }}>{"Contact Us"}</Text>
                </View>
            </View>
        )
    }

}

