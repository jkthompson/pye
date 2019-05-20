import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Conductor extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = { charIdx: 0, hash: 'START HASH' };
    	this.interval = null
  	}

  	getBlockHash = async () => {
	  try {
	    let response = await fetch(
	      'https://blockchain.info/q/latesthash',
	    );
	    console.log(typeof response._bodyText);
	    return response._bodyText;
	  } catch (error) {
	    console.error(error);
	  }
	}

	updateLetterIdx = async () => {
		this.setState(previousState => (
        { charIdx: previousState.charIdx + 1 }
      ))	
	}

	startConductor = async () => {
		const hash = await this.getBlockHash();
		this.setState( {hash: hash} );
    	this.interval = setInterval(this.updateLetterIdx, 1000);
	}

	stopConductor = async () => {
		clearInterval(this.interval);
		this.setState( {hash: 'START HASH' } );
	}

	async componentDidUpdate(prevProps) {
	    if (prevProps.isStarted !== this.props.isStarted) {
	      if (this.props.isStarted) 
	      {
	        this.startConductor();
	      }
	      else 
	      {
	        this.stopConductor();
	      }
	    }
	}

	render() {

		return (
			<View style={styles.bottom}>
	        	<Text>
	        		{ this.state.hash.charAt(this.state.charIdx) }
	        	</Text>
	      	</View>
	    );
	}
}

const styles = StyleSheet.create({
  bottom: {
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end',
    bottom: 100,
    position: 'absolute'
  },
});