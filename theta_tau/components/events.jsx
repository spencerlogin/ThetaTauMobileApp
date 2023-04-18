import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Brother = (props) => {
  const navigation = useNavigation();

  // Image sources
  const placeholderImages = [
    require('../assets/IMG_7473.png'), //info session
    require('../assets/rush.png.png'),
    require('../assets/rush2.png.png'),
    require('../assets/rush3.png.png'),
    require('../assets/IMG_7472.png'), //info session II
    require('../assets/IMG_7471.png'), // game night
    require('../assets/IMG_7470.png'), // meet the brothers
    require('../assets/IMG_7469.png'), // pizza night
    require('../assets/IMG_7467.png'), // paint night
    require('../assets/IMG_7468.png'), // DIY BRACELETS
    
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Render placeholder images */}
        {placeholderImages.map((source, index) => (
          <Image key={index} source={source} style={styles.image} />
        ))}
      </ScrollView>
      <Pressable onPress={() => navigation.navigate('BrotherPage')} style={styles.button}>
        <Text style={styles.buttonText}>RUSH EVENTS</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#710000',
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#E29900',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
  },
});

export default Brother;