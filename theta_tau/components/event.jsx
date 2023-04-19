import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from "../components/navbar"
import Extra from "../components/extra"

const Brother = (props) => {
  return (
    <View style={styles.row}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
          <View style={{alignItems: 'center', width: '60%', backgroundColor: '#501315', marginBottom: 10}}>
            <Text style={{color: 'white', fontSize: 25, paddingVertical: 5}}>{props.title}</Text>
          </View>
        <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
      </View>

      <View>
          <Image source={props.imageSource} style={styles.image} />
      </View>
      <Text style={{width: Dimensions.get('window').width, marginBottom: 30, paddingVertical: 5, paddingHorizontal: 25, fontSize: 20, backgroundColor: '#B99B73', color: "#FFFFFF"}}>{props.desc}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  row: {
    width: '100%',
    marginTop: 10, 
    alignItems: 'center',
  },
});

export default Brother;
