import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation'
import {
  Loading, Dashboard, More, Offer, TakeAway, ChooseLanguage,
  SelectType, VerifyStart, VerifyMobile, VerifySucess, KitchenDetail,
  SellerBasicInfo, Seller2BasicInfo, Seller3BasicInfo, FSSAIDocument
} from '../Screens'
import { StatusBar, Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
console.disableYellowBox = true;
const Tabs = createBottomTabNavigator({
  Home: {
    screen: Dashboard,
    navigationOptions: {
      title: "Home",
      headerLeft: null,
      header: {
        visible: false,
        left: null,
      },
      backButton: {
        visible: false,
      }
    }
  }, TakeAway: {
    screen: TakeAway,
    navigationOptions: {
      title: "TakeAway",
      headerLeft: null,
      header: {
        visible: false,
        left: null,
      },
      backButton: {
        visible: false,
      }
    }
  }, Offer: {
    screen: Offer,
    navigationOptions: {
      title: "Offer",
      headerLeft: null,
      header: {
        visible: false,
        left: null,
      },
      backButton: {
        visible: false,
      }
    }
  }, More: {
    screen: More,
    navigationOptions: {
      title: "More",
      headerLeft: null,
      header: {
        visible: false,
        left: null,
      },
      backButton: {
        visible: false,
      }
    }
  },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let name = "home";
      if (routeName === 'Home') {
        name = "home";
      }
      else if (routeName === 'TakeAway') {
        name = "takeout-dining";
      }
      else if (routeName === 'Offer') {
        name = "local-offer";
      }
      else if (routeName === 'More') {
        name = "more";
      }
      return focused ? <Icon name={name} size={24} color={"tomato"} /> : <Icon name={name} size={24} color={"gray"} />;
    },
  }), tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#ccc',
    activeBackgroundColor: '#fff',
    labelStyle: { fontSize: 14 },
    tabStyle: { fontSize: 14 },
    style: { height: 55, borderStyle: 'solid', backgroundColor: "#fff" }
  },
});
const AppContainer = createAppContainer(createStackNavigator({
  Loading: { screen: Loading },
  Dashboard: { screen: Dashboard },
  KitchenDetail: { screen: KitchenDetail },
  Tabs: { screen: Tabs },
  More: { screen: More },
  Offer: { screen: Offer },
  TakeAway: { screen: TakeAway },
  ChooseLanguage: { screen: ChooseLanguage },
  SelectType: { screen: SelectType },
  VerifyStart: { screen: VerifyStart },
  VerifyMobile: { screen: VerifyMobile },
  VerifySucess: { screen: VerifySucess },
  SellerBasicInfo: { screen: SellerBasicInfo },
  Seller2BasicInfo: { screen: Seller2BasicInfo },
  Seller3BasicInfo: { screen: Seller3BasicInfo },
  FSSAIDocument: { screen: FSSAIDocument }

}, {
  headerMode: 'none',
  initialRouteName: 'Loading',
  navigationOptions: { gesturesEnabled: false }   // to prevent back on swipe gesture on IOS.
}));
export default class Navigator extends Component {
  state = {}
  render = () => <AppContainer ref={r => this.navigation = r._navigation} />
  componentDidMount() {
    let initialRouteName = 'Loading';
    setTimeout(() => {
      // initialRouteName = 'SellerBasicInfo';
      // initialRouteName = 'Tabs';
      initialRouteName = 'ChooseLanguage';
      // Platform.OS == "android" ? StatusBar.setBarStyle('transparent', false) : "";
      Platform.OS == "android" ? StatusBar.setBackgroundColor("#FFF8F3") : "";
      // Platform.OS == "android" ? StatusBar.setTranslucent(true) : "";
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({
          routeName: initialRouteName
        })],
      });
      this.navigation.dispatch(resetAction);
    }, 2000);

  }
}
