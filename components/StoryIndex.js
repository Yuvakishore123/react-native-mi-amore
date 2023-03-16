import React from "react";
import { Text, View } from "react-native";
import ProfilePicture from "./Profilepic";




const StoryIndex = ({imageUri,name}) =>{
    return(
        <View>
            <ProfilePicture uri={imageUri}/>
            <Text>{name}</Text>
        </View>
    );
} ;

export default StoryIndex;