import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width: DEVICE_WIDTH} = Dimensions.get('screen');
import ACTION_CARD_DATA from '../components/ACTION_CARD_DATA';
import {useNavigation} from '@react-navigation/native';

const Card = ({data, position}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (data.navigateTo) {
          navigation.navigate(data.navigateTo);
        } else {
          navigation.navigate('Exams');
        }
      }}
      style={[
        styles.root,
        {
          marginLeft: position % 2 === 1 ? 15 : 0,
        },
      ]}>
      <Image style={styles.cardimg} source={data.image}></Image>
      <Text style={styles.cardtext}>{data.title}</Text>
      <Text style={[styles.cardtext, styles.cardsubtext]}>{data.subtitle}</Text>
      <Text style={styles.cardtext}>{data.cost}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  root: {
    height: 200,
    justifyContent: 'flex-end',
    paddingBottom: 7,
    width: (DEVICE_WIDTH - 30) / 2 - 10,
    marginVertical: 7,
  },
  cardimg: {
    maxHeight: 200,
    width: (DEVICE_WIDTH - 30) / 2 - 10,
    borderRadius: 10,
    position: 'absolute',
  },
  cardtext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 20,
  },
  cardsubtext: {
    fontSize: 12,
    fontWeight: 'normal',
  },
});
