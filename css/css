#CSS STUDY
<hr/>

인라인, 내부, 외부 스타일 적용 방법

##1. CSS의 구조
```
h1 {
	color: blue;
}
```

h1: 선택자

color: 속성명

blue: 속성

=>어떠한 요소를 선택해서 어떠한 스타일 규칙을 적용하겠다.

##2. CSS 적용 방법

1. 인라인 스타일
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

2. 내부 스타일
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

3. 외부 스타일
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

##Cascading 우선순위
CSS : Cascading Style Sheet

 

Cascading : 폭포

폭포처럼 스타일이 우선순위에 맞게 연속적으로 적용된다.

HTML문서의 우선순위는

!important > 제작자 스타일(우리가 작성할) -> 브라우저 사용자 스타일 -> 브라우저 기본 스타일 순이다.

important 사용에 주의하자.
