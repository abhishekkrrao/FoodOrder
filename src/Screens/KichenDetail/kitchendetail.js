import React, { Component } from "react";
import styles from './style'
import { View, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, FlatList, Text, Platform, ImageBackground } from "react-native";
import { assets as assets } from '../../Res'
import Header from '../../Header/header'
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
export default class KitchenDetail extends React.Component {

    constructor(props) {
        super(props)

        this.state = { list: [], mobile: "", kitchenDetail: {} }
    }
    componentDidMount() {
        const { params } = this.props.navigation.state;
        // console.log('params  ', params);
        this.setState({ kitchenDetail: params.item }, () => {
            // console.log('',this.state.kitchenDetail);
        });
        let top5list = [];
        top5list.push({ icon: assets.icons.utilicon.kitchen, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km", isAvailable: false, price: "$225", desc: "Soya chunks marinated In tangy spice masala and c….read more" });
        top5list.push({ icon: assets.icons.utilicon.f2, name: "Master's Kitchen", address: "Indian, Fast Food", time: "45 mim", rate: "4.8", location: "2.5 km", isAvailable: false, price: "$225", desc: "Soya chunks marinated In tangy spice masala and c….read more" });
        top5list.push({ icon: assets.icons.utilicon.f1, name: "Master's Kitchen", address: "Indian, Fast Food", time: "45 mim", rate: "4.8", location: "2.5 km", isAvailable: true });
        top5list.push({ icon: assets.icons.utilicon.kitchen, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km", isAvailable: false, price: "$225", desc: "Soya chunks marinated In tangy spice masala and c….read more" });
        top5list.push({ icon: assets.icons.utilicon.f3, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km", isAvailable: false, price: "$225", desc: "Soya chunks marinated In tangy spice masala and c….read more" });
        top5list.push({ icon: assets.icons.utilicon.kitchen, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km", isAvailable: false, price: "$225", desc: "Soya chunks marinated In tangy spice masala and c….read more" });
        top5list.push({ icon: assets.icons.utilicon.f2, name: "Master's Kitchen", address: "Indian, Fast Food", time: "45 mim", rate: "4.8", location: "2.5 km", isAvailable: false, price: "$225", desc: "Soya chunks marinated In tangy spice masala and c….read more" });
        top5list.push({ icon: assets.icons.utilicon.f1, name: "Master's Kitchen", address: "Indian, Fast Food", time: "45 mim", rate: "4.8", location: "2.5 km", isAvailable: false, price: "$225", desc: "Soya chunks marinated In tangy spice masala and c….read more" });
        top5list.push({ icon: assets.icons.utilicon.kitchen, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km", isAvailable: false, price: "$225", desc: "Soya chunks marinated In tangy spice masala and c….read more" });
        top5list.push({ icon: assets.icons.utilicon.f3, name: "Master's Kitchen", address: "Indian, Fast Food", time: "30 mim", rate: "4.8", location: "2.5 km", isAvailable: false, price: "$225", desc: "Soya chunks marinated In tangy spice masala and c….read more" });

        this.setState({ top5list: top5list }, () => { });
    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (

           

                <View style={{ flex: 1, width: width, backgroundColor: "#fff" }}>
                    <View style={{ flex: 1, position: "relative", width: width, height: height }}>



                        <ScrollView
                            nestedScrollEnabled={true}
                            style={{ width: "100%", backgroundColor: "#fff", marginTop: 0 }}>



                            <ImageBackground
                                style={{ width: "100%", height: 250 }}
                                source={assets.icons.utilicon.f2}
                            >
                                <Header style={{ tintColor: "#fff" }} middleButtonComponent={true} rightButtonComponent={this.shareView()}></Header>

                            </ImageBackground>
                            <View
                            style={{
                                backgroundColor: "#fff", width: width,
                                position: "absolute", top: 190, left: 0,
                                height: 250, borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                padding: 20
                            }}>

                                <Text numberOfLines={1} style={{ fontSize: 24, color: "#404040", fontFamily: "Montserrat-Medium" }}>{this.state.kitchenDetail.name}</Text>
                                <Text numberOfLines={1} style={{ color: "#888888", fontSize: 15, fontFamily: "Montserrat-Medium" }}>{this.state.kitchenDetail.address}</Text>

                                <View style={{ width: "100%", flexDirection: "row", paddingTop: 5 }}>
                                    <Text numberOfLines={1} style={{ fontSize: 15, color: "#76B043", fontFamily: "Montserrat-Medium" }}>{"Open Now"}</Text>
                                    <Text numberOfLines={1} style={{ color: "#888888", fontSize: 12, paddingLeft: 5, paddingTop: 3, fontFamily: "Montserrat-Medium" }}>{"12PM-3AM"}</Text>
                                </View>

                                <View style={{ width: "100%", flexDirection: "row", paddingTop: 5 }}>
                                    <Text numberOfLines={1} style={{ fontSize: 14, color: "#818181", fontFamily: "Montserrat-Medium", width: width - 150 }}>{"34, DLF Phase 4, Sector 29, Gu…"}</Text>
                                    <Text numberOfLines={1} style={{ color: "#F37021", fontSize: 12, paddingLeft: 5, paddingTop: 3, fontFamily: "Montserrat-Medium" }}>{"Get Direction"}</Text>
                                </View>


                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60, paddingTop: 15 }}>

                                    <View style={{ flex: 1, flexDirection: "column", height: 50 }}>
                                        <View style={{ flex: 1, flexDirection: "row", paddingTop: 10, justifyContent: "center" }}>
                                            <Icon color={"#76B043"} name={"star-rate"}></Icon>
                                            <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{this.state.kitchenDetail.rate}</Text>
                                        </View>
                                        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5, textAlign: "center" }}>{"100+ Rating"}</Text>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: "column", height: 50 }}>
                                        <View style={{ flex: 1, flexDirection: "row", paddingTop: 10, justifyContent: "center" }}>
                                            <Icon color={"#76B043"} name={"lock-clock"}></Icon>
                                            <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{this.state.kitchenDetail.time}</Text>
                                        </View>
                                        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", color: "#000", textAlign: "center" }}>{"Delivery Time"}</Text>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: "column", height: 50 }}>
                                        <View style={{ flex: 1, flexDirection: "row", paddingTop: 10, justifyContent: "center" }}>
                                            <Icon color={"#76B043"} name={"favorite"}></Icon>
                                            <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{"141"}</Text>
                                        </View>
                                        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", padding: 0, textAlign: "center" }}>{"Reviews"}</Text>
                                    </View>
                                </View>
                            </View>




                            {this.offerView()}
                            {this.breakFastView()}

                            <ScrollView
                                nestedScrollEnabled={true}
                                style={{ width: "100%", backgroundColor: "#F8F8F8", marginTop: 0 }}>
                                {this.lunchView()}
                                {this.snacksView()}
                                {this.dinnerView()}
                                {this.AllReviewsView()}
                            </ScrollView>

                        </ScrollView>

                    </View>
                </View>
        
        );
    }
    /** Header View */
    breakFastView = () => {
        return (
            <View style={{ width: "100%", height: 400, justifyContent: "center", marginTop: 10, padding: 20, alignSelf: "center", backgroundColor: "#fff" }}>

                <Text numberOfLines={1} style={{ fontSize: 18, color: "#404040", fontFamily: "Montserrat-Medium" }}>{"BreakFast"}</Text>
                <Text numberOfLines={1} style={{ color: "#888888", fontSize: 15, fontFamily: "Montserrat-Medium" }}>{"08:am to 12:pm"}</Text>

                <FlatList
                    nestedScrollEnabled={true}
                    style={{ width: "100%", marginTop: 5 }}
                    data={this.state.top5list}
                    renderItem={({ item }) => {
                        return this.singleBreakFastView(item)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />
            </View>

        )
    }
    lunchView = () => {
        return (
            <View style={{ width: "100%", height: 400, justifyContent: "center", marginTop: 10, padding: 20, alignSelf: "center", backgroundColor: "#fff" }}>

                <Text numberOfLines={1} style={{ fontSize: 18, color: "#404040", fontFamily: "Montserrat-Medium" }}>{"Lunch"}</Text>
                <Text numberOfLines={1} style={{ color: "#888888", fontSize: 15, fontFamily: "Montserrat-Medium" }}>{"08:am to 12:pm"}</Text>

                <FlatList
                    nestedScrollEnabled={true}
                    style={{ width: "100%", marginTop: 5 }}
                    data={this.state.top5list}
                    renderItem={({ item }) => {
                        return this.singleBreakFastView(item)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />
            </View>

        )
    }
    snacksView = () => {
        return (
            <View style={{ width: "100%", height: 400, justifyContent: "center", marginTop: 10, padding: 20, alignSelf: "center", backgroundColor: "#fff" }}>

                <Text numberOfLines={1} style={{ fontSize: 18, color: "#404040", fontFamily: "Montserrat-Medium" }}>{"Snacks"}</Text>
                <Text numberOfLines={1} style={{ color: "#888888", fontSize: 15, fontFamily: "Montserrat-Medium" }}>{"08:am to 12:pm"}</Text>

                <FlatList
                    nestedScrollEnabled={true}
                    style={{ width: "100%", marginTop: 5 }}
                    data={this.state.top5list}
                    renderItem={({ item }) => {
                        return this.singleBreakFastView(item)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />
            </View>

        )
    }
    dinnerView = () => {
        return (
            <View style={{ width: "100%", height: 400, justifyContent: "center", marginTop: 10, padding: 20, alignSelf: "center", backgroundColor: "#fff" }}>

                <Text numberOfLines={1} style={{ fontSize: 18, color: "#404040", fontFamily: "Montserrat-Medium" }}>{"Dinner"}</Text>
                <Text numberOfLines={1} style={{ color: "#888888", fontSize: 15, fontFamily: "Montserrat-Medium" }}>{"08:am to 12:pm"}</Text>

                <FlatList
                    nestedScrollEnabled={true}
                    style={{ width: "100%", marginTop: 5 }}
                    data={this.state.top5list}
                    renderItem={({ item }) => {
                        return this.singleBreakFastView(item)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />
            </View>

        )
    }

    singleBreakFastView = (item) => {
        return (
            <View style={{ width: "100%", paddingTop: 5, flexDirection: "row", position: "relative" }}>
                <Image
                    style={{ width: 75, height: 75, padding: 5, alignSelf: "center",borderRadius:10 }}
                    source={item.icon}
                />
                <View style={{ width: "100%", paddingLeft: 15 }}>
                    <Text numberOfLines={2} style={{ fontSize: 15, fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#4A4A4A", width: "50%" }}>{item.name}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#76B043", width: "50%" }}>{item.address}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#888888", width: "50%" }}>{item.desc}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 15, fontFamily: "Montserrat-Medium", paddingTop: 5, color: "#F37021", width: "50%" }}>{item.price}</Text>

                </View>
                {!item.isAvailable ? <View style={{ position: "absolute", width: 80, backgroundColor: "#F37021", right: 0, top: 25, borderRadius: 5 }}>
                    <Text style={{ color: "#fff", textAlign: "center", padding: 7, fontFamily: "Montserrat-Medium", fontSize: 12 }}>{"ADD"}</Text>
                </View> : <View style={{ position: "absolute", width: 80, right: 0, top: 25, borderRadius: 5, borderWidth: 1, borderColor: "#ccc" }}>
                        <Text style={{ color: "#A7A7A7", textAlign: "center", padding: 5, fontFamily: "Montserrat-Medium", fontSize: 12 }}>{"Not Available"}</Text>
                    </View>}
            </View>
        );
    }

    offerView = () => {
        return (
            <View style={{
                width: "90%", height: 140, position: "relative",
                backgroundColor: "#FFF8F3", borderWidth: 1, borderColor: "#E5E5E5",
                alignSelf: "center", borderRadius: 15, elevation: 2,
                justifyContent: "center", marginTop: 140, padding: 0
            }}>
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

                <TouchableOpacity style={{
                    width: 100, borderWidth: 1, elevation: 5,
                    borderRadius: 5, borderColor: "#ccc", height: 25,
                    position: "absolute", bottom: -10, alignSelf: "center"
                    , justifyContent: "center", backgroundColor: "#fafafa"
                }}>
                    <Text style={{ fontSize: 11, color: "#A7A7A7", textAlign: "center" }}>{"View Deatils"}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    AllReviewsView = () => {
        return (
            <View style={{ width: "100%", marginTop: 10, backgroundColor: "#fff", height: 200, padding: 20 }}>
                <Text numberOfLines={1} style={{ fontSize: 16, color: "#5A5A5A", fontFamily: "Montserrat-Medium" }}>{"All Reviews (141)"}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60, paddingTop: 15 }}>

                    <View style={{ flex: 1, flexDirection: "column", height: 50 }}>
                        <View style={{ flex: 1, flexDirection: "row", paddingTop: 10, justifyContent: "center" }}>
                            <Icon color={"#76B043"} name={"star-rate"}></Icon>
                            <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{this.state.kitchenDetail.rate}</Text>
                        </View>
                        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5, textAlign: "center" }}>{"Food Rating"}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: "column", height: 50 }}>
                        <View style={{ flex: 1, flexDirection: "row", paddingTop: 10, justifyContent: "center" }}>
                            <Icon color={"#76B043"} name={"star-rate"}></Icon>
                            <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{this.state.kitchenDetail.rate}</Text>
                        </View>
                        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", color: "#000", textAlign: "center" }}>{"Delivery Rating"}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: "column", height: 50 }}>
                        <View style={{ flex: 1, flexDirection: "row", paddingTop: 10, justifyContent: "center" }}>
                            <Icon color={"#76B043"} name={"star-rate"}></Icon>
                            <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", paddingTop: 0, color: "#000", paddingLeft: 5 }}>{this.state.kitchenDetail.rate}</Text>
                        </View>
                        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Medium", padding: 0, textAlign: "center" }}>{"Overall Rating"}</Text>
                    </View>
                </View>
            </View>)
    }
    shareView = () => {
        return (<TouchableOpacity onPress={() => {
            console.log('sharing...')
        }} style={{ width: 55, height: 55, paddingEnd: 25, paddingTop: 15 }}>
            <Icon size={24} color={"#fff"} name={"share"}></Icon>
        </TouchableOpacity>)
    }
}

