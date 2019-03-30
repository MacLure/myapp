import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  pressed = (e) => {
    console.log('pressed')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.myText}>Open up App.js to start working on your app!</Text>
        <Text style={{fontSize: 20 }}>More Text</Text>
        <Button
          title="title"
          color="#bada55"
          onPress={this.pressed} 
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {

  }
});
