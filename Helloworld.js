import React from 'react';
import { View, Text, Image } from 'react-native';

const HelloWorld = () => {
  return (
    <View>
      <Text>Hello World!</Text>
      <Image
        source={require('./hello_world_image.png')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default HelloWorld;
