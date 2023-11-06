import { StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState, useCallback } from "react";
import Navbar from "../components/navbar";
import { useNavigation } from '@react-navigation/native';

const Polls = props => {
  // const navigation = useNavigation();
  const meetingCode = useState(props.passedMeetingCode);
  const [ userInputedCode, setUserInputedCode ] = useState(0); // placeholder
  const [ temp, setTemp ] = useState('');

  return (
    <View style={styles.container} >
      <TextInput
        placeholder="enter meeting code"
        keyboardType="numbers-and-punctuation"
        style={styles.codeInput}
        onChangeText={text => setUserInputedCode(parseInt(text))}
      />

      {(userInputedCode == meetingCode) && 
      <>
        <Text>Placeholder Question</Text>
        <TextInput
          style={styles.input}
          placeholder="Placeholder Answer"
        />
      </>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
  },
  codeInput: {
    marginBottom: 40
  }
  
});

export default Polls;
