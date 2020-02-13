import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Questions from "../screens/Questions";
import MyAnswers from "../screens/MyAnswers";
import Prizes from "../screens/Prizes";
import PrizeDetail from "../screens/PrizeDetail";
import colors from "../common/colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const headerOptions = {
  headerLayoutPreset: "center",

  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.DARK_GRAY,
      borderBottomWidth: 1,
      borderBottomColor: "#393636"
    },
    headerTintColor: colors.YELLOW,
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
};

const AppNavigator = createBottomTabNavigator(
  {
    Vastaukseni: createStackNavigator(
      {
        AnswerList: MyAnswers
      },
      headerOptions
    ),
    Kysymykset: createStackNavigator(
      {
        Questions: Questions
      },
      headerOptions
    ),
    Palkinnot: createStackNavigator(
      {
        PrizeList: { screen: Prizes },
        PrizeDetail: { screen: PrizeDetail }
      },
      headerOptions
    )
  },
  {
    initialRouteName: "Kysymykset",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Kysymykset") {
          iconName = "question";
          IconComponent = AntDesign;
        } else if (routeName === "Vastaukseni") {
          iconName = "md-cube";
        } else if (routeName === "Palkinnot") {
          iconName = "md-trophy";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: colors.YELLOW,
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: colors.DARK_GRAY
      }
    }
  }
);

export default createAppContainer(AppNavigator);
