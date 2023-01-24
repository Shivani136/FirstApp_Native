import React, { useState } from "react";
import { StyleSheet, Image,View ,Text} from "react-native";
import Screens from "../component/Screens";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../component/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import colors from '../config/colors';
import CheckBox from 'expo-checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { SocialIcon } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppButton from '../component/AppButton';


function SignInScreen({ navigation}) {
return (
    <KeyboardAwareScrollView>
    <Screens>
      <Image style={styles.logo} source={require("../assets/girl.png")} />
     <Text style={styles.contain}>Let's you in</Text>
<View style={{ margin:15}}>

<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>

<SocialIcon
  title='Some Google Message'
  button
  type='google'
/>
<SocialIcon
  title='Some Apple Message'
  button
  style={{backgroundColor : colors.black, }}
  type='apple'
/>

<View style={{flexDirection: "row"}}>
<View style={styles.dividers}></View>
   <Text style={styles.continue }>or</Text>
   <View style={styles.dividers}></View>
</View>
 </View>   
 <View  style={{ margin:15}}>
 <AppButton 
     onPress={() => navigation.navigate("Login")}
     title="Sign in With Password"></AppButton>  
 </View>


    <View style={{flexDirection: "row"}}>
   <Text style={styles.account}>Don't have an account ?</Text>
   <Text style={styles.signup}>Sign Up</Text>
   </View>
    </Screens>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  
  contain :{
    fontSize:45,
    //fontWeight:"bold" ,
     justifyContent:"center",
     textAlign:"center",
     paddingBottom:10,
     margin:15
  },
  logo: {
    width: 220,
    height: 180,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 40
  },
  checkboxContainer :{
    marginTop:10, 
    marginBottom:20,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent:"center"
  },
  checkbox: {
    borderRadius:6,
    alignSelf: "center",
    justifyContent:"center",
    borderWidth: 3
  },
  text : {
    fontSize: 16,
    color : colors.darkgray,
    margin: 8,
    },
    forgot: {
      fontSize:16 ,
       justifyContent:"center",
       textAlign:"center",
       margin:10,
       color: colors.black
    },
    continue :{
      fontSize:16 , 
      justifyContent:"center",
      textAlign:"center",
      margin:15,
      top:10,
      paddingTop:0,
      marginRight:-8,
      marginLeft:-8,
      color: colors.darkgray
    },
    account : {
      fontSize:16 ,
       justifyContent:"center",
       textAlign:"center",
       margin:15,
       color: colors.gray, 
       marginLeft:50,
       marginRight:-10
    },
    signup:{
      fontSize:16 ,
      margin:15,
      color: colors.black ,
      Right:10
    },
    divider :{
      borderBottomWidth :1,
       borderBottomColor: colors.darkgray,
      width:100,
      height:0,
      margin:10,
      textAlign:"left",
      justifyContent:"left",
      //paddingRight:5
    
     },
     dividers :{
      borderBottomWidth :1,
       borderBottomColor: colors.darkgray,
      width:150,
      margin:10,
      //marginRight:-20,
      textAlign:"right",
      justifyContent:"right",
 
    
     },
});
export default SignInScreen;
