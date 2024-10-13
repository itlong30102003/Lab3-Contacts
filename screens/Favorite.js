import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { fetchContacts } from "../utils/utils/api";
import { ActivityIndicator,Text } from "react-native-paper";
import ContactThumbnail from "../component/ContactThumbnail";
const keyExtractor = ({phone})=> phone;
const Favorite =({navigation})=>{
    //state
    const [contact, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    //load data
    useEffect(()=>{
        fetchContacts()
        .then(
            contact=> {
                setContacts(contact);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e => {
                setLoading(false);
                setError(true);
            }
        )
    },[])
    const renderFavoriteThumbnail = ({ item }) =>{
        const { avatar } = item;
        console.log(avatar)
        return  (
            <ContactThumbnail
                avatar={avatar}
                onPress={() => navigation.navigate('Profile', {contact: item})}
            />
        );
    };

    const favotites = contact.filter(c => c.favorite)
    return(
        <View style={style.container}>
            {loading && <ActivityIndicator size="large"/>}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={favotites}
                    keyExtractor={keyExtractor}
                    numColumns={3}
                    contentContainerStyle={style.list}
                    renderItem={renderFavoriteThumbnail}
                />
            )}
        </View>
    );
}


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    },
    list: {
        alignItems: 'center',
    }
});


export default Favorite;