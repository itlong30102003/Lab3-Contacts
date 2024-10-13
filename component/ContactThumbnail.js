import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from 'prop-types'; 
const ContactThumbnail =({name, phone,avatar,textColor, onPress})=>
{   
    const colorStyle = {
        color: textColor,
    };
    const ImageComponent = onPress ? TouchableOpacity : View;
    
    return (
        <View style={style.container}>
            <ImageComponent onPress={onPress} >
                <Image
                    style={style.avatar}
                    source={{
                        uri:avatar,
                    }} 
                />
            </ImageComponent>
            {name !=='' && <Text style={[style.name, colorStyle]}>{name}</Text>}
            {phone!=='' && (
                <View style={style.phoneSection}>
                    <Icon name='phone' size={16} style={{color: textColor}} />
                    <Text style={[style.phone, colorStyle]}>{phone}</Text>
                </View>
            )}
        </View>
    );
}
export default ContactThumbnail;

ContactThumbnail.propTypes ={
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};

ContactThumbnail.defaultProps = {
    name: '',
    phone: '',
    textColor: 'white',
    onPress:null,
};

const style = StyleSheet.create({
    container:{
        paddingVertical: 30,
        marginHorizontal:15,
        justifyContent:'center',
        alignItems:'center'
    },
    avatar: {
        width:90,
        height:90,
        borderRadius:45,
        borderColor:'white',
        borderWidth:2,
    },
    name:{
        fontSize: 20,
        marginTop: 24,
        marginBottom:2,
        fontWeight:'bold',
    },
    phoneSection: {
        flexDirection:'row',
        marginTop:4 ,
        alignItems: 'center',
        justifyContent:'center',
    },
    phone:{
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold'
    },
});