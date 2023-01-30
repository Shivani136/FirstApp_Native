import React,{ useEffect } from 'react';
import { ImageBackground , StyleSheet,View, Text, Image} from 'react-native';
import AppButton from '../component/AppButton';
import Screens from "../component/Screens";

function WelcomeScreen({ navigation}) {

    useEffect(() => {
      setTimeout(() => {
       navigation.navigate('SignIn');
       }, 10000);
      }, [])

    return (
        // <Screens>
         <ImageBackground 
         style ={styles.background}
         source={require("../assets/6.png")}
         >
        </ImageBackground>   
        //  </Screens>
    );
}
const styles = StyleSheet.create({
    background : {
        flex :1,
       justifyContent: 'flex-end',
       alignItems: 'center'
    },
   })
export default WelcomeScreen;