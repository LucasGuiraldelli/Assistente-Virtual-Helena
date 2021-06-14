import React from 'react';
import {StyleSheet, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import ImagemMulherSorrindo from '../../../assets/MulherSorrindo2.png';
import ImagemExemploTempo from '../../../assets/ExemploTempo.png';

const Previsao = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.slide}>
        <Image
          source={ImagemMulherSorrindo}
          style={styles.ImagemMulherSorrindo}
        />
        <Text style={styles.title}>Previsão do Tempo</Text>
        <Text style={styles.text}>
          "Helena, qual a previsão do tempo pra hoje?"
        </Text>
        <ScrollView style={styles.scrollView}>
          <Image
            source={ImagemExemploTempo}
            style={styles.ImagemExemploTempo}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    /* backgroundColor: '#F0FF', */
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flexDirection: 'column',
    justifyContent: 'center',
    /* alignItems: 'flex-end', */
    marginTop: 70,
    width: 360,
    height: 550,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    color: '#000000',
    marginTop: 32,
    marginBottom: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#A020F0',
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  ImagemMulherSorrindo: {
    height: 180,
    width: 310,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImagemExemploTempo: {
    height: 280,
    width: 280,
    marginLeft: 32,
    marginBottom: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    marginHorizontal: 10,
  },
});

export default Previsao;
