import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:24,
       
        color:"white",
        textAlign:'center',
        borderWidth:3,
        borderColor:"white",
        padding:12,
   fontFamily:"open-sans-bold",
   maxWidth:"80%",
   width:300

    }
})

export default Title;
