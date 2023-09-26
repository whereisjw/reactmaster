import styled, { ThemeProvider, keyframes } from "styled-components";

function App() {
  const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
  `;
  const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
