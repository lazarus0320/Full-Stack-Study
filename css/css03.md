# CSS STUDY 03

## 고급 선택자
</hr>

### 가상 클래스
선택하고자 하는 html 요소의 특별한 상태를 명시할 때 사용함.

선택자:가상클래스이름 {속성: 속성값;}


* :link - 아직 방문하지 않은 요소를 나타냄. href 속성을 가진 <a> <area> <link>중 방문하지 않은 모든 요소를 선택함.
* :visited - 사용자가 방문한 적 있는 링크를 나타냄.
* :active - 사용자가 활성화한 요소(버튼 등)를 나타냄.
* :hover - 사용자의 마우스 포인터가 요소 위에 올라가 있으면 선택.
* :focus - 양식의 입력 칸 등 포커스를 받은 요소를 나타냄. 사용자가 클릭, 탭하거나 tab키로 선택됐을 경우 발동.
* :nth-child(n) - 형제 요소 사이에서 n번째 순서에 있는 요소들을 선택함. even(짝수), odd(홀수)
* :not(selector) - not(selector) 안에 포함된 요소를 제외시킴.
 

가상 클래스 사용 순서 : link -> visited -> hover -> active 순으로 선언해서 사용.

 

예제 코드
  ```CSS
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      a {
        font-size: 30px;
      }

      a:visited {	<!-- 방문된 사이트 -->
        color: red;
      }

      a:hover {		<!-- 마우스가 올라갈 때 -->
        color: blue;
        font-weight: 900;
      }

      li:nth-child(3) {	<!-- 세번째 요소 -->
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <fieldset>
      <legend>가상 클래스</legend>
      <div>
        <a href="https://naver.com">네이버</a>
        <a href="https://kakao.com">카카오</a>
      </div>
    </fieldset>

    <fieldset>
      <ul>
        <li>content1</li>
        <li>content2</li>
        <li>content3</li>
        <li>content4</li>
        <li>content5</li>
      </ul>
    </fieldset>
  </body>
</html>
```
  
### 가상 요소
  
html 요소의 특정 부분만 선택
 
선택자::가상요소이름 {속성: 속성값;}

* ::first-letter - 택스트의 첫 글자만 선택(block-level-element에서만 사용가능)
* ::first-line - 택스트의 첫 라인만 선택(block-level-element에서만 사용가능)
* ::before - 특정 요소의 내용 부분 바로 앞에 다른 요소를 삽입할 때 사용
* ::after - 특정 요소의 내용 부분 바로 뒤에 다른 요소를 삽입할 때 사용
* ::selection - 해당 요소에서 사용자가 선택한 부분만을 선택할 때 사용.
 

예시 코드
```CSS
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .required::before {
        content: 'ggg';
        margin-right: 2px;
        color: red;
        font-size: 16px;
      }
      .letter::first-letter {
        font-size: 60px;
        color: blue;
      }
    </style>
  </head>
  <body>
    <label class="required" for="age">나이</label>
    <input type="text" id="name" /><br />
    <label for="name">이름</label>
    <input type="text" id="name" />

    <p class="letter">abcdefg, hijklmnop. qrstuv, wxyz.</p>
  </body>
</html>
```
