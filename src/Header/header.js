import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, Platform } from 'react-native'
import { withNavigation } from 'react-navigation'
import { styles as commonStyles, dimensions, colors, assets } from '../Res'

const Header = ({ title, navigation, style, middleButtonComponent, rightButtonComponent }) => (
    <View style={[styles.headerView, style]}>
        <TouchableOpacity style={styles.backButtonView} onPress={() => navigation.goBack()}>
            {getBackIconInApp(title, style)}
        </TouchableOpacity>

        {middleButtonComponent && <TouchableOpacity style={styles.centerIcon}>{centerHeaderIcon(title)}</TouchableOpacity>}
        {rightButtonComponent && <View style={styles.rightButtonView}>{rightButtonComponent}</View>}
        {/* {getBackTitleInApp(title, style)} */}
    </View>
)
function getBackIconInApp(title, style) {
    return <Image style={[styles.backIcon, style]} source={assets.back_icon}></Image>
}
function centerHeaderIcon(title) {
    return <Image style={styles.centerIcon} source={assets.icons.utilicon.logo}></Image>
}

const styles = StyleSheet.create({
    headerView: {
        width: "100%",
        height: dimensions.headerHeight,
        ...commonStyles.shadowBottom,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    headerTitleTexts: {
        fontSize: 18, marginTop: 5, color: "#fff", fontFamily: "Montserrat-Medium"
    }, headerTitleText: {
        fontSize: 21,
        fontWeight: '600',
        alignSelf: 'center'
    },
    headerTitleTextMain: {
        backgroundColor: "#ccc", fontSize: 28, fontWeight: "900"
    },
    backButtonView: {
        flex:1,
        width:30,
        height:30,
        marginLeft:16,
        marginTop:16
    },
    rightButtonView: {
        position: 'absolute',
        right: 0
    },
    backIcon: {
        width: 30,
        height: 30,
        tintColor: "grey",
        flex:1
    },
    centerIcon: {
        alignSelf: "center",
        height: 20,
        width: 98.67,
        marginTop:-10
    }
})

export default withNavigation(Header)
