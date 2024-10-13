import { StyleSheet, View } from "react-native";
import DetailListItem from "../component/DetailListItem";

const Option =()=>{
    return(
        <View style={style.container}>
            <DetailListItem title="Update Profile"/>
            <DetailListItem title="Change Language"/>
            <DetailListItem title="Sign Out"/>
        </View>
    );
}


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
});

export default Option;