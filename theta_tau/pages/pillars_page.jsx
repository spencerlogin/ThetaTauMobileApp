import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      title: 'Brotherhood',
      description: 'Brotherhood is the foundation of Theta Tau Fraternity, representing a lifelong bond of support, camaraderie, and mutual respect among members. It fosters a sense of belonging and unity, creating a strong network of individuals who uplift and empower each other, both personally and professionally, and share a common purpose and values.',
      source: require('../assets/rush.png'),
    },
    {
      title: 'Community Service',
      description: 'Community service is a cherished pillar of Theta Tau, embodying the commitment to giving back and making a positive impact in the community. It instills a sense of responsibility and empathy, and provides opportunities for members to actively engage in meaningful service projects that contribute to the betterment of society, fostering a culture of service and selflessness.',
      source: require('../assets/rush2.png'),
    },
    {
      title: 'Professionalism',
      description: 'Professionalism is a core value of Theta Tau, emphasizing the importance of integrity, ethical behavior, and a high standard of excellence in all professional endeavors. It prepares members for the real-world by cultivating skills such as leadership, communication, and professionalism, and encourages a commitment to continuous learning and development, ensuring members are well-equipped for success in their careers and as leaders in their respective fields.',
      source: require('../assets/rush3.png'),
    },
    {
      title: 'Brotherhood',
      description: 'Brotherhood is the foundation of Theta Tau Fraternity, representing a lifelong bond of support, camaraderie, and mutual respect among members. It fosters a sense of belonging and unity, creating a strong network of individuals who uplift and empower each other, both personally and professionally, and share a common purpose and values.',
      source: require('../assets/rush.png'),
    },
    {
      title: 'Community Service',
      description: 'Community service is a cherished pillar of Theta Tau, embodying the commitment to giving back and making a positive impact in the community. It instills a sense of responsibility and empathy, and provides opportunities for members to actively engage in meaningful service projects that contribute to the betterment of society, fostering a culture of service and selflessness.',
      source: require('../assets/rush2.png'),
    },
    {
      title: 'Professionalism',
      description: 'Professionalism is a core value of Theta Tau, emphasizing the importance of integrity, ethical behavior, and a high standard of excellence in all professional endeavors. It prepares members for the real-world by cultivating skills such as leadership, communication, and professionalism, and encourages a commitment to continuous learning and development, ensuring members are well-equipped for success in their careers and as leaders in their respective fields.',
      source: require('../assets/rush3.png'),
    },
  ];

  const handleSwipe = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.carousel}
        loop={false}
        index={currentIndex}
        onIndexChanged={handleSwipe}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={image.source} />
            <Text style={styles.title}>{image.title}</Text>
            <Text style={styles.description}>{image.description}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  carousel: {
    width: '100%',
    height: '60%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default App;
