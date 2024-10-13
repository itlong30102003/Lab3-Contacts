import { useEffect, useState } from "react"
import { fetchRandomContact } from "../utils/utils/api";
import { StyleSheet, View } from "react-native";
import ContactThumbnail from "../component/ContactThumbnail";
import DetailListItem from "../component/DetailListItem";
import colors from "../utils/utils/colors";

const Profile =({route})=>
{
    console.log(route);
    const {contact} = route.params;
    const { avatar, name, email, phone, cell} = contact;
   
    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone} />
            </View>
            <View style={styles.detailsSection}>
                <DetailListItem icon="mail" title="Email" subtitle={email} />
                <DetailListItem icon="phone" title="Work" subtitle={phone} />
                <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
        },
        avatarSection: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.blue,
        },
        detailsSection: {
            flex:1,
            backgroundColor: 'white',
        },
    }
);


export default Profile;