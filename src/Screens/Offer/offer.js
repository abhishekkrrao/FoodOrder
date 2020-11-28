import React, { Component } from "react";
import styles from './style'
import Header from '../../Header/header'
import { View, Text, FlatList, Image, Platform, ScrollView ,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { assets as assets } from '../../Res'
export default class Offer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { list: [], top5list: [] }
    }

    componentDidMount() {
        let list = [];
        list.push({ icon: assets.icons.utilicon.breakfast, name: "BreakFast" });
        list.push({ icon: assets.icons.utilicon.lunch, name: "Lunch" });
        list.push({ icon: assets.icons.utilicon.snacks, name: "Snacks" });
        list.push({ icon: assets.icons.utilicon.dinner, name: "Dinner" });
        this.setState({ list: list }, () => { });

        let top5list = [];
        top5list.push({ icon: assets.icons.utilicon.kitchen, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.f2, name: "Master's Kitchen", address: "Indian, Fast Food", time: "45 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.f1, name: "Master's Kitchen", address: "Indian, Fast Food", time: "45 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.kitchen, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.f3, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.kitchen, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.f2, name: "Master's Kitchen", address: "Indian, Fast Food", time: "45 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.f1, name: "Master's Kitchen", address: "Indian, Fast Food", time: "45 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.kitchen, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.f3, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.kitchen, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.f2, name: "Master's Kitchen", address: "Indian, Fast Food", time: "45 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.f1, name: "Master's Kitchen", address: "Indian, Fast Food", time: "45 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.kitchen, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km" });
        top5list.push({ icon: assets.icons.utilicon.f3, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km" });

        this.setState({ top5list: top5list }, () => { });
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS == 'ios' ? 0 : 0, backgroundColor: "#fff" }}>

                <ScrollView
                    style={{ flex: 1 }}
                    horizontal={false}
                    nestedScrollEnabled={true}
                    scrollEnabled={true}
                >
                    {this.header()}
                    {this.offerView()}
                    {this.allKitchenSliderView()}
                </ScrollView>

            </View>
        )
    }

    /** Start-View */
    header = () => {
        return (
            <View style={{ width: "100%" }}>
                <View style={{ width: "100%", flexDirection: 'row', height: 40, marginTop: Platform.OS == "ios" ?50:10, paddingLeft: 5 }}>
                    <Icon name="location-pin" size={24} color="#ff9300" />
                    <Text style={{ fontSize: 16, paddingLeft: 5, paddingTop: 5, fontFamily: "Montserrat-Medium", color: "#818181" }}>{"Location"}</Text>
                </View>

                <View style={{ width: "100%", height: 45, flexDirection: "row" }}>
                    <Text numberOfLines={1} style={{ fontSize: 17, paddingLeft: 15, width: "70%", fontFamily: "Montserrat-Medium", color: "#4A4A4A" }}>{"Sareya kali sthan road gopalganj bihar ward no 4 in front of godrej agency."}</Text>
                    <View style={{ flex: 1 }}>
                        <Icon style={{ alignSelf: "flex-end", marginEnd: 16 }} name="add-shopping-cart" size={24} color="#ff9300" />
                    </View>
                </View>
            </View>
        )
    }


    offerView = () => {
        return (
            <View style={{ width: "90%", height: 140, backgroundColor: "#FFF8F3", borderWidth: 1, borderColor: "#E5E5E5", alignSelf: "center", borderRadius: 15, elevation: 1, justifyContent: "center" }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "center" }}>
                    <Image
                        style={{ width: 21, height: 21 }}
                        source={assets.icons.utilicon.sale}
                    />
                    <View style={{ flexDirection: "column" }}>
                        <Text numberOfLines={1} style={{ fontFamily: "Montserrat-Medium", paddingLeft: 10, fontSize: 13 }}>{"20% off on all your orders | Use Code"}</Text>

                        <Text numberOfLines={1} style={{ fontFamily: "Montserrat-Medium", paddingLeft: 10, color: "#ff9300", fontSize: 15, paddingTop: 5 }}>{"DIWALI20"}</Text>
                    </View>

                </View>

                <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", paddingTop: 20 }}>
                    <Image
                        style={{ width: 21, height: 21 }}
                        source={assets.icons.utilicon.sale}
                    />
                    <View style={{ flexDirection: "column" }}>
                        <Text numberOfLines={1} style={{ fontFamily: "Montserrat-Medium", paddingLeft: 10, fontSize: 13 }}>{"20% off on all your orders | Use Code"}</Text>

                        <Text numberOfLines={1} style={{ fontFamily: "Montserrat-Medium", paddingLeft: 10, color: "#ff9300", fontSize: 15, paddingTop: 5 }}>{"SPECIAL100"}</Text>
                    </View>
                </View>
            </View>
        )
    }

    /**All Kitchens */

    allKitchenSliderView = () => {
        return (
            <View style={{ width: "100%", backgroundColor: "#fff", marginTop: 1, marginLeft: 20 }}>
                <View style={{ width: "100%", flexDirection: "row" }}>
                    <Text style={{ fontSize: 17, width: "40%", color: "#5A5A5A", paddingLeft: 5, paddingTop: 5, fontFamily: "Montserrat-Medium" }}>{"All Offer"}</Text>
                    <View style={{ width: "48%", flexDirection: "row", justifyContent: "flex-end" }}>

                        <Icon style={{ fontSize: 17, textAlign: "right", paddingTop: 7 }} color={"#ff9300"} name={"filter-alt"}></Icon>
                        <Text style={{ fontSize: 17, textAlign: "right", color: "#ff9300", paddingTop: 5, fontFamily: "Montserrat-Medium" }}>{"Filter"}</Text>

                    </View>
                </View>
                <FlatList
                    style={{ width: "100%", marginTop: 5 }}
                    data={this.state.top5list}
                    renderItem={({ item }) => {
                        return this.singleAllSliderView(item)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />
            </View>
        )
    }
    singleAllSliderView = (item) => {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('KitchenDetail', { item: item });
            }} style={{ width: "100%", paddingTop: 5, flexDirection: "row" }}>
                <Image
                    style={{ width: 75, height: 75, padding: 5, alignSelf: "center", borderRadius: 15 }}
                    source={item.icon}
                />
                <View style={{ width: "100%", paddingLeft: 15 }}>
                    <Text numberOfLines={2} style={{ fontSize: 15, fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#4A4A4A" }}>{item.name}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#888888" }}>{item.address}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "row", paddingTop: 5 }}>
                            <Icon color={"#76B043"} name={"star-rate"}></Icon>
                            <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{item.rate}</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 5, paddingLeft: 10 }}>
                            <Icon color={"#76B043"} name={"lock-clock"}></Icon>
                            <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{item.time}</Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: 5, paddingLeft: 10 }}>
                            <Icon color={"#76B043"} name={"location-pin"}></Icon>
                            <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{item.location}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }





    /**End-View */
}

