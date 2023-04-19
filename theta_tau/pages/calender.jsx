import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from "../components/navbar"
import Extra from "../components/extra"
import Event from "../components/event"
import Data from "../data/data.json"

const Brother = (props) => {
  const navigation = useNavigation();

  // Image sources
  const placeholderImages = [
    require('../assets/infoSess1.png'), //info session
    require('../assets/infoSess2.png'), //info session II
    require('../assets/gameNight.png'), // game night
    require('../assets/meetTheBro.png'), // meet the brothers
    require('../assets/pizzaNight.png'), // pizza night
    require('../assets/paintNight.png'), // paint night
    require('../assets/bracelet.png'), // DIY BRACELETS
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>RUSH EVENTS</Text>
        <Image style={styles.logo} source={require('../assets/theta_tau_coa.png')} />
        <Event desc={Data.eventData[0].description} title="Info Session 1" imageSource = {placeholderImages[0]} />
        <Event desc={Data.eventData[1].description} title="Info Session 2" imageSource = {placeholderImages[1]} />
        <Event desc={Data.eventData[2].description} title="Game Night" imageSource = {placeholderImages[2]} />
        <Event desc={Data.eventData[3].description} title="Meet The Brothers" imageSource = {placeholderImages[3]} />
        <Event desc={Data.eventData[4].description} title="Pizza Night" imageSource = {placeholderImages[4]} />
        <Event desc={Data.eventData[5].description} title="Paint Night" imageSource = {placeholderImages[5]} />
        <Event desc={Data.eventData[6].description} title="D.I.Y. Bracelets" imageSource = {placeholderImages[6]} />
        <Extra />
      </ScrollView>
      <Navbar style={styles.navbar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    height: 100,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30, 
    textAlign: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: '#501315',
    padding: 50
  },
  logo: {
    width: 30,
    height: 50,
    position: 'absolute',
    right: 20,
    marginTop: 40,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
  },
});

export default Brother;
