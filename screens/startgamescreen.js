import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  useWindowDimensions,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButtons from "../components/UI/PrimaryButtons";
import colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstractionText from "../components/UI/InstractionText";

const StartGameScreen = ({ pickednumber }) => {
  const [enterdNunber, setenterdNunber] = useState("");
  const { width, height } = useWindowDimensions();
  const numberhandler = (val) => {
    setenterdNunber(val);
  };
  const resetinput = (params) => {
    setenterdNunber("");
  };

  const confirm = () => {
    var chossenumber = parseInt(enterdNunber);

    if (isNaN(chossenumber) || chossenumber <= 0 || chossenumber > 99) {
      Alert.alert("invalid Number", "", [
        { text: "okay", style: "destructive", onPress: resetinput },
      ]);
      return;
    }
    pickednumber(chossenumber);
  };
  const margintopdistance = height < 390 ? 30 : 100;
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={[styles.rootcontainer, { marginTop: margintopdistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstractionText> Enter Number</InstractionText>
            <TextInput
              style={styles.NumberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enterdNunber}
              onChangeText={numberhandler}
            />

            <View style={styles.btns}>
              <View style={styles.btn}>
                <PrimaryButtons onPress={confirm}>Confirm </PrimaryButtons>
              </View>
              <View style={styles.btn}>
                <PrimaryButtons onPress={resetinput}>Reset </PrimaryButtons>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const deviceheight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootcontainer: {
    flex: 1,
    // marginTop:deviceheight < 380 ?  30 : 100,
    alignItems: "center",
  },

  intractiontext: {
    color: colors.accent500,
    fontSize: 24,
  },
  NumberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 3,
    color: colors.accent500,
    // fontWeight: "bold",
    textAlign: "center",
  },
  btns: {
    flexDirection: "row",
  },
  btn: {
    flex: 1,
  },
});

export default StartGameScreen;
