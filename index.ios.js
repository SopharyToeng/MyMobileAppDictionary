import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text,View,FlatList,TouchableOpacity, ScrollView, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component  {
  static navigationOptions = {
    title: 'Sophary Dictionary',
  };
  render() {
    const { navigate } = this.props.navigation;
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
            {key: 'a,a', definition: "OK!"},
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
            <ScrollView>
              <TouchableOpacity
                onPress={() => navigate('Definition', { item: item })}
              >
                <View style={styles.item}>
                  <Text>{item.key}</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          }
        />
      </View>
    );
  }
}

class DefinitionScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Definition of ${navigation.state.params.item.key}`,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.definition}>
        <Text>{params.item.definition}</Text>
      </View>
    );
  }
}

const smart9 = StackNavigator({
  Home: { screen: HomeScreen },
  Definition: { screen: DefinitionScreen }
});

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    borderColor: '#ddd',
    borderBottomWidth: 1
  },
  definition: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('smart9', () => smart9);
