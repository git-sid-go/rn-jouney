import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native';
import Banner from '../components/Banner';
import Card from '../components/Card';
const { width: DEVICE_WIDTH } = Dimensions.get('screen');

const bannerImg = require('../assets/images/banner.jpg');
const cardImg1 = require("../assets/images/card1.jpg");
const cardImg2 = require("../assets/images/card2.jpg");
const cardImg3 = require("../assets/images/card3.jpg");
const cardImg4 = require("../assets/images/card4.jpg");




const HeyHome = () => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Banner
          image={bannerImg}
          title="Get 40% Off"
          subtitle="on all youtuber shoutouts"
        />
        <View style={styles.cardroot}>
          <Card
            image={cardImg1}
            title="Obama M"
            subtitle="President, US"
            cost="10,000" />


          <Card
            image={cardImg2}
            title="Keanu Reeves"
            subtitle="Actor, human"
            cost="20,000"
          />
        </View>
        <View style={styles.cardroot}>
          <Card
            image={cardImg3}
            title="Henry Cavil"
            subtitle="Superman , DC"
            cost="30,000" />


          <Card
            image={cardImg4}
            title="Di Caprio"
            subtitle="Actor, human"
            cost="20,000"
          />
        </View>
      </View>


    </SafeAreaView>

  );
};

export default HeyHome;

const styles = StyleSheet.create({
  root: {
    padding: 15,

  },
  cardroot: {
    width: DEVICE_WIDTH - 30,
    maxWidth: DEVICE_WIDTH - 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  }
});
