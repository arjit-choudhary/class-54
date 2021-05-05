import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColorButton extends Component {
  displayalert=()=>{
    alert("warning not working");
  }
  render(){
    return(
      <Button color={this.props.color} title="Click Me" onPress={this.displayalert}/>

    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColorButton  color="pink"/>
        <Text>My First React Component</Text>
      </View>
    );
  }
}