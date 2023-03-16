import React from "react";
import { Image, ImageBackground, Text,View } from 'react-native';
import { TextInput, TouchableOpacity,StyleSheet } from "react-native";
import Login from "./Login";
const Signup=(navigation)=>{
    return(
        <View style={styles.container}>
           <ImageBackground style={styles.img} source={require('../Assets/Miamor.png')} />
            <TextInput style={styles.textbox}>
                Enter UserName
            </TextInput>
            <TextInput style={styles.textbox}>
                Enter Password
            </TextInput>
            <TouchableOpacity style={styles.btn} onPress={navigation.goBack} >
             <Text style={styles.text}> go back to login </Text>   
            </TouchableOpacity>
        </View>
    );
};
export default Signup;

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
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
    borderRadius:10,
    backgroundColor:"#DD0959",
  
    alignItems:"center",
    height:49,
  },
  text:{
    color:"#FCFCFC",
  },
  img:{
    width:"100%",
    height:"75%",
  }

});
