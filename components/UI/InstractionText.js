import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import colors from '../../constants/colors';

const InstractionText = ({children,style}) => {
    return (
        <View>
            <Text style={[styles.instructionText,style]}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({  instructionText:{
    color:colors.accent500,
    fontSize:24,
fontFamily:"open-sans"
  },})

export default InstractionText;
