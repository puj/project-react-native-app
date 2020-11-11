import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import crystalBackground from '../assets/background.jpg';
import { Text } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const InfoText = styled.Text`
  font-size: 48px;
  ${(props) => `color: hsl(${props.hue}, 100%, 50%);`}
`;

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const InfoScreen = ({ navigation, route }) => {
  const [data, setData] = useState({});
  const [hasShaked, setHasShaked] = useState(false);

  useEffect(() => {
    Accelerometer.setUpdateInterval(20);
    const listener = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
    });

    return () => {
      listener && listener.remove();
    };
  }, []);

  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  if (!hasShaked && totalForce > 2) {
    setHasShaked(true);
    // trigger the fetch
  }
  const hue = 220 + totalForce * 30;

  return (
    <InfoContainer
      source={{
        uri:
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
      }}
    >
      <InfoText hue={hue}>Info Text</InfoText>
      <Text>{route.params.data.length}</Text>
      {/* <Text>
        x: {data.x} y: {data.y} z: {data.z}
      </Text> */}
      <Text>Total Force:{totalForce}</Text>
      {hasShaked && <Text>Shake!</Text>}
    </InfoContainer>
  );
};

export default InfoScreen;
