import React from 'react';
import { StyleSheet, View,Dimensions } from 'react-native';
import colors from '../../constants/colors';

const Card = ({children}) => {
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
}
const devicewidth =Dimensions.get("window").width

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent:"center",
        alignItems: "center",
        padding: 16,
        marginTop: devicewidth <380 ?18:36,
        backgroundColor: colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 50,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})

export default Card;
