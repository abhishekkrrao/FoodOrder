import React, { Component } from "react";
import styles from './style'
import Header from '../../Header/header'
import { View, Text, FlatList, Image, ScrollView, Platform, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { assets as assets } from '../../Res'
export default class Dashboard extends React.Component {
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

        this.setState({ top5list: top5list }, () => { });
    }
    render() {
        return (

            <View style={{ flex: 1, width: "100%", backgroundColor: "#fff", marginBottom: 0 }}>
                <ScrollView
                    nestedScrollEnabled={true}
                    style={{ flex: 1, marginBottom: 10, backgroundColor: "#fff" }}>


                    {this.header()}
                    {this.sliderView()}
                    {this.quickSliderView()}
                    {this.top5KitchenSliderView()}
                    {this.nearByKitchenSliderView()}
                    {this.allKitchenSliderView()}
                    {this.allKitchensView()}
                </ScrollView>
            </View>

        )
    }

    /** Start-View */
    header = () => {
        return (
            <View style={{ width: "100%", paddingLeft: 5 }}>
                <View style={{ width: "100%", flexDirection: 'row', height: 40, marginTop: Platform.OS == "ios" ? 50 : 10, paddingLeft: 5 }}>
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

    sliderView = () => {
        return (
            <View style={styles.container}>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={2}
                    autoplayLoop
                    index={2}
                    showPagination
                >
                    <View style={[styles.child, {
                        backgroundColor: '#fff'
                    }]}>
                        <Image
                            style={{
                                alignSelf: "center", width: "90%", borderRadius: 15, shadowColor: "black",
                                shadowOffset: { height: 2, width: 2 },
                                shadowOpacity: 0.3,
                            }}
                            source={assets.icons.utilicon.f1}
                        />
                    </View>
                    <View style={[styles.child, {
                        backgroundColor: '#fff'
                    }]}>
                        <Image
                            style={{
                                alignSelf: "center", width: "90%", borderRadius: 15, shadowColor: "black",
                                shadowOffset: { height: 2, width: 2 },
                                shadowOpacity: 0.3,
                            }}
                            source={assets.icons.utilicon.f2}
                        />
                    </View>
                    <View style={[styles.child, {
                        backgroundColor: '#fff'
                    }]}>
                        <Image
                            style={{
                                alignSelf: "center", width: "90%", borderRadius: 15, shadowColor: "black",
                                shadowOffset: { height: 2, width: 2 },
                                shadowOpacity: 0.3,
                            }}
                            source={assets.icons.utilicon.f3}
                        />
                    </View>
                </SwiperFlatList>
            </View>
        )
    }


    quickSliderView = () => {
        return (
            <View style={{ width: "100%", height: 100, backgroundColor: "#fff", marginTop: 1, marginLeft: 15 }}>
                <Text style={{ fontSize: 17, color: "#5A5A5A", paddingLeft: 10, paddingTop: 5, fontFamily: "Montserrat-Medium" }}>{"Quick Search"}</Text>
                <FlatList
                    style={{ width: "100%" }}
                    horizontal={true}
                    data={this.state.list}
                    renderItem={({ item }) => {
                        return this.singleQuickSliderView(item)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />
            </View>
        )
    }

    singleQuickSliderView = (item) => {
        return (
            <View style={{ width: 100, padding: 10 }}>
                <Image
                    style={{ width: 24, height: 24, padding: 5, alignSelf: "center" }}
                    source={item.icon}
                />
                <Text style={{ fontSize: 13, textAlign: "center", fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#000" }}>{item.name}</Text>
            </View>
        );
    }

    top5KitchenSliderView = () => {
        return (
            <View style={{ width: "100%", height: 250, backgroundColor: "#fff", marginTop: 1, marginLeft: 20 }}>
                <Text style={{ fontSize: 17, color: "#5A5A5A", paddingLeft: 5, paddingTop: 5, fontFamily: "Montserrat-Medium" }}>{"Top 5 Kitchen"}</Text>
                <FlatList
                    style={{ width: "100%" }}
                    horizontal={true}
                    data={this.state.top5list}
                    renderItem={({ item }) => {
                        return this.singleTo5SliderView(item)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />
            </View>
        )
    }
    singleTo5SliderView = (item) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('KitchenDetail', { item: item });
                }}
                style={{ width: 150, paddingTop: 5 }}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 10, padding: 5, alignSelf: "center" }}
                    source={item.icon}
                />
                <Text numberOfLines={1} style={{ fontSize: 13, fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#4A4A4A" }}>{item.name}</Text>
                <Text numberOfLines={1} style={{ fontSize: 13, fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#888888" }}>{item.address}</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", paddingTop: 5 }}>
                        <Icon color={"#76B043"} name={"star-rate"}></Icon>
                        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{item.rate}</Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingTop: 5, paddingLeft: 10 }}>
                        <Icon color={"#76B043"} name={"lock-clock"}></Icon>
                        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{item.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    nearByKitchenSliderView = () => {
        return (
            <View style={{ width: "100%", height: 250, backgroundColor: "#fff", marginTop: 1, marginLeft: 20 }}>
                <Text style={{ fontSize: 17, color: "#5A5A5A", paddingLeft: 5, paddingTop: 5, fontFamily: "Montserrat-Medium" }}>{"Nearby Kitchens"}</Text>
                <FlatList
                    style={{ width: "100%" }}
                    horizontal={true}
                    data={this.state.top5list}
                    renderItem={({ item }) => {
                        return this.singlenearBySliderView(item)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />
            </View>
        )
    }
    singlenearBySliderView = (item) => {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('KitchenDetail', { item: item });
            }} style={{ width: 150, paddingTop: 5 }}>
                <Image
                    style={{ width: 140, height: 140, padding: 5, alignSelf: "center", borderRadius: 15 }}
                    source={item.icon}
                />
                <Text numberOfLines={1} style={{ fontSize: 13, fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#4A4A4A" }}>{item.name}</Text>
                <Text numberOfLines={1} style={{ fontSize: 13, fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#888888" }}>{item.address}</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", paddingTop: 5 }}>
                        <Icon color={"#76B043"} name={"star-rate"}></Icon>
                        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{item.rate}</Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingTop: 5, paddingLeft: 10 }}>
                        <Icon color={"#76B043"} name={"lock-clock"}></Icon>
                        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{item.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    /**All Kitchens */

    allKitchenSliderView = () => {
        return (
            <View style={{ width: "100%", height: 400, backgroundColor: "#fff", marginTop: 1, marginLeft: 20 }}>
                <View style={{ width: "100%", flexDirection: "row" }}>
                    <Text style={{ fontSize: 17, width: "40%", color: "#5A5A5A", paddingLeft: 5, paddingTop: 5, fontFamily: "Montserrat-Medium" }}>{"All Kitchens"}</Text>
                    <View style={{ width: "48%", flexDirection: "row", justifyContent: "flex-end" }}>

                        <Icon style={{ fontSize: 17, textAlign: "right", paddingTop: 7 }} color={"#ff9300"} name={"filter-alt"}></Icon>
                        <Text style={{ fontSize: 17, textAlign: "right", color: "#ff9300", paddingTop: 5, fontFamily: "Montserrat-Medium" }}>{"Filter"}</Text>

                    </View>
                </View>
                <FlatList
                    nestedScrollEnabled={true}
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

    allKitchensView = () => {
        return (
            <View style={{ width: "60%", height: 45, justifyContent: "center", alignSelf: "center", marginTop: 15 }}>
                <Text style={{
                    fontSize: 16, fontFamily: "Montserrat-Medium",
                    color: "#ff9300", borderWidth: 2, borderColor: "#ff9300",
                    textAlign: "center", borderRadius: 15, padding: 5
                }}>{"VIEW ALL KITCHENS"}</Text>
            </View>
        );
    }


    /**End-View */
}