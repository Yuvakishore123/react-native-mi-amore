import React from 'react';
import { Image,StyleSheet,View } from 'react-native';

const ProfilePicture = ({uri,size=70}) =>{
    return(
    <View style={[styles.container,{width:size+6,height:size+6}]}>
        <Image style={[styles.Image,{width:size,height:size}]} source={{uri}}/>
      
    </View>

    );
};
export default ProfilePicture;
const styles = StyleSheet.create({
    Image:{
        height:80,
        width :80 ,
        borderRadius:40,
        borderWidth:1,
        borderColor:"#Ae22e0",
    },
    container:{
        padding:3,
        height:82,
        width :82 ,
        borderRadius:40,
        borderWidth:2,
        borderColor:"#fffff",

    }
})