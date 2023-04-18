import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Brother = (props) => {
  const navigation = useNavigation();

  // Placeholder image sources
  const placeholderImages = [
    // require('./IMG_7473.jpg'),
    // require('./IMG_7472.jpg'),
    // require('./IMG_7471.jpg'),
    // require('./IMG_7470.jpg'),
    // require('./IMG_7469.jpg'),
    // require('./IMG_7467.jpg'),
    // require('./IMG_7468.jpg'),
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