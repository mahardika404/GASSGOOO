import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// DATA SCREEN
// Register/login
import Login from "../screens/Login";
import Register from "../screens/Register";
import Phone from "../screens/Login/Phone";

// dashboard
import Home from "../screens/Home";
import News from "../screens/News";
import Profile from "../screens/Profile";
import DetailNews from "../screens/News/DetailNews";
// AUTH PROGRESS
import AuthLoad from "./Auth";

// STACK LOGIN / REGISTER
const AuthStack = createStackNavigator({
  Login,
  Register,
  Phone
});

// STACK DASHBOARD COMPONENT
const DashboardStack = createBottomTabNavigator(
  {
    Home,
    News,
    Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : ""}`;
        } else if (routeName === "News") {
          iconName = `newspaper${focused ? "" : ""}`;
        } else if (routeName === "Profile") {
          iconName = `account${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

// SWITCH NAVIGATOR
const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoad,
    AuthStack,
    DashboardStack
  },
  {
    initialRouteName: "AuthLoad"
  }
);
// ROOT ROUTE
const AppNavigator = createStackNavigator(
  {
    SwitchNavigator: {
      screen: SwitchNavigator,
      navigationOptions: {
        header: null
      }
    },
    DetailNews
  },
  {
    initialRouteName: "SwitchNavigator"
  }
);
export default createAppContainer(AppNavigator);
