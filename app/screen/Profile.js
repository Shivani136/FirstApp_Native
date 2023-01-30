import React, { useState, useEffect ,useRef} from "react";
import { Text,
   SafeAreaView,
   View,
   StyleSheet,
   StatusBar ,
   ScrollView,
   TouchableOpacity,
   Image, 
   Alert,
   //DatePicker
  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Card } from 'react-native-paper';
import {  TextInput, IconButton } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from "../config/colors";
import DatePicker from 'react-native-datepicker';
//import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import PhoneInput from 'react-native-phone-number-input';
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../component/forms";
import * as Yup from "yup";
import AppButton from '../component/AppButton';
import Screens from "../component/Screens";
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Entypo ,FontAwesome} from '@expo/vector-icons';
import AppTextInput from "../component/AppTextInput";
import axios from 'axios';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  first_name: Yup.string().required().min(4).label("FirstName"),
  date: Yup.string().required().label("Date"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(10).label("Phone"),
  //gender: Yup.string().required().label("Gender"),
});

export default function Profile({width='90%', navigation}) {
  const [data, setData] = useState();
  const [list, setList] = useState([]);
  const [text, onChangeText] = useState('');
  const [name, setName] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [focusedInput, setFocus] = useState(null);
  //console.log(date);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]);

 const phoneInput = useRef(null);
 const getPhoneNumber = () => {
    Alert.alert(phone);
  };

//const handleSubmit = async ({ name,first_name,email,date,phone,gender }) => {
  function Update() {
 //console.log("result")
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJmdXJuaXR1cmUiLCJpYXQiOjE2NzQ0NzUyNDgsImV4cCI6MTgzMjE1NTI0OH0.VsL3DEtjmZhKUwK83l4i1Q4cOKNBNkbtKTlDwGLOTX4'
      let formData = new FormData();
      let acf = { 
       phone: phone, gender: value, date: date
      } 
      let acfs= {
        acf
      }
   //   console.log('>>>>>>>>>>@@@@@@@@@@', name, first_name)
      formData.append({'name': name}); 
      formData.append({'first_name' : first_name});
      formData.append({'email' : email});
      formData.append('date', acf.date);  
      formData.append('phone', acf.phone);   
      formData.append('gender', value);
      const config = {     
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}` 
          }
      }
      console.log(formData,"<<<<<<<<")
     axios.post(`https://wpfurniture.mangoitsol.com/wp-json/wp/v2/users/5`,{formData} ,config)
       .then(response => {
        console.log(response.data, "??????????");
          // navigation.navigate("Login")
       })
       .catch(error => {
        alert("An error has occurred");
           console.log(error);
       });
      }

      
      const onChangeNameHandler = (name) => {
        setName(name);
      };
      const onChangeFirstNameHandler = (first_name) => {
        setFirst_name(first_name);
      };
      const onChangeEmailHandler = (email) => {
        setEmail(email);
      };
      const onChangeGenderHandler = (value) => {
        setValue(value);
      };
    
   return (
     <>
      {/* <KeyboardAwareScrollView> */}
      <SafeAreaView>
   
     <View style={{  backgroundColor: colors.white}}>
     {/* <Text style={{flex: 1,fontSize:20,padding:10, textAlign: "left", marginLeft: 30,fontWeight: "bold"}}>Fill Your Profile</Text> */}
     <View style={styles.container}>

      <Image source={require("../assets/user.png")} style={{position:'relative'}}/>
      <View  style={styles.camera}>
      <Entypo name="edit" size={16} color="white"/>
      </View>
       </View>

       <View style={{marginLeft:20}}>
      <AppForm 
       initialValues={{name: " ", first_name: " " ,date: "",email: " ", phone: "", gender : ""}}
       style={[styles.form ,{width}]}
       validationSchema={validationSchema}
      // onSubmit={handleSubmit}
       onSubmit={Update}
       >
        <AppTextInput 
         autoCapitalize="none"
         autoCorrect={false}
         name="name"
         value={name}
         onChangeText={onChangeNameHandler}
         // onChange={(e) => { setName(e.target.value) }}
          placeholder="Andrew Ainsley"
          textContentType="name"
         /> 
         <AppTextInput 
         autoCapitalize="none"
          autoCorrect={false}
          name="first_name"
          value={first_name}
          onChangeText={onChangeFirstNameHandler}
          placeholder="Andrew"
          textContentType="first_name"
         /> 
    <View style={{ marginTop:15,marginBottom:15,}}> 
    <DatePicker
    style={styles.datePickerStyle}
    date={date}
    mode="date"
    placeholder="select date"
    format="DD/MM/YYYY"
    minDate="01-01-1900"
    maxDate="01-12-2023"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    customStyles={{
      dateIcon: {
      position: 'absolute',
        right: -5,
        alignItems: "flex-end",
        top: 4,
      marginLeft: 0,
      },
      dateInput: {
       //borderColor : "gray",
        alignItems: "flex-start",
        height:50,
        borderRadius:10,
        backgroundColor:colors.grayshade,
        //width:300
         },
        placeholderText: {
        fontSize: 14,
         },
       dateText: {
       fontSize: 14,
       color: colors.black,
       margin:10,
        }
     }}
    onDateChange={(date) => setDate(date)}
  />

</View>
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      name="email"
     style={{margin:13, borderRadius:20 ,marginLeft:-2, backgroundColor:colors.grayshade,}}
     placeholder="andrew@yourdomain.com"
     textContentType="email"
     keyboardType="email-address"
     value={email}
     onChangeText={onChangeEmailHandler}
    trailing={props => (
    <IconButton icon={props => <Icon name="email" {...props} />} {...props} />
     )}
   />
     <PhoneInput
        ref={phoneInput}
        defaultValue={phone}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        value={phone}
        placeholder="+1 1111467378399"
        containerStyle={styles.phoneNumberView}
        textContainerStyle={{ paddingVertical: 0 }}
        onChangeFormattedText={text => {
        setPhone(text);
        }}
      />

    {/* <TouchableOpacity  style={styles.button} onPress={() => getPhoneNumber()}>
     <Text style={styles.buttonText}>Get Phone Number</Text>
      </TouchableOpacity> */}

       
         
<View style={{ marginTop:20,marginBottom:15, margin:10}}> 
<DropDownPicker
 style={{backgroundColor:colors.grayshade}}
      open={open}
      value={value}
       items={items}
       setOpen={setOpen}
       setValue={setValue}
       setItems={setItems}
      // onSelectChange={onChangeGenderHandler}
     />
    </View>
   <View style={{paddingTop:5,}}>

   {/* <SubmitButton
      title="Continues"
      //onPress={()=>Update()}
       onPress={() => navigation.navigate("Login")}
      /> */}
    <AppButton onPress={()=>Update()} title="Update"></AppButton>   
    </View>
     </AppForm>
     
    </View>
    </View>
    
    </SafeAreaView>
    {/* </KeyboardAwareScrollView> */}
    </>
       );
     }
 
const styles = StyleSheet.create({
   container: {
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft:140,
      //justifyContent:"center",
      //alignItems:"center"
      },
    containers : {
      paddingTop : 20,
      borderRadius :10,
      borderWidth: 1,
      borderColor: colors.gray,
      backgroundColor:"#FFFFFF",
      flexDirection : 'row',
      padding: 15,
      marginVertical : 10,
      marginHorizontal: 0,
     // marginRight : 10 
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
  text:{
    width:"100%", 
    marginLeft:40,
  },
  contain : {
    paddingBottom:8,
    fontSize: 18,
    fontWeight: 'bold',
    color : colors.blue,
   },
   input: {
    height: 45,
    //margin: 12,
    borderWidth: 1,
    borderRadius:0,
    padding: 10,
    top:20,
    right:10,
    //color:"£FFFFFF",
    backgroundColor:"#FFFFFF"
  },
  form : {
    paddingTop : 20,
    borderRadius :10,
    borderWidth: 1,
    borderColor: colors.gray,
    flexDirection : 'row',
    padding: 15,
    marginVertical : 10,
  },
  datePickerStyle: {
     width: 350,
  },
  phoneNumberView: {
    width: '95%',
    height: 50,
    backgroundColor: colors.grayshade,
    top:5,
    bottom:10
  },
 
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: '80%',
    padding: 8,
    backgroundColor: '#00B8D4',
  },
 
  buttonText:{
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
})