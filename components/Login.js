import React, { useState } from "react";
import { View,Text, TextInput,  TouchableOpacity,StyleSheet,Alert, Image } from "react-native";
import Home from "./Home";
import Icons from "react-native-vector-icons/MaterialIcons";
const Login = ({navigation})=> {
    const [username,setUsername]=useState("");
    const [password , setPassword]= useState("");

  const Onhandle=()=>{
     if ( username != "yuva" || password !="kishore"){
      Alert.alert("welcome");
      navigation.navigate("Home");
     }
     else{
      Alert.alert("Enter valid credentials ");
     }
  }

    return (

        <View style={styles.container}>
          <Image style={styles.img} source={require('../Assets/Miamor.png')}/>
            <TextInput style={styles.textbox}>
                username
            </TextInput>
            <TextInput style={styles.textbox}>
                password
            </TextInput>
            <TouchableOpacity style={styles.btn}  onPress={Onhandle}>
               <Text style={styles.text}> login </Text> 
               <Icons name="arrow-right"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Signup")}>
               <Text style={styles.text}> Signup</Text> 
            </TouchableOpacity>
        </View>
    );
};
export default Login;
const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    padding:"auto",
  },
  textbox:{
    borderWidth:5,
    height:40,
    width:250,
    borderColor:"#DB0AF0",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:10,
    borderRadius:6,
  },
  btn:{
    borderColor:'white',
    borderWidth:5,
    width:100,
    justifyContent:"center",
    marginBottom:10,
    borderRadius:10,
    backgroundColor:"#DD0959",
  
    alignItems:"center",
    height:49,
  },
  text:{
    color:"#FCFCFC",
  },
  img:{
    height:50,
    width: 500,
    flex:0.6,

  },

});
