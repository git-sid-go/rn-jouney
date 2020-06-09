import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Banner = ({image, title, subtitle}) => {
  return (
    <View style={styles.root}>
      <Image style={styles.img} source={image} />
      <Text style={[styles.text, styles.boldText]}>{title}</Text>
      <Text style={styles.text}>{subtitle}</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  root: {
    height: 160,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 30,
    marginLeft: 20,
  },
  boldText: {
    fontSize: 24,
    marginBottom: 5,
  },
  img: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    height: 160,
    width: '100%',
  },
});