# React

` index.js `, ` index.css ` => 전역적인 부분을 설정함.
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

function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <nav>
        <ol>
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
          <li>
            <a href="/read/3">js</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default App;

```

