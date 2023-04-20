import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Extra = () => {
  //Test
  return (
    <SafeAreaView>
    <ScrollView>
        <Text style={{fontSize: 50}}>Mathew Yeung was here</Text>        
        <Image style={{width: 400, height: 400}} source={require('../assets/mat.png')} />
        <Text style={{fontSize: 50}}>Muhtasim GOAT PM</Text>
        <Image style={{width: 400, height: 400}} source={require('../assets/muhtasim.png')} />
      </ScrollView>
    </SafeAreaView>
    
  );
};



export default Extra;