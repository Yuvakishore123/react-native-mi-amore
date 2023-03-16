import React from "react";
import { FlatList,View } from "react-native";
import Post from "../Post/Post";
import './styles';
import Story from "../Story/index";

const data = [
    {

    user:{
        imageUri:'https://pbs.twimg.com/profile_images/1453367235238453249/okXUilz8_400x400.jpg',
        name : 'Indranilbhuin'
    },
    imageUri:'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption:'In love with this city # instagram',
    likeCount:1234,
    postedAt:'6 mins ago',
},
{

    user:{
        imageUri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHjSEObFWsNxDx6rlLz65dslv4EOnKdK7NA&usqp=CAU',
        name : 'Raj reak'
    },
    imageUri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-sCzXCYT-E7kHiiGFU8pjmHhFvItwut50Q&usqp=CAU',
    caption:'Hola friends# instagram',
    likeCount:1234,
    postedAt:' 12 mins ago',
},
{

    user:{
        imageUri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kd-eaUS7GQai36M7Yze-z5t3yEFlQC5ia8XiT_LiHb6ib2fGQ5S_oS8UXfZHHufPW1c&usqp=CAU',
        name : 'Rohith '
    },
    imageUri:'https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg',
    caption:'Forever MSD # instagram',
    likeCount:4500,
    postedAt:' 2 hrs  ago',
},
{

    user:{
        imageUri:'https://hips.hearstapps.com/hmg-prod/images/landscape-sunset-view-of-morain-lake-and-mountain-royalty-free-image-1658765829.jpg',
        name : 'Asif Pathan'
    },
    imageUri:'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
    caption:' how are you friends# instagram',
    likeCount:124,
    postedAt:'30 mins ago',
},
{

    user:{
        imageUri:'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        name : 'Pavan Rocks'
    },
    imageUri:'https://samseesworld.com/wp-content/uploads/2020/12/beach-captions-for-instagram.jpg',
    caption:'In love with  me  # instagram',
    likeCount:112555,
    postedAt:'20 mins ago',
},
]

const Feed = ()=>{
    return(
    <View>
    <FlatList
    data={data}
    renderItem={({item}) => <Post post={item}/>}
    ListHeaderComponent={Story}
    /> 
    </View>
    );
};

export default Feed;