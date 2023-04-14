import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Navbar from "../components/navbar"
import Brother from "../components/brother"
import Extra from "../components/extra"

const Brothers = () => {

  return (
    <View style={styles.outside}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.title}>E-BOARD</Text>
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" image="../assets/elise.png"/>
          
          <Extra />
        </ScrollView>
      </SafeAreaView>
      <Navbar />
    </View>
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
  },
});

export default Brothers;
