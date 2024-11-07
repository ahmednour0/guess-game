import React from 'react';
import { StyleSheet, View,TextInput,Button, Text, Image,Dimensions,useWindowDimensions ,ScrollView} from 'react-native';
import Title from '../components/UI/Title';
import colors from '../constants/colors';
import PrimaryButtons from '../components/UI/PrimaryButtons';

const GameOverScreen = ({roundsNumber,userNumber,onStartNewGame}) => {
    const { width, height } = useWindowDimensions();
    console.log(width)
    let imagesize = 300
    if (width <411) {
         imagesize = 150

    }
    if (height <411) {
       imagesize = 80

    }
    const imagestyle ={
        width:imagesize,
        height:imagesize,
        borderRadius:imagesize/2
    }
    return (
        <ScrollView style={styles.screen}>
        <View style={styles.rootcontainer}>
                   
<Title>Game Over</Title>
<View style={[styles.imagecontainer,imagestyle]}>
<Image style={styles.image} source={require("../assets/images/success.png")}/>

</View>
<Text style={styles.summarytext}>Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the Number <Text style={styles.highlight}>{userNumber}</Text></Text>
        <PrimaryButtons onPress={onStartNewGame}>Start New Game</PrimaryButtons>
        </View></ScrollView>
    );
}
// const devicewidth =Dimensions.get("window").width

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    rootcontainer:{
flex:1,
padding:24,
justifyContent:'center',
alignItems :"center"
    },
    imagecontainer:{
        // borderRadius:devicewidth <380 ?75:150,
        // width:devicewidth <380 ?150:300,
        // height:devicewidth <380 ?150:300,
        borderWidth:4,
        borderColor:colors.primary800,
        overflow:"hidden",
        margin:35
    },
    image:{
        width:"100%",
        height:"100%",

    },
    summarytext:{
        fontFamily:"open-sans",
        fontSize:24,
        textAlign:"center",
        marginVertical:24
    },
    highlight:{
        fontFamily:"open-sans-bold",
        color:colors.primary600
    }
})

export default GameOverScreen;
