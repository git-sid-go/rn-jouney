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

const TestListItem = ({title, subtitle, disabled}) => {
  return (
    <View style={styles.testContainer}>
      <View>
        <Text
          style={[
            styles.test,
            {
              color: disabled ? 'red' : 'black',
            },
          ]}>
          {title}
        </Text>
        <Text style={styles.subtest}>{subtitle}</Text>
      </View>

      <View style={styles.retake}>
        <Text style={styles.retakeTest}>Retake Test</Text>
      </View>
    </View>
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
        <Text style={styles.mainTitle}>Practice, Perform, Perfect!</Text>

        <TestListItem
          title="Cost Accounting Fundamental"
          subtitle="Last taken on 12 April 2019"
          disabled={true}
        />
        <TestListItem
          title="Fixed Asset Accounting"
          subtitle="Last taken on 12 April 2019"
          disabled={true}
        />
        <TestListItem
          title="Non profit Accounting"
          subtitle="Last taken on 12 April 2019"
        />
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
    flex: 0.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
  },
  testContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  test: {
    color: 'black',
    fontWeight: '900',
    fontSize: 16,
    paddingBottom: 7,
  },
  subtest: {
    color: 'grey',
    fontWeight: '600',
    fontSize: 14,
  },
  retake: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 35,
    borderColor: 'orange',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 150,
    marginLeft: 15,
  },
  retakeTest: {
    color: 'orange',
    fontWeight: '700',
    fontSize: 16,
  },
  mainTitle: {
    fontSize: 18,
    marginVertical: 20,
    fontWeight: '700',
  },
  selectedValue: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 30,
    fontWeight: '700',
  },
});
