import { StyleSheet, View} from "react-native";
import React, { useState } from "react";

const MeetingCodeButton = () => {
  const [meetingCode, setMeetingCode] = useState();
  const handleGenerateMeetingCode = () => {
    setMeetingCode(generateMeetingCode());
  }
  // hardcode as true for testing until sign-in code is done
  const admin = true;//props.priveleges;
  return (
    <View style={styles.container} >
      {admin && 
        <Button
          onPress={handleGenerateMeetingCode}
          title="Generate Meeting Code"
          color="#841584"
          accessibilityLabel="Button to Generate a Meeting Code"
        />
      }
    </View>
  );
};

const generateMeetingCode = () => {
  return Math.floor(Math.random() * 1000000);
}

const styles = StyleSheet.create({
  
});

export default MeetingCodeButton;
