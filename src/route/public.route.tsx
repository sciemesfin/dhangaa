import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../widgets/home/Home";

import IntroScreen from "../widgets/intro/Intro";
import Signin from "../widgets/account/Signin";
import Signup from "../widgets/account/Signup";
import FinishSignup from "../widgets/account/ FinishSignup";
import Item from "../widgets/items/Item";
import Items from "../widgets/items/Items";
import AddMenuItem from "../widgets/items/newItem/AddMenuItem";
import AddRestaurant from "../widgets/items/newItem/AddRestaurant";
import Restaurant from "../widgets/items/Restaurant";

const Stack = createNativeStackNavigator();

export default function PublicRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{ title: "Intro", headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ title: "Sign to to your account", headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Create new account", headerShown: false }}
      />
      <Stack.Screen
        name="FinishSignup"
        component={FinishSignup}
        options={{ title: "Finish your signup", headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="Item"
        component={Item}
        options={{ title: "Nyaata", headerShown: false }}
      />
      <Stack.Screen
        name="Items"
        component={Items}
        options={{ title: "Nyaata", headerShown: false }}
      />

<Stack.Screen
        name="AddMenuItem"
        component={AddMenuItem}
        options={{ title: "Meenu haraa galmeessi", headerShown: false }}
      />

<Stack.Screen
        name="AddRestaurant"
        component={AddRestaurant}
        options={{ title: "Mana nyaataa haraa galmeessi", headerShown: false }}
      />
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{ title: "Mana nyaataa", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
