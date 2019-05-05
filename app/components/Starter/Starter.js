import React, { Component } from 'react';
import { Alert, Button } from 'react-native';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default class Starter extends React.Component {
  
  _onPressStart() {
    Alert.alert('You tapped the button!')
  }
  
  render() {
    return (
      <View style={styles.bottom}>
        <Button
          buttonStyle={styles.mybutton}
          onPress={this._onPressStart}
          title="Start"
          accessibilityLabel="Learn more about this button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mybutton: {
    color: 'blue',
  },
  bottom: {
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end',
    bottom: 36,
    position: 'absolute'
  },
});