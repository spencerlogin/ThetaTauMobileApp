import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Navbar from "../components/navbar"
import Brother from "../components/brother"
import Extra from "../components/extra"
import Event from "../components/events"

const Calender = () => {
  return (
    <View>
      <Text style={styles.title}></Text>
      <SafeAreaView>
        <ScrollView>
            <Text style={styles.title}>Spring 2023</Text>
          <Extra />
          <Navbar />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 50,
    color: '#710000',
    backgroundColor: '#E29900',
    fontWeight: 'bold',
    fontSize: 30, 
    textAlign: 'center',
    width: Dimensions.get('window').width,
  }
});

export default Calender;
