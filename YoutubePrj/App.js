/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import Search from "./component/Search";
import ResultList from "./component/ResultList";



export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      parentSearchWord: '',
      parentItems: []
     };
  }

  componentDidMount() {
   //this.getYoutubeFromApi(this.);
  }

  _childSearchWord = (searchWord, items) => {
    this.setState({parentSearchWord : searchWord, parentItems: items});
    
  }

  _test = () => {
    
    Alert.alert("parentSearchWord =" + this.state.parentSearchWord + ", items size =" + this.state.parentItems.length);

  }


  
  

  render() {
    return (
      <View style={styles.container}>
        <Search search={this._childSearchWord}/>
        <ResultList list={this.state.parentItems}/>
        <Button title="test" onPress={this._test} color="#2196F3"/>
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
  }
});
