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


#Create
App function 하단부에 다음 코드를 추가한다.
```javascript
<a
        href="/create"
        onClick={(event) => {
          event.preventDefault();
          setMode('CREATE');
        }}
      >
        Create
      </a>
    </div>
```
Create라는 이름의 링크가 생성되고, 클릭할시 setMode값을 CREATE로 변경한다.

Create function을 추가한다.
```javascript
function Create() {
  //sumbit버튼을 누를 때 실행되는 함수
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(event) => {
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
```
onSubmit 함수는 submit타입 버튼을 누를 때 작동되는 함수이다.
빈칸으로 만들어두면 그냥 페이지가 리로드된다.
event.preventDefault();를 넣으면 페이지 리로드를 막을 수 있다.

event.target은 콜백함수를 감싸는 태그, 즉, form태그이므로
form태그의 title.value값은 아래에 있는 input태그의 title 값을 가리킨다.

probs.onCreate(title, body)를 통해 Create 컨테이너 내부에 존재하는
title, body값을 App 컨테이너의 Create 태그에 포함된 onCreate함수로 내보낸다.
이러한 방식으로 사용자가 입력한 title값과 body값을 Create 컴포넌트를 통해 공급받는 것이다.

지금까지 구동 순서를 정리하면 다음과 같다.

1. App 컨테이너의 onClick 메서드를 통해 Create링크를 클릭하면 setMode('CREATE')의 실행으로 App 컨테이너의 mode값이 Create로 변경된다.
2. 동시에  <Create onCreate={(title, body) => {
  }</Create>가 실행되고 Create 컴포넌트 메서드를 실행시킨다.
3. 사용자가 title과 body값을 입력하고 submit 버튼을 클릭할 경우
  form 태그의 onSubmit 메서드가 실행되고 입력한 값이
  App 컴포넌트의 <Create onCreate={(title, body) => { }</Create>로 받아와지는 것이다.
  

App으로 돌아가서 topics 부분을 보자.
사용자가 입력한 두 값이 4번째 id값으로 추가되어야 한다.
const로 선언된 topics를 useState 형태로 승격시킨다.
```javascript
function App() {
...
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4); // 추가된 부분
  const [topics, setTopics] = useState([  // 바뀐 부분
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ]);
...
```
topics는 읽기용, setTopics는 쓰기용 이름이다.

id값이 4번부터 추가되어야하므로 const[nextId, setNextId] = useState(4);를 추가했다.

App 컨테이너의 mode==='Create' 부분을 다음과 같이 변경한다.
```javascript
else if (mode === 'CREATE') {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode('READ');
          setId(nextId);
          setNextId(nextId+1);
        }}
      ></Create>
    );
  }
```
topics는 기존의 맵 형태로 이루어진 데이터 값의 모음이다.
newTopic은 추가할 항목,
newTopics는 [...topics]의 형태로 topics의 복제본을 할당받는다.
그리고 newTopics에 새로운 항목인 newTopic을 push하고
setTopics에 변경값인 newTopics를 넣어준다.

*왜 원본에다가 추가한 값을 변경값으로 넣지 않고 복제한 값에다 추가한 값을
변경값으로 넣는가? -> 리액트에서는 set...(변경값)을 호출했을 때 새로 들어온 데이터가 원본 데이터와 같은 경우 굳이 컴포넌트를 새로 랜더링하지 않기 때문이다. 

이제 Create를 누르고 값을 추가해서 submit를 클릭하면 입력한 값이
새로운 항목으로 추가되는 것을 확인할 수 있다. 

<hr/>

# Update

App 컨테이너 하단부를 다음과 같이 변경한다.
```javascript
<ul>
...
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
      </ul>

      <li>
        <a href="/update">Update</a>
      </li>
    </div>
      ```
update 링크를 mode가 read상태일때만 나타나도록 변경하고자 한다.

```javascript
function App() {

  let content = null;
  let contextControl = null;  //추가

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
    ======================// contextControl 추가
    contextControl = (
      <li>
        <a href={"/update"+id}>Update</a>
      </li>
    );
    ===================//
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
        {contextControl}  <========== 변경
      </ul>
    </div>
  );
}

export default App;

```
mode가 READ 상태일때만 Update링크가 나타나도록 변경되었다.

최종적으로 update기능을 구현하는 코드는 다음과 같다.
```javascript
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

...


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
            onChange={(event) => {  // 텍스트창에 값이 변경될 때 마다 실행되는 함수. title값을 갱신한다.
              console.log(event.target.value);
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
...

function App() {
...


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
          const updatedTopic = { id: id, title: title, body: body };
          const newTopics = [...topics];
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
  ...

```

<hr/>

# Delete

mode가 READ일 경우, delete기능을 담은 버튼을 만들고자 한다.
App 컴포넌트에 다음과 같은 코드를 추가한다.
```javascript
...
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

