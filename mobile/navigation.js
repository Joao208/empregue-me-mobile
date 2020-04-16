import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import AddButton from "./components/AddButton";
import JournalScreen from './components/feed'
import MeasuresScreen from './components/Jobs'
import TreatmentScreen from './components/PlusPageone_'
import ProfileScreen from './components/Profile'

// https://dribbble.com/shots/7046707-Nav-Bar-Animation

const TabNavigator = createBottomTabNavigator(
    {
        Journal: {
            screen: JournalScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#CDCCCE" />
            }
        },
        Measures: {
            screen: MeasuresScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="suitcase" size={24} color="#CDCCCE" />
            }
        },
        Add: {
            screen: () => null,
            navigationOptions: {
                tabBarIcon: <AddButton />
            }
        },
        Treatment: {
            screen: TreatmentScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="camera-retro" size={24} color="#CDCCCE" />
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="user" size={24} color="#CDCCCE" />
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
);

export default createAppContainer(TabNavigator);