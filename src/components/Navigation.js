import React from 'react'
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack'
import Questions from "../screens/Questions";
import MyAnswers from "../screens/MyAnswers";
import Prizes from '../screens/Prizes'
import colors from '../common/colors'
import { Ionicons, AntDesign } from '@expo/vector-icons';

const headerOptions = {
    headerLayoutPreset: 'center',

    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.DARK_GRAY,
          borderBottomWidth: 1,
          borderBottomColor: "#393636",
          
        },
        headerTintColor: colors.YELLOW,
        headerTitleStyle: {
          fontWeight: 'bold', 
          },
}}

const AppNavigator = createBottomTabNavigator(
    {
        MyAnswers: createStackNavigator({
                AnswerList: MyAnswers,
            },
            headerOptions
        ),
        Questions: createStackNavigator({
            Questions: Questions,
        },headerOptions),
        Prizes: createStackNavigator({
            PrizeList: Prizes,
        },headerOptions)
    },
    {
        initialRouteName: 'MyAnswers',
        defaultNavigationOptions: ({ navigation }) => ({
          headerStyle: {
            backgroundColor: colors.DARK_GRAY,
          },
          headerTintColor: colors.YELLOW,
          headerTitleStyle: {
            fontWeight: 'bold', 
            },
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Questions') {
              iconName = 'question';
              IconComponent = AntDesign
            } else if (routeName === 'MyAnswers') {
              iconName = 'md-cube';
            } else if(routeName === 'Prizes') {
                iconName = 'md-trophy'
            }
    
            // You can return any component that you like here!
            return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
            activeTintColor: colors.YELLOW,
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: colors.DARK_GRAY,
            },
          }
      }
);




export default createAppContainer(AppNavigator);
