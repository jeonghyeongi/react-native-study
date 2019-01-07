/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button} from 'react-native';



export default class Search extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      searchWord: ''
     };
  }

   url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC-BRSuuKm80Bq0JZy5zeznKEkrvGjoSMU&part=snippet&maxResults=10&q=";

    _onPressButton = () => { 
        this._getYoutubeApi();
    }

     _getYoutubeApi = async () => {
        try {
            Alert.alert(this.url + this.state.searchWord);
            let response = await fetch(this.url + this.state.searchWord);
            let responseJson = await response.json();
        
             await this.props.search(this.state.searchWord, responseJson.items);
            
        } catch (error) {
            Alert.alert(error);
        }
    }

    
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={{height: 40, width: 260, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(searchWord) => this.setState({searchWord})}
         />
         <Button onPress={this._onPressButton} title="검색" />
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
