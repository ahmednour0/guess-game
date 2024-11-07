import React from 'react';
import { StyleSheet, View,Text ,Pressable, Button} from 'react-native';
import Colors from "../../constants/colors" 
const PrimaryButtons = ({children,onPress}) => {
    const pressable = (params) => {
      console.log("pressable")
      
    }
    
    return (
        <View style={styles.outercontainer}>
                <Pressable style={
                    ({pressed})=>pressed?[styles.innercontainer,styles.pressed
    ]:styles.innercontainer} onPress={onPress} android_ripple={{color:Colors.primary600}}>

            <Text style={styles.buttontext}>{children}</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    outercontainer:{
        borderRadius:28,
        margin:4,
        overflow:"hidden",

       
    },
    innercontainer:{
        backgroundColor:Colors.primary500,

paddingVertical:8,
paddingHorizontal:16,
elevation:2,
margin:4
    },
    buttontext:{
        color:"white",
        textAlign:"center"
    },
    pressedd:{
        opacity:0.75
    }
})

export default PrimaryButtons;
