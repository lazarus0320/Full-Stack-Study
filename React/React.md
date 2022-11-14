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


