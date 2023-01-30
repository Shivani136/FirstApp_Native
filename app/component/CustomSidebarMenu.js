
import React, { useState, useEffect ,useRef,useContext} from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from "./Icon";
import colors from "../config/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from '../auth/useAuth';
import AuthNavigator from "../navigation/AuthNavigator";
import { Entypo ,FontAwesome} from '@expo/vector-icons';
import axios from 'axios';


const CustomSidebarMenu = (props,{ navigation }) => {
  const [data, setData] = useState();
  const [list, setList] = useState('');
  const { user, setUser } = useContext(AuthContext);

  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  useEffect(() => {
    getUser();
    }, []);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJmdXJuaXR1cmUiLCJpYXQiOjE2NzQ0NzUyNDgsImV4cCI6MTgzMjE1NTI0OH0.VsL3DEtjmZhKUwK83l4i1Q4cOKNBNkbtKTlDwGLOTX4'
    const getUser = async() => {
      await axios.get('https://wpfurniture.mangoitsol.com/wp-json/wp/v2/users/5',{
      headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
   
      }
      }).then((response)=>{
    //console.log(response.data,"<<<<<<<<<")
    setList(response.data,"<<<<<<<<<")
          }).catch((error)=>{
      console.log(error,">>>>>>")
          })
          
          // .then((response) => { setList(response.data)});
          }
 return (
    <SafeAreaView style={{flex: 1}}>
   <View style={styles.container}>
      <Image source={require("../assets/user.png")} style={{position:'relative'}}/>
      <View  style={styles.camera}>
      <Entypo name="edit" size={16} color="white"/>
      </View>
   
   <View style={{margin: 10}}>
     <Text style={{fontSize:24,fontWeight:"bold",paddingBottom:10}}>{list.name}</Text> 
    <Text style={[styles.number]}>1234567890</Text> 
    {/* <Text style={[styles.number,]}>{list.acf.phone}</Text>  */}
   <View style={styles.divider}></View>
   </View>
                 
    
      </View>
      {/* <Image
       //source={require("../assets/flower.jpg")}
        source={{uri: BASE_PATH + proileImage}}
      style={styles.sideMenuProfileIcon}
      /> */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
       </DrawerContentScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'cover',
    width: 300,
    height: 40,
    borderRadius: 100 / 2,
    alignSelf: 'center',
   
  },
  container: {
    paddingTop: 20,
    marginLeft:70,
    // backgroundColor:"red",
    // width:350
   },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: "bold",
    padding:10,
    //activeTintColor: '#e91e63', 
    backgroundColor: "lightblue"
  },
  camera:{
    position:'absolute',
    marginTop:90,
    marginLeft:85,
    backgroundColor: "black", 
    width: 25, 
    height:25,
    borderRadius:"5%",
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   overFlow:"hidden"
  },
number:{
  fontSize:14,
  color:colors.black,
   
},
divider :{
    borderBottomWidth :1,
     borderBottomColor: colors.darkgray,
    width:200,
    height:20,
    textAlign:"left",
    justifyContent:"left",
    paddingRight:5
   // transform:translate(0%, 0%)   
   },
  
});

export default CustomSidebarMenu;