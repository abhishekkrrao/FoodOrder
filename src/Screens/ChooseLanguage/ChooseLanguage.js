import React, { Component } from "react";
import styles from './style'
import { View, Text, FlatList, Image, ScrollView, ImageBackground, TouchableOpacity, Platform } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { assets as assets } from '../../Res'
export default class ChooseLanguage extends React.Component {

    constructor(props) {
        super(props)

        this.state = { list: [], selectedItem: false }
    }
    componentDidMount() {
        let list = [];
        list.push({ name: "हिन्दी", ischeck: false })
        list.push({ name: "English", ischeck: false })
        list.push({ name: "বাংলা", ischeck: false })
        list.push({ name: "తెలుగు", ischeck: false })
        list.push({ name: "मराठी", ischeck: false })
        list.push({ name: "தமிழ்", ischeck: false })
        list.push({ name: "ગુજરાતી", ischeck: false })
        list.push({ name: "اردو", ischeck: false })
        list.push({ name: "ಕನ್ನಡ", ischeck: false })
        list.push({ name: "മലയാളം", ischeck: false })
        list.push({ name: "ਪੰਜਾਬੀ", ischeck: false })
        this.setState({ list: list }, () => { });
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ flex: 1, backgroundColor: "#fff", marginBottom: 15 }}>
                    {this.headerView()}
                    {this.languageView()}
                </View>
            </ScrollView>
        );
    }
    /** Header View */
    headerView = () => {
        return (
            <View style={{ flex: 1 }}>
                <Image style={{ alignSelf: "center", height: 20, marginTop: 55, width: 98.67 }} source={assets.icons.utilicon.logo}></Image>
                <Image style={{ alignSelf: "center", height: 80, marginTop: 5, width: 80 }} source={assets.icons.utilicon.language}></Image>
                <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 20, textAlign: "center", padding: 10 }}>{"Please select your language"}</Text>
                <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 20, textAlign: "center", padding: 10 }}>{"कृपया भाषा चयन करें"}</Text>
            </View>
        )
    }
    languageView = () => {
        return (
            <FlatList
                data={this.state.list}
                renderItem={({ item, index }) => {
                    return this.singleLanguageView(item, index)
                }}
                keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                numColumns={2}
            />
        )
    }


    singleLanguageView = (item, index) => {
        const isSelectedUser = this.state.list[index].ischeck;
        const viewStyle = isSelectedUser ? styles.selectedButton : styles.normalButton;
        const textStyle = isSelectedUser ? styles.selectedTxtStyle : styles.normalText;
        return (
            <TouchableOpacity
                onPress={() => {
                    this.state.list.map((obj, i) => {
                        index == i ? this.state.list[i].ischeck = true : this.state.list[i].ischeck = false;
                    });
                    console.log('list ', this.state.list);
                    this.setState({ list: this.state.list }, () => { });

                    this.props.navigation.navigate('SelectType');
                    // setTimeout(() => {
                    //     this.props.navigation.navigate('SelectType');
                    // }, 2000);
                }}
                style={viewStyle}>
                <Text style={textStyle} > {item.name} </Text>
            </TouchableOpacity>
        );
    }
}

