import React from 'react';
import { ImageBackground , StyleSheet,View, Text, Image} from 'react-native';
import AppButton from '../component/AppButton';
import Screens from "../component/Screens";

function WelcomeScreen({ navigation}) {
    return (
        <Screens>
         <ImageBackground 
   
         style ={styles.background}
         source={require("../assets/6.png")}>
        <View style={styles.buttonContainer}>
        {/* <AppButton title="Login" onPress={()=> navigation.navigate('Login')}></AppButton> */}
        <AppButton title="Signin" onPress={()=> navigation.navigate('SignIn')}></AppButton>
         </View>
         </ImageBackground>   
         </Screens>
    );
}
const styles = StyleSheet.create({
    background : {
        flex :1,
       justifyContent: 'flex-end',
       alignItems: 'center'
    },
    buttonContainer :{
    padding: 50,
    width: '100%'
    },
    tagLine : {
    fontSize : 25,
    fontWeight: "bold",
    padding: 20
    },
    registerButton : {
    width : '100%',
    height : 70,
    backgroundColor : '#4ecdc4'
    },
    logo : {
    width : 100,
    height : 100,
    }, 
    logoContainer:{
    position : 'absolute',
    alignItems: 'center',
    top : 70
    
}
})
export default WelcomeScreen;