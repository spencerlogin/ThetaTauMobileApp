import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/navbar';
import Swiper from 'react-native-swiper';

const Pillars = () => {
  const navigation = useNavigation();

  const images = [
    { image: require('../assets/brotherTEXT.png')},
    { image: require('../assets/brotherhood1.png')},
    { image: require('../assets/brotherhood2.png')},
    { image: require('../assets/brotherhood3.png')},

    { image: require('../assets/professionalismTEXT.png')},
    { image: require('../assets/professionalism1.png')},
    { image: require('../assets/professionalism2.png')},
    { image: require('../assets/professionalism3.png')},

    { image: require('../assets/serviceTEXT.png')},
    { image: require('../assets/service1.png')},
    { image: require('../assets/service2.png')},
    { image: require('../assets/service3.png')},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PILLARS</Text>
      <Image style={styles.logo} source={require('../assets/theta_tau_coa.png')} />
      <Swiper>
        {images.map((item, index) => (
          <ImageBackground key={index} source={item.image} style={styles.image}>
            <Text style={styles.text}>{item.text}</Text>
          </ImageBackground>
        ))}
      </Swiper>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    height: 70,
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    scale: 4,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default Pillars;
