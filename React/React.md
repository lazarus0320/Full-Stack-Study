# React

## 구축
node.js 설치
vscdoe 터미널에

npx create-react-app .
.은 현재 경로를 지칭하는 표현임.


## 실행
터미널 => npm start
자동으로 localhost:3000 기본 브라우저가 열리면서 결과를 보여줌.
중단하려면 Ctrl+C

## 배포
터미널 => npm run build
build폴더와 그 안에 배포 파일들이 생성됨.

` index.js `, ` index.css ` => 전역적인 부분을 설정함. <br>
` App.js `, ` App.css ` => 메인 화면 부분을 설정함.

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
function Header(props) {
  console.log('props', props, props.title);
  return (
    // html 코드
    <header>
      <h1>
        <a href="/" onClick={function (event) {
            event.preventDefault(); // 클릭해도 리로드가 일어나지 않게 함
            props.onChangeMode(); // App 컴포넌트 <Header 태그의 onchangeMode 내부 함수를 호
        }}>{props.title}
        </a>
      </h1>
    </header>
  );
}

...

function App() {
  const topics = [
    // 객체 사용
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' },
  ];
  return (
    <div>
      <Header title="WEB" onChangeMode={function () {
        alert('Header');
        }}>
      </Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}
```


## state, crud(추가 및 수정 예정)
prop이 입력이라면 return이 새롭게 만들어지는 UI로 볼 수 있다.
컴포넌트 값을 다시실행해서 새로운 return값을 만들어주는 것을 state라고 한다. (컴포넌트를 만드는 내부자를 위한 데이터)

```javascript
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
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
            props.onChangeMode(Number(event.target.id));
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
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ]);
  let content = null;
  let contextControl = null;
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
    contextControl = (
      <>
        <li>
          <a
            href={'/update/' + id}
            onClick={(event) => {
              event.preventDefault();
              setMode('UPDATE');
            }}
          >
            Update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              const newTopics = [];
              for (let i = 0; i < topics.length; i++) {
                if (topics[i].id !== id) {
                  newTopics.push(topics[i]);
                }
              }
              setTopics(newTopics);
              setMode('WELCOME');
            }}
          />
        </li>
      </>
    );
  } else if (mode === 'CREATE') {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode('READ');
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode === 'UPDATE') {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          console.log(title, body);
          const newTopics = [...topics];
          const updatedTopic = { id: id, title: title, body: body };
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode('READ');
        }}
      ></Update>
    );
  }
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
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
      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode('CREATE');
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
```
