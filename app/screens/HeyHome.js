import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Banner from '../components/Banner';

const bannerImg = require('../assets/images/banner.jpg');

const HeyHome = () => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Banner
          image={bannerImg}
          title="Get 40% Off"
          subtitle="on all youtuber shoutouts"
        />
      </View>
    </SafeAreaView>
  );
};

export default HeyHome;

const styles = StyleSheet.create({
  root: {
    padding: 15,
  },
});
