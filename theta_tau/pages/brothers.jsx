import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, ScrollView, Image } from 'react-native';
import Navbar from "../components/navbar"
import Brother from "../components/brother"
import Extra from "../components/extra"
import BrotherData from "../data/brotherData.json"
const Brothers = () => {

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}></Text>
        <SafeAreaView>
            <Text style={styles.title}>BROTHERS</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
                <View style={{alignItems: 'center', width: '60%', backgroundColor: '#501315', marginBottom: 10}}>
                  <Text style={{color: 'white', fontSize: 25, paddingVertical: 5}}>E-Board</Text>
                </View>
              <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
            </View>
            <Image style={styles.logo} source={require('../assets/theta_tau_coa.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[0].description} linkedin={BrotherData.brotherData[0].linkedin} name="Elise Dougherty" title="Regent" imageSource = {require('../assets/eliseD.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[1].description} linkedin={BrotherData.brotherData[1].linkedin} name="Daniel Klein" title="Vice Regent" imageSource ={require('../assets/daniel_klein.png')}/>
            <Brother style={styles.brother} bio={BrotherData.brotherData[2].description} linkedin={BrotherData.brotherData[2].linkedin} name="Marissa Gabbamonte" title="Corressponding Secretary" imageSource ={require("../assets/Marissa_Gabbamonte.jpeg")}/>
            <Brother style={styles.brother} bio={BrotherData.brotherData[3].description} linkedin={BrotherData.brotherData[3].linkedin} name="Yuanjie Xu" title="Treasurer" imageSource = {require('../assets/yuanjie.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[4].description} linkedin={BrotherData.brotherData[4].linkedin} name="Hao Zhu" title="Scribe" imageSource = {require('../assets/hao_zhu.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[5].description} linkedin={BrotherData.brotherData[5].linkedin} name="Manvir Singh" title="Pledge Marshal" imageSource = {require('../assets/manvir.png')} />

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
              <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
                <View style={{alignItems: 'center', width: '60%', backgroundColor: '#501315', marginBottom: 10}}>
                  <Text style={{color: 'white', fontSize: 25, paddingVertical: 5}}>Active Brothers</Text>
                </View>
              <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
            </View>

            <Brother style={styles.brother} bio={BrotherData.brotherData[6].description} linkedin={BrotherData.brotherData[6].linkedin} name="David Huang" title=""  imageSource = {require('../assets/david_huang.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[7].description} linkedin={BrotherData.brotherData[7].linkedin} name="Felix Bermudez" title=""  imageSource = {require('../assets/felix_berm.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[8].description} linkedin={BrotherData.brotherData[8].linkedin} name="David Zaretsky" title=""  imageSource = {require('../assets/david.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[9].description} linkedin={BrotherData.brotherData[9].linkedin} name="Billy Grippi" title=""  imageSource = {require('../assets/billy_grippi.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[10].description} linkedin={BrotherData.brotherData[10].linkedin} name="Max Gustin" title=""  imageSource = {require('../assets/max_gustin.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[11].description} linkedin={BrotherData.brotherData[11].linkedin} name="Del Hart" title=""  imageSource = {require('../assets/del_hart.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[12].description} linkedin={BrotherData.brotherData[12].linkedin} name="Matthew Amato" title=""  imageSource = {require('../assets/matthew_amato.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[13].description} linkedin={BrotherData.brotherData[13].linkedin} name="Dennis Cetaj" title=""  imageSource = {require('../assets/dennis_cetaj.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[14].description} linkedin={BrotherData.brotherData[14].linkedin} name="Kelly Chan" title=""  imageSource = {require('../assets/kelly_chan.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[15].description} linkedin={BrotherData.brotherData[15].linkedin} name="Edward Masalimov" title=""  imageSource = {require('../assets/edward.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[16].description} linkedin={BrotherData.brotherData[16].linkedin} name="Tenzin Pema" title=""  imageSource = {require('../assets/tenzin_pema.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[17].description} linkedin={BrotherData.brotherData[17].linkedin} name="Chloe Tullius" title=""  imageSource = {require('../assets/chloe_tullius.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[18].description} linkedin={BrotherData.brotherData[18].linkedin} name="Gabriel Thornton" title=""  imageSource = {require('../assets/gabriel.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[19].description} linkedin={BrotherData.brotherData[19].linkedin} name="James Fattorusso" title=""  imageSource = {require('../assets/jimmy.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[20].description} linkedin={BrotherData.brotherData[20].linkedin} name="Jeffrey Kou" title=""  imageSource = {require('../assets/jeffrey_kou.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[21].description} linkedin={BrotherData.brotherData[21].linkedin} name="Andrew Li" title=""  imageSource = {require('../assets/andrew_li.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[22].description} linkedin={BrotherData.brotherData[22].linkedin} name="Victor Lin" title=""  imageSource = {require('../assets/victor.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[23].description} linkedin={BrotherData.brotherData[23].linkedin} name="Myles Pauquette" title=""  imageSource = {require('../assets/myles.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[24].description} linkedin={BrotherData.brotherData[24].linkedin} name="Juan Quintero" title=""  imageSource = {require('../assets/juan.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[25].description} linkedin={BrotherData.brotherData[25].linkedin} name="Adrian Sin" title=""  imageSource = {require('../assets/adrian_sin.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[26].description} linkedin={BrotherData.brotherData[26].linkedin} name="Justin Siwa" title=""  imageSource = {require('../assets/justin_siwa.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[27].description} linkedin={BrotherData.brotherData[27].linkedin} name="Alex Yevzerov" title=""  imageSource = {require('../assets/alex_yev.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[28].description} linkedin={BrotherData.brotherData[28].linkedin} name="Zachary Clark" title=""  imageSource = {require('../assets/zachary.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[29].description} linkedin={BrotherData.brotherData[29].linkedin} name="Lydia Cenac" title=""  imageSource = {require('../assets/lydia.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[30].description} linkedin={BrotherData.brotherData[30].linkedin} name="James Henry" title=""  imageSource = {require('../assets/jph.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[31].description} linkedin={BrotherData.brotherData[31].linkedin} name="Anna Kane" title=""  imageSource = {require('../assets/anna_kane.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[32].description} linkedin={BrotherData.brotherData[32].linkedin} name="Isabella Nguyen" title=""  imageSource = {require('../assets/bella.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[33].description} linkedin={BrotherData.brotherData[33].linkedin} name="Rrucha Singh" title=""  imageSource = {require('../assets/rrucha_singh.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[34].description} linkedin={BrotherData.brotherData[34].linkedin} name="Jenny Zhu" title=""  imageSource = {require('../assets/jenny.png')} />
            

            <Extra />
        </SafeAreaView>
        </ScrollView>
      <Navbar />
    </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    scrollContent: {
      flexGrow: 1,
      paddingBottom: 80, // set a paddingBottom value greater than the navbar height
      marginBottom: 10
    },
  title: {
    height: 50,
    color: '#FFFFFF',
    backgroundColor: '#501315', 
    fontWeight: 'bold',
    fontSize: 30, 
    textAlign: 'center',
    width: Dimensions.get('window').width,
  },
  logo: {
    width: 25,
    height: 41,
    position: 'absolute',
    right: 20,
  },
  scrollView: {
    marginBottom: 10, // leave space for the navbar
  },
  rectangle: {
    height: 2,
    width: 200,
    backgroundColor: 'green',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
  }
});

export default Brothers;
