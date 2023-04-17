import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Navbar from "../components/navbar"
import Brother from "../components/brother"
import Extra from "../components/extra"
const Brothers = () => {

  return (
    <ScrollView>
      <View style={styles.outside}>
        <Text style={styles.title}></Text>
        <SafeAreaView>
            <Text style={styles.title}>E-BOARD</Text>
            <Brother style={styles.brother} name="Elise Dougherty" title="Regent" imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Daniel Klein" title="Vice Regent" imageSource ={require('../assets/elise.png')}/>
            <Brother style={styles.brother} name="Marissa Gabbamonte" title="Corressponding Secretary" imageSource ={require("../assets/Marissa_Gabbamonte.jpeg")}/>
            <Brother style={styles.brother} name="Yuanjie Xu" title="Treasurer" imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Hao Zhu" title="Scribe" imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Manvir Singh" title="Pledge Marshal" imageSource = {require('../assets/elise.png')} />

            <Text style={styles.title}>ACTIVE BROTHERS</Text>
            <Brother style={styles.brother} name="David Huang" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Felix Bermudez" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="David Zaretsky" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Billy Grippi" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Max Gustin" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Del Hart" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Matthew Amato" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Dennis Cetaj" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Kelly Chan" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Edward Masalimov" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Tenzin Pema" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Chloe Tullius" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Gabriel Thornton" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="James Fattorusso" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Jeffrey Kou" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Andrew Li" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Victor Lin" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Myles Pauquette" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Juan Quintero" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Adrian Sin" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Justin Siwa" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Alex Yevzerov" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Zachary Clark" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="James Henry" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Anna Kane" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Isabella Nguyen" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Rrucha Singh" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Hao Zhu" title=""  imageSource = {require('../assets/elise.png')} />
            <Brother style={styles.brother} name="Jenny Zhu" title=""  imageSource = {require('../assets/elise.png')} />

            
            <Extra />
          <Navbar />
        </SafeAreaView>
      </View>
    </ScrollView>

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

export default Brothers;
