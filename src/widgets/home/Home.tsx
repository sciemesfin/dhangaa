import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5,MaterialCommunityIcons, } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import { Toolbar } from "../../components";
import Category from "../category/Category";
import Restaurants from "../items/Restaurants";
import Orders from "../items/Orders";
import MyMenu from "../items/MyMenu";

const Tab = createBottomTabNavigator();

export default function Home(props: any) {
  return (
    <View style={{ backgroundColor: "#edf2f7", flex: 1 }}>
      <Toolbar
        search={() => props.navigation.navigate("Search")}
        profile={() => props.navigation.navigate("Profile")}
      />
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Category"
          component={Category}
          options={{
            headerShown: false,
            title: "Categories",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-list-circle-outline" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Menu"
          component={MyMenu}
          options={{
            headerShown: false,
            title: "My Menu",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="folder-open" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Restaurants"
          component={Restaurants}
          options={{
            headerShown: false,
            title: "Restaurants",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-import-outline" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown: false,
            title: "Orders",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food-turkey"  color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
