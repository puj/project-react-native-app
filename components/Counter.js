import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

// These attributes work for a horizontal direction:
// flex-flow: row nowrap;
// flex-direction: row; // Conflicts with `align-items: center`
const Container = styled.View`
  /* This indicates one part */
  flex: 1;
`;

const TopContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #222222;
`;

const TopText = styled.Text`
  font-size: 48px;
  color: #efefef;
`;

const BottomContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

const BottomText = styled.Text`
  font-size: 32px;
  color: #1f1f1f;
`;

const IncrementButton = styled.TouchableOpacity`
  /* Note, font-size does not work here since TO is a View */
  background-color: #aaaaee;
  padding: 8px;
  border-radius: 3px;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    console.log('Incremented');
    setCount(count + 1);
  };

  return (
    <Container>
      <TopContainer>
        <TopText>Our Counter App</TopText>
      </TopContainer>
      <BottomContainer>
        <IncrementButton onPress={onIncrement}>
          <Text>Add +1</Text>
        </IncrementButton>
        <BottomText>Total: {count}</BottomText>
      </BottomContainer>
    </Container>
  );
};
export default Counter;
