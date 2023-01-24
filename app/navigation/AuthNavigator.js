import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screen/LoginScreen";
import SignInScreen from "../screen/SignInScreen";
//import RegisterScreen from "../screen/RegisterScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import HomeScreen from "../screen/HomeScreen";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
     <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      //  options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      // options={{ headerShown: false }}
      component={LoginScreen}
    />
    <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen}/>
    <Stack.Screen name="Tab" options={{ headerShown: false }} component={AppNavigator}/>
    </Stack.Navigator>
);

export default AuthNavigator;
