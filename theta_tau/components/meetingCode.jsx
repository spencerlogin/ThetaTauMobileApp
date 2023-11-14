import { StyleSheet, View, Button, Text} from "react-native";
import React, { useState } from "react";

const MeetingCodeButton = props => {
  const [meetingCode, setMeetingCode] = useState(999999);
  
  const generateMeetingCode = () => {
    const code = Math.floor(Math.random() * 1000000)
    return code;
  }

  const handleGenerateMeetingCode = () => {
    const code = generateMeetingCode();
    setMeetingCode(code);
    props.updatePollsCode(code);
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
