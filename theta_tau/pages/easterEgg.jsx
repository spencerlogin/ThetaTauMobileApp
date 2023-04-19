import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Extra = () => {
  //Test
  return (
    <SafeAreaView>
        <Text style={{fontSize: 50}}>Mathew Yeung was here</Text>        
        <Text style={{fontSize: 10}}>and Muhtasim</Text>
        <Image style={{width: 400, height: 400}} source={require('../assets/mat.png')} />
    </SafeAreaView>
  );
};



export default Extra;