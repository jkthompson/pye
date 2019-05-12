import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';
import styles from './styles';

export default class CameraExample extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    hasCameraPermission: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  
  startRecord = () => {
    if (this.camera) {
      this.camera.recordAsync({ maxDuration: 1800, maxFileSize: 1000000000 });
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={Camera.Constants.Type.front}>
          </Camera>
        </View>
      );
    }
  }
}