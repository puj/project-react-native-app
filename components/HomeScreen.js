import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import crystalBackground from '../assets/background.jpg';
import { Button } from 'react-native';

const HomeText = styled.Text`
  font-size: 48px;
`;

const HomeContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const navigateToInfo = () => {
    console.log('Info button pressed');
    navigation.navigate('Info', {
      data: [0, 1, 2, 3],
    });
  };

  return (
    <HomeContainer
      source={{
        uri:
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
      }}
    >
      <HomeText>Welcome to Our App</HomeText>
      <Button title="Info" onPress={navigateToInfo}></Button>
    </HomeContainer>
  );
};

export default HomeScreen;
