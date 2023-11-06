import { StyleSheet, Text, View, Image, Pressable, Dimensions, TouchableOpacity, ScrollView} from "react-native";
import React, { useState, useCallback } from "react";
import Navbar from "../components/navbar";
import Extra from "../components/extra"
import { useNavigation } from '@react-navigation/native';

const Polls = props => {
  const navigation = useNavigation();
  const {meetingCode, setMeetingCode} = useState(props.meetingCode);
  const userInputedCode = 65615;
  const userInputedCorrectCode = false;
  return (
    <View style={styles.container} >
      {/* some way for users to enter the meeting Code */}
      {/* conditional to display the form only if the user inputted the correct meeting code */}
      {/* form */}
      {userInputedCorrectCode && <></>}
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    marginBottom: 100,
    fontWeight: 'bold',
  },
  row: {
    height: 50,
    backgroundColor: '#710000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 30,
    width: Dimensions.get('window').width,
  },
  purpose: { 
    paddingVertical: 12, 
    paddingHorizontal: 25, 
    marginTop: 20, 
    fontSize: 20, 
    color: "#E29900", 
    backgroundColor: "#501315",
    textAlign: 'center',
  },
  aboutMe: { 
    color: "#710000", 
    textAlign: 'center',
    fontSize: 20,
  },
  dropdownRow: { 
    backgroundColor: "#B99B73",
    marginTop: 30, 
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '100%',
    paddingVertical: 12,
  },
  dropdownRow2: {
    flex: 1,
  },
  dropdownContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#501315",
    width: '100%',
  },
  dropdownText: {
    color: "#E29900", 
    paddingVertical: 20,
  },
  image: {
    height: 68,
    width: 40,
  },
});

export default Homepage;
