import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Brother = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Image source={"../images/elise.png"} style={styles.icon} />
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#710000',
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: 10,
    },
    text: {
        color: '#E29900',
    },
    column: {
      justifyContent: 'center', 
      alignItems: 'center',
      flex: 1, 
      marginHorizontal: 5,
      
    },
    icon: {
        width: 80,
        height: 80,  
    },
  });

export default Brother;