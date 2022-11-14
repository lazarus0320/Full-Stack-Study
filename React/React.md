# React

` index.js `, ` index.css ` => 전역적인 부분을 설정함. <br>
` App.js `, ` App.css ` => 메인 화면 부분을 설정함.


## 실행
터미널 => npm start
자동으로 localhost:3000 기본 브라우저가 열리면서 결과를 보여줌.
중단하려면 Ctrl+C

## 배포
터미널 => npm run build
build폴더와 그 안에 배포 파일들이 생성됨.

npx serve -s build : 어떤 경로든 상관없이 build 폴더에 있는 index.html파일을 서비스해줌.
http://localhost:3000로 이동하면 개발환경 버전이 아니라 실제 서비스된 버전의 결과물을 확인할 수 있음.


## 사용자 정의 태그 만들기

React : 사용자 정의 태그를 만드는 방식.
사용자 정의 태그를 만드는 예시
* 함수로 묶고, 스크립트는 return()안에다 적고, 함수 첫글자는 대문자로.
[App.js]
```javascript
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">html</a>
        </li>
        <li>
          <a href="/read/3">html</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;

```
react에서는 이러한 사용자 정의 태그를 ` 컴포넌트 `라고 부른다.
함수내의 코드를 바꾸면 해당 컴포넌트가 적용된 모든 부분이 동시에 변경되고,
컴포넌트의 이름으로 어떤 기능을 하는지 쉽게 암시를 줄 수 있는 장점이 있다.
시간복잡도를 줄이고, 컴포넌트를 공유할 수 있도록 하면서 생산성을 확보하게 되었다.


## prop
컴포넌트에 속성을 부여함.
위의 코드에서 App()과 Article의 컴포넌트를 다음과 같이 변경한다.
```javascript
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, REACT"></Article>
    </div>
  );
}
```
props로 속성값을 받고, {}처리된 값으로 표현하면 표현식으로 처리되기 때문에
컴포넌트 외부에서 지정한 속성값을 받아올 수 있다.

```javascript
import './App.css';

function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={'/read/' + t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'html is...' },
    { id: 3, title: 'javascript', body: 'javascript is...' },
  ];
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, REACT"></Article>
    </div>
  );
}

export default App;
```

## 이벤트
컴포넌트 사용자가 Header 컴포넌트를 클릭할 때 어떤 작업을 하는 가를 정의한다.
```javascript
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  console.log('props', props, props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); // 클릭할 때 리로드되는 것을 방지하는 함수
            props.onChangeMode(); // 아래에서 지정했던 함수를 
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id); // target : 이벤트를 유발시킨 태그를 가리킴. 여기서는 a태그가 됨.
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          //이 컴포넌트를 클릭할 때 실행되는 함수를 설정
          alert('Header');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
```


## state, crud(추가 및 수정 예정)
prop이 입력이라면 return이 새롭게 만들어지는 UI로 볼 수 있다.
컴포넌트 값을 다시실행해서 새로운 return값을 만들어주는 것을 state라고 한다. (컴포넌트를 만드는 내부자를 위한 데이터)

mode의 값이 무엇이냐에 따라서 본문의 내용을 다르게 만드려고 한다.
```javascript
function App() {
  const mode = 'WELCOME'; // mode값이 무엇인지에 따라 content에 다른 값을 부여하려고 한다.
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === 'READ') {
    content = <Article title="Read" body="Hello, Read"></Article>;
  }
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          //이 컴포넌트를 클릭할 때 실행되는 함수를 설정
          mode = 'WELCOME';
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          mode = 'READ';
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
```
하지만 이 코드를 실행시키고 각각의 링크를 눌러도 별 반응을 보이지는 않는다.<br>
mode값이 바뀌더라도 App 컴포넌트 함수가 새로 실행되지는 않기 때문이다.<br>
이때 사용하는 것이 바로 state이다. 컴포넌트 함수를 새로 실행시키고 UI에 반영되도록 도와줄 것이다.<br>

import { useState } from 'react'; 를 추가한다.
useState라는 hook은 리액트에서 기본적으로 제공된다.

```javascript
function App() {
  // const _mode = useState('WELCOME'); // useState의 인자는 그 state의 초기값
  // const mode = _mode[0]; // useState의 상태값을 읽는 방법
  // const setMode = _mode[1]; // state를 바꿀때는 1번째 인덱스값(함수값이 있음)으로 바꿈.
  const [mode, setMode] = useState('WELCOME'); // 위의 세 줄과 같음

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === 'READ') {
    content = <Article title="Read" body="Hello, Read"></Article>;
  }
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          //이 컴포넌트를 클릭할 때 실행되는 함수를 설정
          setMode('WELCOME'); // state값을 바꾼다
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode('READ');
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
```
리스트의 링크들을 클릭할 경우 title과 body의 내용도 state로 드변경시키는 코드

```javascript
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  console.log('props', props, props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); // 클릭해도 리로드 방지
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id)); // target : 이벤트를 유발시킨 태그를 가리킴. 여기서는 a태그가 됨.
          }}  //Number로 포맷팅 시키는 이유는 t.id가 id 태그에 들어가면서 문자열이 되었기 때문. 
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  // const _mode = useState('WELCOME'); // useState의 인자는 그 state의 초기값
  // const mode = _mode[0]; // useState의 상태값을 읽는 방법
  // const setMode = _mode[1]; // state를 바꿀때는 1번째 인덱스값(함수값이 있음)으로 바꿈.
  const [mode, setMode] = useState('WELCOME'); // 위의 세 줄과 같음
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === 'READ') {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          //이 컴포넌트를 클릭할 때 실행되는 함수를 설정
          setMode('WELCOME');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
```
