import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import DogCall from '../../public/assets/svg/Dogcall.svg';

const { width } = Dimensions.get('screen');

interface HeaderProps {
  photo?: string | null;
}

const Header: React.FC<HeaderProps> = ({ photo }) => {
  return (
    <View>
      {photo ? (
        <Image source={{ uri: photo }} style={styles.userImage} />
      ) : (
        <DogCall width={width * 0.9} height={width * 0.9} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  userImage: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: (width * 0.9) / 2,
    marginBottom: 20,
  },
});

export default Header;
