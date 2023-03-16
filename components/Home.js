import React from "react";
import { View,Text,StatusBar ,SafeAreaView } from "react-native";
import ProfilePicture from "./Profilepic";

import Post from "./Post/Post";
import Feed from "./Feed/index";
const Home =()=>{
    return (
        <View>
            <StatusBar/>
            <SafeAreaView>
                <Text>
                Welcome 
            </Text>
             <Feed/>
            </SafeAreaView>
            
            
            
        </View>
       
    );
};
export default Home;