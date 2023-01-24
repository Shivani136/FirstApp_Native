import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput,Text } from 'react-native';
import Screens from '../component/Screens';

export default function Texts() {
const [firstName, setFirstName] = useState('');

    return (

      <Screens style={styles.container}>
      <Text>{firstName}</Text>
      <TextInput placeholder ="this is text" 
     // clearButtonMode = "always" // working in ios application
      // keyboardType = "numeric" // used for numeric value
      // maxLength = {5} // for validation
      // secureTextEntry = { true} // for password field
      onChangeText={(text) => setFirstName(text)}
       style = {{
        // paddingTop : 10,
        borderBottomColor : '#ccc',
        borderBottomWidth : 1
      }}/>
     
      </Screens>
    );
  }
  
 