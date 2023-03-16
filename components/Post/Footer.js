import React, { useEffect, useState } from "react";
import { View,Text, Touchable, TouchableWithoutFeedback, Alert } from "react-native";
import { StyleSheet } from "react-native";
import Adicon from "react-native-vector-icons/AntDesign";
import Add from "react-native-vector-icons/Fontisto";
import Addp from "react-native-vector-icons/Ionicons";
import Bookm from "react-native-vector-icons/FontAwesome";
const Footer = ({likesCount,likesCountprop,caption,postedAt}) =>{

    const[isLiked,setIsliked]=useState(false);
    const onLikepressed=() =>{
        setIsliked(!isLiked);
        const amount =isLiked? 1 : -1;
        setLikescount(likescount+amount);
    };
    const[likescount,setLikescount]=useState(0);
    useEffect(  ()=>{
    setLikescount(likesCountprop)
    },[] )

    return(
    <View style={styles.container}>
    <View style={styles.icon} >
    <View style={styles.left}>
    <TouchableWithoutFeedback onPress={onLikepressed}>
        {isLiked?
      <Adicon name="heart" size={25} color={"#D02F1C"} />
       : <Adicon name="hearto" size={25} color={"#545454"} />
        }
    </TouchableWithoutFeedback>
    <Add name="comment" size={20} />
    <Addp name="paper-plane-outline" color={"#545454"} size={25} />
    </View>
    <Bookm name="bookmark-o" size={25}/>
    </View>
    <Text style={styles.likes}>{likesCount} likes </Text>
    <Text style={styles.caption}>{caption} </Text>
    <Text style={styles.postedAt}>{postedAt}  </Text>
    </View>
    );
};

export default Footer;

const styles =StyleSheet.create({
    container:{
        margin:5,
    },
    likes:{
        fontWeight:'bold',
        margin:3,
    },
    caption:{
            margin:3,
    },
    postedAt:{
        color:'#8c8c8c',
        margin:3,
    },
    left:{
        flexDirection:"row",
        width:100,
        justifyContent:'space-between',
    },
    icon:{
        flexDirection:"row",
        justifyContent:'space-between',
        padding:10,
    },
})