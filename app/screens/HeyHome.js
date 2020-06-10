import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import Banner from '../components/Banner';
import Card from '../components/Card';
import ACTION_CARD_DATA from '../components/ACTION_CARD_DATA'
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

        {/* <Banner
          image={bannerImg}
          title="Get 40% Off"
          subtitle="on all youtuber shoutouts"
        /> */}
        {/* <View style={styles.cardroot}>
          {ACTION_CARD_DATA.map((action, index) => {
            return (
              <Card
                key={index}
                data={action} />

            );
          })}

        </View> */}
        <FlatList data={ACTION_CARD_DATA} renderItem={({ item, index }) => <Card data={item} position={index} />} numColumns={2}
          ListHeaderComponent={() => <Banner image={bannerImg}
            title="Get 40% Off"
            subtitle="on all youtuber shoutouts" />}
          ListFooterComponent={() => <Banner image={bannerImg}
            title="Get 40% Off"
            subtitle="on all youtuber shoutouts" />}
          stickyHeaderIndices={[0]} />

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
    flexWrap: "wrap",

  }
});
