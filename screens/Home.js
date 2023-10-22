import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
