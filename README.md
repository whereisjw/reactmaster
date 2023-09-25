# styled-component

### vscode-styled-components

익스텐션다운로드

### npm install styled-components

터미널 입력

```
import styled from "styled-components";
function App() {
  const Father = styled.div`
    display: flex;
  `;
  const Boxone = styled.div`
    background-color: teal;
    width: 100px;
    height: 100px;
  `;
  const Boxtwo = styled.div`
    background-color: tomato;
    width: 100px;
    height: 100px;
  `;
  return (
    <Father>
      <Boxone></Boxone>
      <Boxtwo></Boxtwo>
    </Father>
  );
}
```

styled-component를 이용해 컴포넌트를 생성해 css를 꾸밀 수 있다.
하지만 위 처럼 코드를 작성할 경우 중복되는 값은 복붙으로 입력해야한다.

```
import styled from "styled-components";
function App() {
  const Father = styled.div`
    display: flex;
  `;
  const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
  `;
  const CIrcle = styled(Box)`
    border-radius: 50%;
  `;

  return (
    <Father>
      <Box bgColor="teal"></Box>
      <CIrcle bgColor="tomato"></CIrcle>
    </Father>
  );
}
```

```
const 새로운컴포넌트명 = styled(기존컴포넌트명)`   border-radius: 50%;
`;
```

이 처럼 작성하면 styled-component를 확장성있게 사용 할 수 있다.

### as를 이용한 태그 변화

```
  const Father = styled.div`
    display: flex;
  `;
```

div태그를가진 Father스타일 컴포넌트를

```
    <Father as="header">
    </Father>
```

as속성을 이용해 바꿀 수 있다

### attrs를 이용한 attribute 적용

```
 const Input = styled.input.attrs({ required: true, minLength: "10" })`
    background: tomato;
  `;
```

### styled.component로 react animation주기

```
import styled, { keyframes } from "styled-components";

function App() {
  const Wrapper = styled.div`
    display: flex;
  `;
  const rotationAnimation = keyframes`
  from{
transform: rotate(0deg);
border-radius: 0;
  }
  to{
transform: rotate(360deg);
border-radius: 100px;
  }
  `;
  const Box = styled.div`
    width: 200px;
    height: 200px;
    background: tomato;
    animation: ${rotationAnimation} 1s linear infinite;
  `;
  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
}

export default App;
```

from to 로 animation을 줄수있고 반드시

#### keyframes

를 import해야한다

### sass처럼 하위태그에 속성주기,Pseudo selector주는법

```
    <Box>
        <span>😊</span>
      </Box>
```

styled-component로 만든 컴포넌트 안에 일반 태그도 넣을 수 있다.

```
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
```

사스처럼 css값에 바로 적어서 중괄호로 닫으면 scss처럼 css적용이 가능하다 또한 sass에서 현재 태그 자신을 나타낼때 쓰는 엠퍼센드(&)기호를 쓰는 것도 가능하다.
