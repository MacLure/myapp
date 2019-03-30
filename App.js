import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native';

export default class App extends React.Component {
  pressed = (e) => {
    console.log('pressed')
  }
  render() {
    return (
      // <View style={styles.container}>
      //   <StatusBar hidden={false} barStyle={'light-content'} networkActivityIndicatorVisible={true} />
        
        <View style={styles.flexContainer}>
          <View style={styles.ic1}>
            <Text style={{fontWeight: 'bold'}}>ONE</Text>
          </View>
          <View style={styles.ic2}>
            <Text style={{fontWeight: 'bold'}}>TWO</Text>
          </View>
          <View style={styles.ic3}>
            <Text style={{fontWeight: 'bold'}}>THREE</Text>
          </View>
          <View style={styles.ic4}>
            <Text style={{fontWeight: 'bold'}}>FOUR</Text>
          </View>
        </View>

        // <Text style={styles.myText}>Open up App.js to start working on your app!</Text>
        // <Text style={{fontSize: 20 }}>More Text</Text>
        // <Image style ={{width: 200, height: 200}} source={require('./assets/favicon.jpg')} />
        // <Image style={{width: 200, height: 200}}source={{uri: 'https://picsum.photos/200/200'}}/>
        // <Button
        //   title="title"
        //   color="#bada55"
        //   onPress={this.pressed} 
        // />
        // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
  },
  flexContainer: {
    flex: 1,
    flexDirection:'row',

  },
  ic1: {
    backgroundColor: '#c3f',
    height: 100,
    width: 100
  },
  ic2: {
    backgroundColor: '#3cf',
    height: 100,
    width: 100
  },
  ic3: {
    backgroundColor: '#fc3',
    height: 100,
    width: 100
  },
  ic4: {
    backgroundColor: '#f3c',
    height: 100,
    width: 100
  }
});
