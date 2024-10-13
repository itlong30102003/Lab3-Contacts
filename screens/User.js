import colors from "../utils/utils/colors";
import { useEffect, useState } from "react";
import { fetchUserContact } from "../utils/utils/api";
import ContactThumbnail from "../component/ContactThumbnail";
import { ActivityIndicator, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";


const User = ()=>
{

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    //Load data
    useEffect(()=>{
        fetchUserContact()
        .then(
            users => {
                setUser(users);
                
                setError(false);

                setLoading(false);
            }
        )
        .catch(
            error => {
                setLoading(false);
                setError(true);
            }
        )
    })
   

    const { avatar , name , phone } = user;
    return(
        <View style={style.container}>
            {loading && <ActivityIndicator size="large"/>}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
               <ContactThumbnail avatar ={avatar} name={name} phone={phone}/> 
            )}
        </View>
    );
}


const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.blue,
    }
});

export default User;
