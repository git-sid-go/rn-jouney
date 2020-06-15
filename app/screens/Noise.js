import React from 'react';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import Noiseimg from '../components/Noiseimg';
import ACTION_NOISE_TEXT from '../components/ACTION_NOISE_TEXT';

const Noise = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.root}>
        {ACTION_NOISE_TEXT.map((action, index) => {
          return <Noiseimg key={index} data={action} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Noise;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#252a43',
    height: Dimensions.get('window').height,
  },
});
