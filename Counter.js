import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <View>
        <Text>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.increment} />
        <Button title="Decrement" onPress={this.decrement} />
      </View>
    );
  }
}

export default Counter;
