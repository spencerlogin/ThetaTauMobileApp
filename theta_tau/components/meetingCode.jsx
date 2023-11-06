import { StyleSheet, View, Button, Text, Alert } from "react-native";
import React, { useState } from "react";
import { A } from "@expo/html-elements";

const MeetingCodeButton = props => {
  const [meetingCode, setMeetingCode] = useState(999999);
  
  const generateMeetingCode = () => {
    const code = Math.floor(Math.random() * 1000000)
    return code;
  }

  const handleGenerateMeetingCode = () => {
    setMeetingCode(generateMeetingCode());
    // props.updatePollsCode(meetingCode);
  }
  // hardcode as true for testing until sign-in code is done
  const admin = true;//props.priveleges;
  return (
    <View style={styles.container} >
      {admin && 
      <>
        <Button
          onPress={handleGenerateMeetingCode}
          title="Generate Meeting Code"
          color="#841584"
          accessibilityLabel="Button to Generate a Meeting Code"
        />
        <Text>Meeting Code: {meetingCode}</Text>
      </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default MeetingCodeButton;
