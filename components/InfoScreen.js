import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import backgroundImage from "../assets/background.jpg";
import { Text } from "react-native";
import { Accelerometer } from "expo-sensors";

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const InfoText = styled.Text`
  font-size: 48px;
  ${(props) => `transform: translate(${props.xOffset}px, ${props.yOffset}px) `};
`;

const InfoScreen = ({ navigation, route }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    Accelerometer.setUpdateInterval(20);
    const listener = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
    });

    return () => {
      listener && listener.remove();
    };
  }, []);

  let { x, y, z } = data;
  let xOffset = x * -60 || 0;
  let yOffset = z * -120 || 0;
  return (
    <InfoContainer source={backgroundImage}>
      <InfoText xOffset={xOffset} yOffset={yOffset}>
        Info Screen
      </InfoText>
      <Text>{route.params.data}</Text>
      <Text>
        x: {x} y: {y} z: {z}
      </Text>
    </InfoContainer>
  );
};

export default InfoScreen;
