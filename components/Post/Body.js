import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const Body = ({imageUri}) =>{
    return(
    <View>
    <Image source={{uri:imageUri}} style={styles.image}/>
    </View>
    );
};

export default Body;

const styles = StyleSheet.create({
        image:{
            width: Dimensions.get('window').width,
            height:Dimensions.get('window').width,
        }

});