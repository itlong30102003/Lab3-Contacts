import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { fetchContacts } from "../utils/utils/api";
import ContactListItem from "../component/ContactsListItem";
import {fetchContactsLoading, fetchContactsSuccess, fetchContactsError} from '../store';
import { useDispatch, useSelector } from 'react-redux';
const keyExtractor = ({phone})=> phone
const Contact  =({navigation})=>{
    //state
    const [contacts,setContacts] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false) 
    //load data
    useEffect(()=>{
        fetchContacts()
            .then( 
            contacts => {
                setContacts(contacts)
                setLoading(false)
                setError(false)
            }
        )
        .catch(
            e =>{
                console.log(e)
                setLoading(false)
                setError(true)
            }
        )
    }, [])
    //sort
    const contactsSorted = contacts.sort((a,b) => a.name.localeCompare(b.name));
    const renderContact = ({item})=>{
        const {avatar,name,phone} = item
        return(
            <ContactListItem 
                avatar={avatar}
                name={name}
                phone={phone}
                onPress={() => navigation.navigate("Profile",{ contact: item })}
            />
        )
    };
    return(
        <View style={style.container}>
            {loading && <ActivityIndicator color="blue" size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={contactsSorted}
                    keyExtractor={keyExtractor}
                    renderItem={renderContact}
                />
            )}
        </View>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
    },
});

export default Contact;