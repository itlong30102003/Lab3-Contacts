import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import colors from "../utils/utils/colors";
import PropTypes from "prop-types";

const ContactListItem =(props)=>{
    const {avatar,name,phone,onPress}=props
    console.log(avatar)
    return(
        <TouchableHighlight
            underlayColor={colors.grey}
            style={style.container}
            onPress={onPress}
        >
            <View style={style.contactInfo}>
                <Image
                    style={style.avatar}
                    source={{
                        uri:avatar,
                    }} 
                />

                <View style={style.details}>
                    <Text style={style.title}>{name}</Text>
                    <Text style={style.subtitle}>{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}
export default ContactListItem;

ContactListItem.propTypes ={
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};

const style = StyleSheet.create({
    container:{
      paddingLeft: 24,
    },
    contactInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        paddingTop:16,
        paddingBottom:16,
        paddingRight:24,
        borderBottomColor:colors.grey,
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    avatar:{
        borderRadius: 22,
        width: 44,
        height: 44,
    },
    details: {
        justifyContent:'center',
        flex:1,
        marginLeft:20,
    },
    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        color: colors.blue,
        fontSize:15,
        marginTop: 4,
    }
})