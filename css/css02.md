# CSS STUDY 02
<hr/>

## display 속성
HTML요소를 어떻게 표시할지를 결정.

display: block이면 Block Level Element이며, display: inline일 경우 inline Level Element.

 

-> 기본 4가지 값

* none : 요소를 보이지 않게 설정.
* block : 가로 영역을 모두 채움
* inline : 콘텐츠만큼 영역을 차지. 줄 바꿈 X. width, height지정 X
* inline-block : inline처럼 콘텐츠만큼 영역을 차지해 가로 배치 가능, block처럼 내부 속성인 width, height등과 같은 값은 변경 가능.

### block
```CSS
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div,
      h2 {
        border: 1px solid grey;
      }
    </style>
  </head>
  <body>
    <h1>Display Block</h1>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <h2>title</h2>
  </body>
</html>
```

기본적으로 display: block이기 때문에 content가 가로로 꽉 차며 세로로 배치된 것을 확인할 수 있다.

 

### inline
```CSS
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      span,
      a {
        border: 1px solid grey;
        display: inline;
      }
    </style>
  </head>
  <body>
    <h1>Display Inline</h1>
    <span>content</span>
    <a href="#">Naver</a>
  </body>
</html>
```
inline 태그인 span과 a태그를 사용해보았다.


콘텐츠만큼 영역을 차지하여 가로로 배치되는 것을 확인할 수 있다.

 

### none
```CSS
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      span,
      a {
        border: 1px solid grey;
        display: none;
      }
    </style>
  </head>
  <body>
    <h1>Display Inline</h1>
    <span>content</span>
    <a href="#">Naver</a>
  </body>
</html>
```
display: none;의 경우.


개발자 도구로 body탭을 들어가서 content영역에 마우스를 가져다 대도 아무것도 표시되지 않는 것을 확인할 수 있다.

 

display: none; 대신 visibility: hidden;을 먹이면 content가 눈에 보이지 않는 건 동일하다. 그러나 content영역이 남아있다는 차이가 있다.

 


div태그는 content가 block의 형태로 배열되므로 세로로,

span태그는 content가 inline 형태로 배열되므로 가로로 배열된다. 아래의 예시코드를 참조해보자.
```CSS
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div,
      span {
        border: 1px solid grey;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Display Inline</h1>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <span>content</span>
      <span>content</span>
      <span>content</span>
    </article>
  </body>
</html>
```

 

### inline-block
inline-border는 가로로 배치되며, width, height를 조정할 수 있다. 주로 웹사이트의 내비게이션 바를 만들 때 사용한다. 
```CSS
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      article > div,
      article > span {
        display: inline-block;
        width: 60px;
        height: 60px;
        border: 1px solid grey;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Display Inline</h1>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <span>content</span>
      <span>content</span>
      <span>content</span>
    </article>
  </body>
</html>
```
