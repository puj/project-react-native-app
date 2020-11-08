import React, { useState } from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

// Basic Components - React Native Overview
// https://reactnative.dev/docs/components-and-apis

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #3f3f3f;
`;

const TopContainer = styled.View`
  flex: 1;
  background-color: #1f1f1f;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TopHeader = styled.Text`
  font-size: 48px;
  color: #efefef;
`;

const BottomContainer = styled.View`
  flex: 3;
  background-color: #ffffff;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const BottomText = styled.Text`
  font-size: 32px;
  color: #1f1f1f;
`;

const IncrementButton = styled.TouchableOpacity`
  background-color: #aaaaee;
  padding: 8px;
  border-radius: 3px;
`;

const App = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      <TopContainer>
        <TopHeader>Counter App</TopHeader>
      </TopContainer>
      <BottomContainer>
        <IncrementButton onPress={onIncrement}>
          <BottomText>Add +1</BottomText>
        </IncrementButton>
        <BottomText>Total: {count}</BottomText>
      </BottomContainer>
    </Container>
  );
};

export default App;
