import React from 'react';
import { Text, View, TouchableOpacity, CameraRoll } from 'react-native';
import { Camera, Permissions } from 'expo';
import styles from './styles';

export default class Recorder extends React.Component {
  constructor(props) {
    super(props);
  }

  camera = null;

  state = {
    hasCameraPermission: null,
    captures: [],
    capturing: null,
  };

  startRecord = async () => {
    const videoData = await this.camera.recordAsync()
    const saveResult = await CameraRoll.saveToCameraRoll(videoData.uri);
    this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
  };

  stopRecord = () => {
    if (this.state.capturing)
      this.camera.stopRecording();
  };

  async componentDidMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');
    this.setState({ hasCameraPermission });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.isStarted !== this.props.isStarted) {
      if (this.props.isStarted) {
        this.setState({ capturing: true });
        this.startRecord();
      }
      else {
        this.stopRecord();
      }

    }
  }

  
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {

    return (
      <View 
        style={{ flex: 1 }}>
        <Camera 
          style={{ flex: 1 }} type={Camera.Constants.Type.front}
          ref={camera => this.camera = camera}
        />
      </View>
      );
    }
  }
}