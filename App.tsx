import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Login from './components/Login';
import Home from './components/Home';
import DiscoveryScreen from './Screens/Discovery';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontone from 'react-native-vector-icons/Foundation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './components/Signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostScreen from './Screens/PostScreen';
import NotificationScreen from './Screens/Notifications';
import ProfileScreen from './Screens/Profile';
import Feath from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
function LoginStack(){
  return(
  <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
 </Stack.Navigator>
  );
}
 
function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
           screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
              return <Fontone name="home" size={size} color={"#F00C77"} />;
            } 
            if (route.name === 'Discovery') {
              return <Feath name="search" size={size} color={"#F00C77"} />;
            } 
            if (route.name === 'Post') {
              return <Feath name="plus-square" size={size} color={"#F00C77"} />;
            } 
            if (route.name === 'Notifications') {
              return <Feath name="bell" size={size} color={"#F00C77"} />;
            }
            if (route.name === 'Profile') {
              return <Ionicons name="person" size={size} color={"#F00C77"} />;
            }if (route.name === '.') {
              return <Ionicons name="arrow-back" size={size} color={"#F00C77"} />;
            }
            // if (route.name === 'Settings') {
            //   iconName = 
            // }

            // // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      
      
      
      >
        <Tab.Screen name="." component={LoginStack}/>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
