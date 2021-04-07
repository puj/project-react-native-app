import React, { useState } from 'react';
import styled from 'styled-components/native';
import Counter from '../components/Counter';
const Container = styled.View`
  /* This indicates one part */
  flex: 1;
`;

const TopContainer = styled.View`
  flex: 1;
`;

const BottomContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

const HomeImage = styled.ImageBackground`
  flex: 1;
  padding: 18px;
`;

const HomeScreen = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg'
  );
  // setImageUrl(json.pokemons[1].imageUrl)
  return (
    <Container>
      <TopContainer>
        {/* <img src="http://"></img> */}
        {/* <ImageBackground source={uri: "http://"}> */}
        <HomeImage
          source={{
            uri: imageUrl,
          }}
        ></HomeImage>
      </TopContainer>
      <BottomContainer>
        <Counter></Counter>
      </BottomContainer>
    </Container>
  );
};
export default HomeScreen;
