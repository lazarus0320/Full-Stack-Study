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
 
## transform, transition
<hr/>
 
### transfrom
html요소의 회전, 크기 조절, 기울이기, 이동 효과

! 해당 요소의 display 속성이 block이나 inline-block일 경우 가능함.

* translate(tx, ty) - 지정한 크기만큼 x축, y축으로 이동함.
* translate(tx, ty) - tx, ty만큼 이동.
* translateX(tx) - tx만큼 x축 이동
* translateY(ty) - ty만큼 y축 이동
* scale(sx, sy) - x축 y축으로 확대, 축소
* scaleX(sx) - x축으로 확대 축소
* scaleY(sy) - y축으로 확대 축소
* rotate(각도) - 지정한 각도만큼 회전. +시계, -반시계
* rotateX(각도) - x축 기준으로 회전. 입체감 있게 표현하려면 perspective 속성을 부모 요소에 적용.
* rotateY(각도) - y축 기준으로 회전. 입체감 있게 표현하려면 perspective 속성을 부모 요소에 적용.
* rotateZ(각도) - z축 기준으로 회전. 입체감 있게 표현하려면 perspective 속성을 부모 요소에 적용.
* skew(ax, ay) - 지정한 각도만큼 x축 y축으로 왜곡.
* skew(ax) - 지정한 각도만큼 x축으로 왜곡.
* skew(ay) - 지정한 각도만큼 y축으로 왜곡.
 
 ```CSS
/* x축 20px 이동 */
transform translateX(20px);

/* y축 20px 이동 */
transform translateY(40px);

/* x축으로 20px, y축으로 40px 이동 */
transform translateY(20px, 40px);
 ```

### transition
속성 값이 변할 때 더욱더 부드럽게 전환할 수 있도록 도와줌.
 
transition-property: <속성1>, <속성2>; 와 같이 지정 가능.
 
* all - 모든 속성 지정.(생략 가능)
* none - 아무것도 지정하지 않음.
* transition-duration - 트랜지션 효과를 몇 초 동안 실행할 것인지 지정함.
* transition-delay - 지정한 초만큼 기다렸다가 실행할 때 사용

transition-timing-function - 트랜지션이 끝날때의 속도를 지정.

* linear - 시작과 끝의 속도를 일정하게
* ease-in - 천천히 시작했다가 완료될 때 속도 증가
* ease-out - 빨리 시작했다가 완료될 때 속도가 낮아짐.

 ```CSS
transition: all 2s ease-in;

transition: 2s ease-in;
/*2s 실행 시간 1s 지연 시간
transition: 2s 1s ease-in;
```
