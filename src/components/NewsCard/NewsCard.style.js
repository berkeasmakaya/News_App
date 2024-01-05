import { StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:10,
        margin:15,
    },
    inner_container:{
        padding:20,
    },
    image:{
        height:Dimensions.get('window').height/4,
        
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
    },
    description:{
        marginTop:5,
    },
    author:{
        fontStyle:'italic',
        textAlign:'right',
        marginTop:10,
        fontWeight:'bold',
    }
})