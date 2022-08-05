import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Entypo} from "@expo/vector-icons";
import {ColorSchemeName} from "react-native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "light" ? DefaultTheme : DarkTheme}
    >
      <RootNivig />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();
const RootNivig = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={WorkoutDetailScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Planner"
        component={PlannerScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => (
            <Entypo name="add-to-list" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
