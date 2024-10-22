import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Easy<Text style={styles.logo}>Connect</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F7BCFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default Logo;
