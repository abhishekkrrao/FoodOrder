import React, { Component } from "react";
import styles from './style'
import { View, Text, FlatList, Image, ScrollView, ImageBackground, Platform } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { assets as assets } from '../../Res'
export default class More extends React.Component {

    constructor(props) {
        super(props)
        this.state = { list: [] }
    }
    componentDidMount() {
        let list = [{ name: "My Orders", image: assets.icons.utilicon.callender },
        { name: "My Profile", image: assets.icons.utilicon.my_profile },
        { name: "Manage Address", image: assets.icons.utilicon.home_icon },
        { name: "Settings", image: assets.icons.utilicon.settings },
        { name: "Help & Support", image: assets.icons.utilicon.call },
        { name: "Change Language", image: assets.icons.utilicon.language }];
        this.setState({ list: list }, () => { })
    }

    render() {
        return (
            <View style={{ flex: 1, width: "100%", marginTop: Platform.OS == 'ios' ? 0 : 0, backgroundColor: "#fff", marginBottom: 0 }}>
                <ScrollView style={{ flex: 1, marginBottom: 10, backgroundColor: "#fff" }}>
                    {this.headerView()}
                    {this.userMoreView()}
                    {this.switchUserView()}

                </ScrollView>
            </View>

        );
    }
    /** Header View */
    headerView = () => {
        return (
            <ImageBackground style={{ width: "100%", height: 200, marginTop: Platform.OS == 'ios' ? 0 : 0 }} source={assets.icons.utilicon.topheader}>
                <View style={{ width: "100%", height: 200, paddingTop: 0 }}>
                    <Image style={{ alignSelf: "center", marginTop: Platform.OS == 'ios' ? 50 : 25, height: 20, width: 98.67 }} source={assets.icons.utilicon.logo}></Image>
                    <View style={{ width: "90%", flexDirection: "row", padding: 10 }}>
                        <Image style={{ alignSelf: "flex-start", height: 65, width: 65, marginLeft: 10 }} source={assets.icons.utilicon.user}></Image>
                        <View style={{ width: "86%", flexDirection: "column", padding: 5 }}>
                            <Text style={{ padding: 5, fontFamily: "Montserrat-Medium", fontSize: 16, color: "#2e2e2e" }}>{"Abhishek Kumar Rao"}</Text>
                            <Text style={{ paddingLeft: 5, fontFamily: "Montserrat-Medium", fontSize: 14, color: "#4A4A4A" }}>{"+91-7678658965"}</Text>
                        </View>
                        <Image style={{ height: 20, width: 20, position: "absolute", right: 0, top: 30 }} source={assets.icons.utilicon.notification}></Image>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    userMoreView = () => {
        return (
            <FlatList
                style={{ width: "100%", height: 370 }}
                data={this.state.list}
                renderItem={({ item }) => {
                    return this.singleMoreView(item)
                }}
                keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
            />
        )
    }
    singleMoreView = (item) => {
        return (
            <View style={{ width: "100%", flexDirection: "row", height: 60, padding: 10 }}>
                <Image style={{ alignSelf: "flex-start", height: 24, width: 24, marginLeft: 10 }} source={item.image}></Image>
                <Text style={{ fontSize: 16, padding: 10, paddingTop: 3, paddingLeft: 15, fontFamily: "Montserrat-Medium" }}>{item.name}</Text>
                <Image style={{ height: 28, width: 28, position: "absolute", right: 20, top: 15 }} source={assets.icons.utilicon.forward}></Image>
            </View>
        );
    }
    switchUserView = () => {
        return (
            <View style={{ width: "90%", flexDirection: "row", height: 65, padding: 10, backgroundColor: "#f1f8e9", alignSelf: "center", borderRadius: 15 }}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={{ color: "#76B043", fontWeight: "bold", fontSize: 19, paddingLeft: 10, fontFamily: "Montserrat-Medium" }}>{"Do you want to sell a food ?"}</Text>
                    <Text style={{ color: "#76B043", paddingLeft: 10, paddingTop: 5 }}>{"Switch to sell profile"}</Text>
                </View>
                <Image style={{ height: 28, width: 28, position: "absolute", right: 20, top: 15 }} source={assets.icons.utilicon.switch}></Image>
            </View>
        );
    }
}

