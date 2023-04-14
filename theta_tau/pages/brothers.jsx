import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions } from 'react-native';
import Navbar from "../components/navbar"
import Brother from "../components/brother"

const Brothers = () => {

  return (
    <SafeAreaView>
        <Text style={styles.title}>E-BOARD</Text>
        <Brother name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
        
    <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 50,
    color: '#710000',
    backgroundColor: '#E29900',
    fontWeight: 'bold',
    fontSize: 20, 
    textAlign: 'center',
    paddingVertical: 20,
    width: Dimensions.get('window').width,
  }
});

export default Brothers;
