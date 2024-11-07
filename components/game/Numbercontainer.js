import React from 'react';
import { StyleSheet, View, Text,Dimensions } from 'react-native';
import colors from '../../constants/colors';

const Numbercontainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}
const devicewidth =Dimensions.get("window").width


const styles = StyleSheet.create({
    container:{
borderWidth:4,
borderColor:colors.accent500,
marginTop:25,
borderRadius:8,
padding:devicewidth <380 ?12:23,
alignItems:"center",
justifyContent:"center"
    },
    numberText:{
color:colors.accent500,
fontSize:devicewidth < 380 ?28 :36,
fontFamily:"open-sans-bold"
    },

})
export default Numbercontainer;
