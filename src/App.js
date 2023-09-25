import styled, { keyframes } from "styled-components";

function App() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
  `;
  const rotationAnimation = keyframes`
  0%{
transform: rotate(0deg);
border-radius: 0;
  }
  50%{
transform: rotate(360deg);
border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
border-radius: 0;
  }
  `;
  const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background: tomato;
    animation: ${rotationAnimation} 1s linear infinite;
    span {
      font-size: 36px;
      &:hover {
        font-size: 72px;
      }
      &:active {
        opacity: 0;
      }
    }
  `;
  return (
    <Wrapper>
      <Box>
        <span>😊</span>
      </Box>
    </Wrapper>
  );
}

export default App;
