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
import { SocialIcon } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppButton from '../component/AppButton';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation}) {
  const auth = useAuth();
  const [ username ,setUsername]= useState('');
  const [ password ,setPassword]= useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const [isSelected, setSelection] = useState(false);

const handleSubmit = async ({ username, password }) => {
   // console.log(username,password)
    let formData = new FormData();    
  formData.append('username', username);   
  formData.append('password', password);

 //console.log(formData,">>>>>>>>>>",username,password)
 axios.post(`https://wpfurniture.mangoitsol.com/wp-json/api/v1/token`,formData)
      .then(response => {
          console.log(response.data, "sghths");
          navigation.navigate("Tab")
      })
      .catch(error => {
          console.log(error);
      });
   
  };

  return (
    <KeyboardAwareScrollView>
    <Screens style={styles.container}>
      <Image style={styles.logo} source={require("../assets/images.png")} />
     <Text style={styles.contain}>Login to Your Account</Text>

      <AppForm 
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
    
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid Username or Password" visible={loginFailed} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
        //   keyboardType="email-address"
          name="username"
          placeholder="Username"
          textContentType="username"
           />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry={true}
         textContentType="password"
        />

       <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
         />
          <Text style={styles.text}>Remember Me</Text>
        </View>

        <SubmitButton
          title="Sign in"
          onPress={() => navigation.navigate("Tab")}
        />
       
      </AppForm>
      <Text style={styles.forgot}>Forgot the Password ?</Text>

  <View style={{flexDirection: "row"}}>
<View style={styles.dividers}></View>
   <Text style={styles.continue }>or continue with </Text>
   <View style={styles.dividers}></View>
</View>
     
     <View style={{flexDirection: "row" ,justifyContent: "center",padding:20}}>
      <SocialIcon
        type='facebook'
      />
      <SocialIcon
        raised={false}
        type='google'
      />
       <SocialIcon
        raised={false}
        style={{backgroundColor:colors.black}}
        type='apple'
      />
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
  container: {
    padding: 10,
  },
  contain :{
    fontSize:30,
    fontWeight:"bold" ,
     justifyContent:"center",
     textAlign:"center",
     margin:15
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
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
      margin:15,
      textAlign:"left",
      justifyContent:"left",
      //paddingRight:5
    
     },
     dividers :{
      borderBottomWidth :1,
       borderBottomColor: colors.darkgray,
      width:100,
      margin:15,
      //marginRight:-20,
      textAlign:"right",
      justifyContent:"right",
  },
});
export default LoginScreen;
