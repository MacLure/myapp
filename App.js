import React , {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, TextInput } from 'react-native';

const NewComponent = function() {
  return (
    <Text>New Component</Text>
  )
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      max: 0,
      ready: false
    }
  }

  changeNum = (txt) => {
    let max = parseInt(txt)
    let ready = false
    if (!isNaN(max) && max > 0) {
      ready = !ready
      this.setState({max, ready})
    } else {
      this.setState({ready, max: 0})
    }
    
  }

  pickNum = (e) => {
    let num = Math.floor(Math.random() * this.state.max)
    this.setState({num})
  }

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
            <TextInput 
              defaultValue={this.state.max.toString(10)}
              keyboardType="number-pad"
              maxLength={3}
              onChangeText={this.changeNum}
              style={styles.input}
            />
            <Text style={styles.label}>{this.state.num}</Text>
            {this.state.ready && (<Button title="Pick Number" color="orange" onPress={this.pickNum}/>)}
          </View>
          <View style={styles.icRow}>
            <View style={styles.ic2}>
              <Text style={{fontWeight: 'bold'}}>TWO</Text>
              <NewComponent />
            </View>
            <View style={styles.ic3}>
              <Text style={{fontWeight: 'bold'}}>THREE</Text>
            </View>
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

input: {
  fontSize: 30,
  color: "white",
},

  myText: {
  },

  flexContainer: {
    flex: 1,
    flexDirection:'column',

  },
  ic1: {
    backgroundColor: '#c3f',
    flex: 1
  },
  icRow: {
    flex: 1,
    flexDirection: 'row',
  },
  ic2: {
    backgroundColor: '#3cf',
    flex: 1

  },
  ic3: {
    backgroundColor: '#fc3',
    flex: 1

  },
  ic4: {
    backgroundColor: '#f3c',
    flex: 1

  }
});
