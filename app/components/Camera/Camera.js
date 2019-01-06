import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';
import styles from './styles';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Camera style={styles.camera} type={this.state.type}>
            <View
              style={styles.camera_view}>
            </View>
          </Camera>
        </View>
      );
    }
  }
}