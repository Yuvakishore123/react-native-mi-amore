import React from "react";
import { View ,Text, StyleSheet} from "react-native";
import ProfilePicture from "../Profilepic";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = ({imageUri,name}) =>{
    return(
    <View style={styles.container}>
    <View style={styles.left}>
    <ProfilePicture uri={imageUri} size={40}/>
    <Text style={styles.text}> {name} </Text>
    <View style={styles.right}>
        <Icon name="more-vert" size={23} style={{marginLeft:230}}/>
    </View>
    </View>
    </View>
    );
}

export default Header;
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    left:{
        flexDirection:"row",
    },
    text:{
        alignSelf:"center",
        fontWeight:"bold",
        color:'#3c3c3c',

    },
    right:{
        flexDirection:"row",
        alignItems:"center",
    }

}


);

