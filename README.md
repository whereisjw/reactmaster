# typescript

npx create-react-app my-app --template typescript

npm install --save typescript @types/node @types/react @types/react-dom @types/jest

styled-component 가 6버전이면 확장자면 tsx로 바꿔주면된다

```
import React from "react";
import styled from "styled-components";
const Container = styled.div``;
interface CircleProp {
  bgColor: string;
}
const Circle = ({bgColor}: CircleProp) => {
  return <Container bgColor={bgColor} />;
};

export default Circle;
```

### state

```
  const [value, setValue] = useState<number | string>(1);
  setValue(2);
  setValue("hello");
  setValue(true); //에러
```

state의 초기값으로 typescript는 state의 type을 추론한다

```
<number | string>
```

이런식으로 작성하면 value state는 넘버와 스트링 둘다 받을 수 있게되고
boolean 타입인 true값은 빨간줄로 에러표시를 한다

### form

```
import React, { useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="usename"
        />
        <button>Log in</button>
      </form>
    </>
  );
}

export default App;
```

자바스크립트와 리액트 문법에 form의 이벤트 문법에 typescript는 에러를 사전에 방지하기 위해 도움을 준다

###

style.d.ts 파일생성

```
// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;


    colors: {
      main: string;
      secondary: string;
    };
  }
}
```

styled-components 템플릿 복붙

주소 : https://styled-components.com/docs/api#typescript
