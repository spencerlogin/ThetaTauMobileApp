import React from 'react';
import { Linking, Image, View, StyleSheet, Text, SafeAreaView, Dimensions, Pressable, ScrollView} from 'react-native';
import Navbar from "../components/navbar"
import Brother from "../components/brother"
import { useNavigation } from '@react-navigation/native';
import Extra from "../components/extra"
import { A } from '@expo/html-elements';


const BrotherPage = ({ route }) => {
  const navigation = useNavigation();
  const name = route.params.name
  const title = route.params.title
  const image = route.params.image
  const bio = route.params.bio
  const linkedin = route.params.linkedin

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.brothersRow}>
          <Pressable onPress={() => {navigation.navigate('Brothers')}}><Text style={styles.back}>Back</Text></Pressable>
          <Text style={styles.title}>BROTHERS</Text>
        </View>
        <SafeAreaView contentContainerStyle={styles.scrollContent}>
          <View style={styles.topRow}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25,}}>{name}</Text>
            <Text style={{color: 'white', fontSize: 18, marginTop: 7}}>{title}</Text>
          </View>
          <Image style={{width: "100%", height: 400}} source={image}></Image>

          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
              <View style={{alignItems: 'center', width: '50%', backgroundColor: '#501315', marginBottom: 10}}>
                <Text style={{color: 'white', fontSize: 20, paddingVertical: 5}}>Bio</Text>
              </View>
            <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
          </View>

          <Text style={{marginHorizontal: 5, fontSize: 15}}>{bio}</Text>

          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
              <View style={{alignItems: 'center', width: '50%', backgroundColor: '#501315', marginBottom: 10}}>
                <Text style={{color: 'white', fontSize: 20, paddingVertical: 5}}>Socials</Text>
              </View>
            <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
          </View>
          <A style={{marginLeft: 40, marginTop: 20}} href={linkedin}><Image style={{height: 65, width: 65}} source={require('../assets/linkedin_logo.png')}></Image></A>
          <Extra />
        </SafeAreaView>
      </ScrollView>
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  brothersRow: {
    backgroundColor: '#501315', 
    textAlign: 'center',
    flexDirection: 'row',

    flexWrap:'wrap',
  },
  back: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 65,
  },
  title: {
    marginTop: 50,
    paddingVertical: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30, 
    marginLeft: 55,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, // set a paddingBottom value greater than the navbar height
    marginBottom: 10
  },
  topRow: {
    backgroundColor: '#B99B73',
    paddingVertical: 10,
    alignItems: 'center',
  }
});

export default BrotherPage;
