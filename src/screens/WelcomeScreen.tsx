// WelcomeScreen.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CallWating from '../public/assets/svg/Callwaiting.svg';
import Logo from '../components/Logo.component';

const { width } = Dimensions.get('screen');

const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.svgContainer}>
        <CallWating width={width * 1.4} height={width * 1.2} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome To EasyConnect</Text>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>Easily manage your contacts</Text>
          <Text style={styles.subText}>stay connected.</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, isHovered && styles.buttonHovered]}
        onPress={() => navigation.navigate('Contacts')}
        onPressIn={() => setIsHovered(true)}
        onPressOut={() => setIsHovered(false)}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  svgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  subTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#000',
  },
  subText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#000',
  },
  button: {
    backgroundColor: '#F7BCFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonHovered: {
    backgroundColor: '#D59BFF',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'semibold',
  },
});

export default WelcomeScreen;
