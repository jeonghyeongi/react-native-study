/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Alert, Button, Image} from 'react-native';




export default class ResultList extends Component<Props> {

    _test = () => {
        //Alert.alert(this.state.items.length);
    }

    _onPressView = (id) => {
        Alert.alert(id);
    }

    _keyExtractor = (item, index) => item.id.videoId;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={this.props.list}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => 
                <View>
                <Image
                    source={{ uri: item.snippet.thumbnails.default.url }}
                    style={styles.image}
                ></Image>
                <Text style={styles.list}>{item.snippet.title}</Text>
                </View>
            }
            
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
      height: 30,
      width: 300
  },
  image: {
      width: 70,
      height: 70
  }
});
