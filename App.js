import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import Recorder from './app/components/Recorder/Recorder';
import Starter from './app/components/Starter/Starter';
import Conductor from './app/components/Conductor/Conductor';

export default class App extends React.Component {

constructor(props) {
    super(props);
    this.state = { isStarted: false };
  }

  handlePress = () => {
    //this.setState({ isStarted: !this.state.isStarted})
    console.log('button press');
    this.setState({ 
      isStarted: !this.state.isStarted });
    console.log(this.state.isStarted.toString());
  }

  render() {
    return (
      <View style={styles.container}>
        <Recorder
        isStarted={this.state.isStarted} 
        />
        <Conductor
        isStarted={this.state.isStarted} 
        />
        <Starter 
        onPressStart={this.handlePress}
        isStarted = {this.state.isStarted}
        />
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
