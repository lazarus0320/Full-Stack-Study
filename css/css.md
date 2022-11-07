CSS STUDY
==============
<hr/>

인라인, 내부, 외부 스타일 적용 방법

## 1. CSS의 구조
```
h1 {
	color: blue;
}
```

h1: 선택자

color: 속성명

blue: 속성

=>어떠한 요소를 선택해서 어떠한 스타일 규칙을 적용하겠다.

## 2. CSS 적용 방법

### 1. 인라인 스타일
스타일을 꾸미고 싶은 요소에 CSS를 적용한다. 직접적으로 태그에 스타일을 적용. 여러 속성 적용시 ;로 구분. 현업에서 잘 안씀.
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 style="color: blue">제목</h1>
    <div style="width: 100px; height: 100px; border: 1px solid red"></div>
  </body>
</html>
```

### 2. 내부 스타일
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h1 {
        color: blue;
      }
      .content {
        border: 2px solid red;
        background-color: yellow;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h1>헬스</h1>
    <p class="content">오늘도 헬스장에서 운동을 합니다.</p>
  </body>
</html>
```

### 3. 외부 스타일
예시 : h1 태그와 article 클래스에 대한 속성 지정을 test.html 외부에서 해준다.
<styleTest.css>
```
h1 {
  color: blue;
}
.article {
  border: 1px solid black;
  padding: 30px;
}
```

<test.html>
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="styleTest.css" />
  </head>
  <body>
    <h1>코딩</h1>
    <p class="article">너무 잼있다!</p>
  </body>
</html>
```

styleTest.css의 스타일을 적용하기 위해 test.html내부에서 참조 링크를 걸어주면 된다.

굳이 여러번 스타일을 복붙할 필요없이 링크만 달아주면 해결되기 때문에 가장 편한 방법으로 사용된다.

## Cascading 우선순위

CSS : Cascading Style Sheet
Cascading : 폭포

폭포처럼 스타일이 우선순위에 맞게 연속적으로 적용된다.

HTML문서의 우선순위는

!important > 제작자 스타일(우리가 작성할) -> 브라우저 사용자 스타일 -> 브라우저 기본 스타일 순이다.

important 사용에 주의하자.



# 선택자 정리
<hr/>
전체선택자 에스트릭 : 모든 요소를 선택할 때 쓰는 전체 선택자. 브라우저의 기본 속성을 초기화 할 때 사용함.
```
<style>
      * {
        margin: 0; /*바깥쪽 여백*/
        padding: 0; /*안쪽 여백*/
      }
</style>
```

Type 선택자 : 특정 요소의 속성에 대해 통일된 값을 부여할 수 있음.

```
<style>
h2 {
	color: green;
}
</style>
```

h2 태그를 사용하는 모든 곳에 공통적으로 속성을 부여함.

 

class 선택자 : 특정 class값에만 공통적으로 속성을 부여함.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .red--text {
        color: red;
      }
      .blue--text {
        color: blue;
      }
    </style>
  </head>
  <body>
    <span class="red--text">동해물과 백두산이</span><br />
    <span class="blue--text">마르고 닳도록</span>
  </body>
</html>
```

id 선택자 : id 선택자는 웹문서에서 중복되지 않는 단 하나의 요소만을 선택할 수 있어야 함.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>good</title>
    <style>
      #title {
        font-size: 40px;
        color: darkslategray;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <span id="title">굿 아이디어!</span>
  </body>
</html>
```

속성 선택자 : 주어진 속성을 가진 모든 요소 검색함.
```
a[href] {
	color: purple;
}
/* <a>태그에 href속성이 존재하는 모든 요소들에 대해 적용함.*/

a[href='https://example.org'] {
	color: green;
}
/* <a>태그에 href속성이 "https://example.org" 값과 일치하는 모든 요소들에 대해 적용함.*/

a[href*='example'] {
	font-size: 2em;
}
/* <a>태그에 href속성이 "esample" 문자열을 포함하는 요소들에 적용함.*/

a[href^='www'] {
	font-size: italic;
}
/* <a>태그에 href속성이 "www"로 시작하는 요소.*/

a[href$='facebook.com'] {
	color: red;
}
/* <a>태그에 href속성이 "facebook.com"로 끝나는 요소.*/

a[class~='title'] {
	color: red;
}
/* <a>태그에 classr값이 'title'단어가 포함되는 요소.*/
 
```

그룹 선택자 : 여러가지 태그에 동시로 적용할 수 있음

```
h1, h2 {
	text-align: center;	/* 가운데 정렬*/
}
```

자손 결합자 : A 선택자 하위의 B 선택자를 모두 선택한다.

```
div span { /* div 하위의 모든 span 태그에 적용 */
	color: blue;
}
```

자식 결합자 : A의 바로 아래 자식인 모든 B요소를 선택한다.

```
div>span { /* div의 바로 하위에 있는 모든 span 태그에 적용 */
	color: blue;
}

/*참고*/
<div>	/* span은 div의 자식 요소, p는 div의 자손임. */
	<span>
    	<p> </p>
    </span>
<p>		/* p는 div의 형제 요소 (같은 선상이므로)*/
```

예시
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>good</title>
    <style>
      /*자손 결합자 */
      section li {
        color: blue;
      }
      section span {
        color: red;
      }
      /*자식 결합자 */
      section > ul > li {
        color: blue;
      }
    </style>
  </head>
  <body>
    <section>
      <h1>헬스</h1>
      <hr />
      <p>위키백과, 우리 모두의 백과사전.</p>
      <p>헬스(health)는 기본적으로 건강을 가리키며 그 외에 다음을 가리킨다.</p>
      <ul>
        <li>의료</li>
        <li>보건</li>
        <li>체력(게이밍)</li>
        <li>패션 헬스(Fashion health)</li>
        <li>헬스클럽(health club)</li>
        <li>구글 헬스: 구글이 제공하는 개인 의료 정보 서비스</li>
      </ul>
    </section>
    <hr />

    <section>
      <span>빨강 아님.</span>
      <p>문단 있음.</p>
      <span>빨강임.</span>
      <code>코드가 있음.</code>
      <span>이것도 빨강.</span>
    </section>
  </body>
</html>

``` 

 

일반 형제 결합자 : A ~ B : A와 형제요소이면서 B인 요소들에게만 스타일을 적용한다.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>good</title>
    <style>
      p ~ li {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>가나다라마바사</p>
    <ol>
      <li>가</li>
      <li>나</li>
    </ol>
    <p>ABCDEFG</p>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </body>
</html>

<p>랑 형제 요소인 <li>에 대해서만(같은 선상에 있는) 스타일을 적용한다.

``` 

 

인접 형제 결합자 : A+B : A와 바로 인접한 B 태그에 대해서만 스타일을 적용한다.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>good</title>
    <style>
      p + li {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>숫자</p>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </body>
</html>

<p>태그와 바로 인접한 첫번째 <li>태그에 대해서만 스타일을 적용했다.

```
