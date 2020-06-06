/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ACTION_BUTTON_DATA from './mock/ACTION_BUTTON_DATA';

const {width: DEVICE_WIDTH} = Dimensions.get('screen');

const actionIcon = require('./app/assets/images/grader-action.png');

const ActionButton = ({data, setSelected}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(data.name);
      }}
      activeOpacity={0.6}
      style={[
        styles.actionContainer,
        {
          backgroundColor: data.bgColor,
        },
      ]}>
      <Image style={styles.actionImage} source={actionIcon} />
      <Text style={styles.actionText}>{data.name}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [selected, setSelected] = useState('');
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.cardsList}>
          {ACTION_BUTTON_DATA.map((action, index) => {
            return (
              <ActionButton
                key={index}
                data={action}
                setSelected={setSelected}
              />
            );
          })}
        </View>

        <Text style={styles.selectedValue}>{selected}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  actionContainer: {
    flexDirection: 'row',
    backgroundColor: '#EF867E',
    width: (DEVICE_WIDTH - 50) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 12,
    marginVertical: 7,
  },
  actionImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  cardsList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
  },
  selectedValue: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 30,
    fontWeight: '700',
  },
});
