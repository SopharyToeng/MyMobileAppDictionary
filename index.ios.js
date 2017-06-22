import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text,View,FlatList,TouchableOpacity, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class smart9 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <SearchBar
        containerStyle={{ backgroundColor: '#f0f3f4'}}
        inputStyle={{ backgroundColor: '#fff', color: '#000'}}
        lightTheme
        placeholder='Type Here...' />
        <FlatList
          data={[
            {key: 'a', definition: "Hello! It's me"},
            {key: 'a,a'},
            {key: 'a,b,c'},
            {key: 'a.b.c'},
            {key: 'a.m'},
            {key: 'a/c'},
            {key: 'abach'},
            {key: 'aback'},
            {key: 'abactor'},
            {key: 'B'},
            {key: 'B,b'},
            {key: 'back'},
            {key: 'bone'},
            {key: 'banana'},
            {key: 'baby'},
            {key: 'boy'},
          ]}
          renderItem={({item}) =>
            <TouchableOpacity style={styles.item}>
              <ScrollView>
                <Text>{item.key}</Text>
              </ScrollView>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    // fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    // fontSize: 18,
    height: 44,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'

  },
});

AppRegistry.registerComponent('smart9', () => smart9);
