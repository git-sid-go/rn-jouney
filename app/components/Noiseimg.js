import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Noiseimg = ({data}) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.noiseimg}
        source={require('../assets/images/noiseimg.jpeg')}
      />
      <Text style={[styles.noiseheadtxt]}>{data.line1}</Text>

      <Text style={styles.noisetxt}>{data.line2}</Text>
      <TouchableOpacity style={styles.noisebuttoncontainer}>
        <Text style={styles.noisebutton}>Pair Device</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Login}>
        <Text style={styles.Login}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Login}>
        <Text
          style={[
            styles.Login,
            {
              left: 240,
            },
          ]}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Noiseimg;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  noiseimg: {
    height: 400,
    width: 330,
    left: 25,
    top: 30,
    borderRadius: 10,
  },
  noiseheadtxt: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    left: 90,
    fontFamily: 'Roboto',
  },
  noisetxt: {
    marginTop: 20,
    paddingLeft: 40,
    paddingRight: 30,
    color: 'slategrey',
    fontFamily: 'Roboto',
  },
  noisebuttoncontainer: {
    height: 50,
    width: 300,
    backgroundColor: '#1a8ada',
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  noisebutton: {
    fontSize: 19,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    top: 9,
  },
  Login: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
    left: 30,
    top: 300,
    flexDirection: 'row',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    position: 'absolute',
  },
});
