import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import Camera from './app/components/Camera/Camera';
import Starter from './app/components/Starter/Starter';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera />
        <Starter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
});
