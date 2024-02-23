import React from 'react';
import { View, Text } from 'react-native';

const GreetUser = ({ username }) => {
  return (
    <View>
      <Text>Hello, {username}!</Text>
    </View>
  );
};

export default GreetUser;
