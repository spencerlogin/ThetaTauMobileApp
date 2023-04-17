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
          <Brother style={styles.brother} name="Elise Dougherty" title="Regent" imageSource = {require('../assets/elise.png')} />
          <Brother style={styles.brother} name="Daniel Klein" title="Vice Regent" imageSource ="../assets/elise.png"/>
          <Brother style={styles.brother} name="Marissa Gabbamonte" title="Corressponding Secretary" imageSource ={require("../assets/Marissa_Gabbamonte.jpeg")}/>
          <Brother style={styles.brother} name="Yuanjie Xu" title="Treasurer" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Hao Zhu" title="Scribe" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Manvir Singh" title="Pledge Marshal" image="../assets/elise.png"/>

          <Text style={styles.title}>ACTIVE BROTHERS</Text>
          <Brother style={styles.brother} name="David Huang" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Felix Bermudez" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="David Zaretsky" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Billy Grippi" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Max Gustin" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Del Hart" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Matthew Amato" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Dennis Cetaj" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Kelly Chan" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Edward Masalimov" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Tenzin Pema" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Chloe Tullius" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Gabriel Thornton" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="James Fattorusso" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Jeffrey Kou" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Andrew Li" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Victor Lin" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Myles Pauquette" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Juan Quintero" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Adrian Sin" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Justin Siwa" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Alex Yevzerov" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Zachary Clark" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="James Henry" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Anna Kane" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Isabella Nguyen" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Rrucha Singh" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Hao Zhu" title="" image="../assets/elise.png"/>
          <Brother style={styles.brother} name="Jenny Zhu" title="" image="../assets/elise.png"/>

          
          <Extra />
        </ScrollView>
        <Navbar />
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
    fontSize: 20, 
    textAlign: 'center',
    paddingVertical: 20,
    width: Dimensions.get('window').width,
  },
});

export default Brothers;
