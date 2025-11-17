import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Text>NavBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavBar;
