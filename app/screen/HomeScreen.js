import React, { useState ,useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { 
  StyleSheet, 
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  SafeAreaView 
  } from 'react-native';
import { NavigationContainer ,DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from "./Profile";
import Logout from "./Logout";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DrawerItems from "../constants/DrawerItems";
import { Header } from 'react-native-elements';
import CustomSidebarMenu from "../component/CustomSidebarMenu";
import { Container, Content, Icon, Body, Form } from 'native-base';
import AppNavigator from "../navigation/AppNavigator";
import axios from 'axios';
import { Avatar, Card} from 'react-native-paper';
import colors from "../config/colors";
//import routes from "../navigation/routes";
import { Button ,Divider } from 'react-native-elements';
//import ChangePasswordScreen from "./ChangePasswordScreen";
//import CounsellorScreen from "./CounsellorScreen";
//import DashboardScreen from "./DashboardScreen";
//import MyProfileScreen from "./MyProfileScreen";
//import PinScreen from "./PinScreen";
//import StudentsScreen from "./Student/StudentsScreen";

const Drawer = createDrawerNavigator();

export default function HomeScreen({navigation}) {
  const [shouldShow, setShouldShow] = useState(true);
  return (
      <>
      <Drawer.Navigator
      style={ styles.container}
       drawerType="slide"
       initialRouteName="Profile"
       screenOptions={{
        activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
         }}
         options={{headerShown: false}}
         drawerContent={props => <CustomSidebarMenu {...props} />} >
        {
         DrawerItems.map(drawer =>
          <Drawer.Screen
          style={ styles.container}
          options={{headerShown: false}}
           key={drawer.name}
           name={drawer.name}
           options={{
            headerShown:true,
            drawerIcon:({focused})=>
            drawer.iconType==='Material' ?
             <MaterialCommunityIcons
                  name={drawer.iconName}
                 size={24}
                color={focused ? "#005CB3" : "black"}
             />
            : drawer.iconType==='Feather' ?
           <Feather
               name={drawer.iconName}
                size={24}
                color={focused ? "#005CB3" : "black"}
              />
            : <FontAwesome5
              name={drawer.iconName}
              size={24}
              color={focused ? "#005CB3" : "black"}
             /> ,
             }}
            component={
              drawer.name==='Dashboard' ? DashboardScreen
              :drawer.name==='Profile' ? Profile
              : drawer.name==='Logout' ? Logout
                //  : drawer.name==='Counsellor' ? CounsellorScreen
                //  : drawer.name==='Pin' ? PinScreen
                  // : drawer.name==='ChangePassword' ? ChangePasswordScreen
                  // : drawer.name==='Chat' ? ChatScreen
                  : Profile
             }
            /> 
           )
       }
        </Drawer.Navigator>    
     </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 900

  }
});






         