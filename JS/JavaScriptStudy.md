# 숫자 처리
정수와 실수를 구분하지 않음.<br>
` 64비트 부동 소수점 처리 `<br>
` IEEE754 표준 `

* 부동 소수점 처리란? 123을 123.0으로 처리하는 방식
```javascript
console.log(.123); // 0.123
console.log(0.12+5); // 5.12
```
  * .123처럼 소수점 앞에 값을 작성안하면 0.123으로 사용.
  * 정수와 실수를 구분하는 언어에서는 0.12 + 5연산이 불가능하나
  * JS에서는 정수와 실수를 구분하지 않고 실수로 계산된다.

<hr/>

# 데이터 타입
## typeof 연산자
* 데이터(값) 타입 반환
```javascript
var point = 123;
console.log(typeof point); //number

var book = "책";
console.log(typeof book); //string
```

<hr/>

# Number 타입
시맨틱: 의미를 부여하여 변수 이름을 작명하는 것

* 부호를(-, +)를 가진 값
* Number 타입의 특수한 3개값
 * NaN: Not-a-Number 숫자가 아닌 것을 나타내는 값.
 ```javascript
 var point = 1 * "A";
 console.log(point); // NaN
 ```
 * infinity : 양수 무한대
 * -infinity : 음수 무한대
 
<hr/>
# String 타입
"" 또는 ''사이에 값을 작성
 * 큰 따옴표와 작은 따옴표 같이 사용시
 ```javascript
 var value = "책, '123'";
console.log(value); // 책, '123'

var value = '책, "123"';
console.log(value); // 책, '123'
```

* 따옴표안에 숫자를 작성하면 문자 타입이 된다.
```javascript
var value = "123";
console.log(typeof value);// string;
```
<hr/>
# null undefined 차이점
* undefined는 단지 변수만 선언하면 default로 선언된다.
* null은 강제로 할당해야 값이 null이 된다.
* 의도적으로 값을 할당했는지 구분할 수 있다.

* 변수의 default값이란? -> 변수에 값을 할당하지 않은 것을 나타내는 시맨틱
```javascript
var point; 
console.log(point);// point
```
<hr/>
# Boolean 타입
진리값 : true, false

<hr/>
# Object 타입
{name: value} 형태
```javascript
var book = { title: "책", price: 1000 };
console.log(book);//{title:책, point: 1000}
```
property : name과 value하나를 지칭.
Object는 property의 집합.

<hr/>
# 숫자로 변환
연산전에 우선 숫자로 변환하고 연산한다.
Undefined: NaN
Null: +0
Boolean: true:1, false:0
Number: 변환 전/후 같음
String: 값이 숫자이면 숫자로 연산 단, 더하기(+)는 연결
```javascript
var value;
console.log(10 + value);// NaN  ---(1)
console.log(10 + null);//10
console.log(10 + true);//11
console.log(10 + false);//10
console.log(10 + "123");//10123 ---(2)
console.log(123 - "23");//100   ---(3)
```
⇒ (1):  value를 우선 숫자로 변환하지만, value는 undefined 이기에 NaN이 되고  10 + NaN은 NaN입니다.
⇒ (2): 산술 더하기 연산자의 경우 값이 숫자라도 타입이 String이면 문자열로 연결합니다. 
⇒ (3):  산술더하기를 제외한 나머지 산술연산자는 숫자로 변환하여 연산합니다. 

<hr/>
# 단항 연산자

형태 +value
값을 Number타입으로 변환
+를 더하기로 착각할 수 있다.
Number()로 값을 묶어줘도 같은 기능을 한다.
```javascript
var value = "7";
console.log(typeof value);//string
console.log(typeof +value);//number
console.log(typeof Number(value));//number
```

형태 -value
값의 부호를 바꿈
+는 -로, -는 +로 바꿈
연산할 때만 바꾸고 원래 값은 안 바꿈.
```javascript
var value = 7;
console.log(-value); // -7
console.log(8 + -value);// 1
console.log(value);//7
```

<hr/>
# ===연산자 !==연산자
===는 양쪽 값과 타입이 모두 같으면 true, 값 또는 타입이 다르면 false
반대의 경우가 !==
```javascript
console.log(1 === 1); //true
console.log(1 === "1"); //false
console.log(undefined === null); //false
```

<hr/>
# try-catch

try문에서 예외 발생 인식
예외 발생시 catch 블록 실행
finally 블록은 예외 발생과 관계없이 실행
```javascript
var value;
try{
	value = ball;
} catch(error){
	console.log("에러 발생");
} finally {
	console.log("무조건 실행");
}
//에러 발생
//무조건 발생
```
<hr/>
# Strict 모드
형태 : "use strict"
엄격하게 JS 문법 사용 선언
작성한 위치부터 적용됨.
ES5부터 지원

```javascript
//변수의 타입(var, let, const)이 작성되지 않은 형태
book = "책";
console.log(book);//책

"use strict"
try{
	book = "변수 선언하지 않음";
	console.log(book);
} catch(error){
	console.log(error.message);
}
```

<hr/>
# 함수
특정 기능을 처리하는 자바스크립트 코드 묶음

형태
```javascript
function add(a, b) {
 console.log(a+b);
};
add(1,2); // 3
```
 
* 규칙
 * 첫 문자
  - 영문자, $, _ 사용가능
  - 숫자나 다른 기호 사용 불가
 * 이름 관례
  - 동사로 시작. 코드를 읽지않아도 의미를 알 수 있도록.
  - 두개 이상의 단어 사용시 : 두 번째 단어부터 명사 사용
  - 명사의 첫 문자를 대문자로 사용 CamelCase 형태
  - 동사 + 명사 형태로 동적인 모습.

<hr/>
# 프로퍼티(Property)
형태 -> {name: value}
name에 프로퍼티 이름(key)를 작성. key에 따옴표 작성 생략
```javascript
{ a: 123, b: "ABC", c: true, d: {} }
{ book: function () {코드} }
```

## 프로퍼티 추가, 변경
```javascript
var obj = {};
obj.abc = 123;
obj["def"] = 456;
var key = "def";
console.log(obj[key]); // 456
```
obj 오브젝트에 프로퍼티 이름으로 abc가 있으면 value값이 123으로 변경되고,<br>
없으면 abc: 123 프로퍼티가 추가됨.

## 프로퍼티 값 추출
```javascript
var obj = {book: "책"}
var value = obj.book;
console.log(value); // 책
console.log(obj.book); // 책
console.log(obj.price); // undefined (이름이 없는 경우 반환됨)
```

## for~in문 활용한 프로퍼티 값 추출

* 형태<br>
 for(변수 in 오브젝트) 문장<br>
 for(표현식 in 오브젝트)문장<br>
* for(var item in sportc){코드}
 프로퍼티 이름이 item에 설정
 sports[item]으로 프로퍼티 값을 구함
 프로퍼티를 작성한 순서대로 읽혀진다는 것을 보장하지 않음.

```javascript
var sports = {
 soccer: "축구",
 baseball: "야구"
}
for(var item in sports){
 console.log(item); // soccer baseball
 console.log(sports[item]); // 축구 야
}
```
<hr/>
# 빌트인
## 개요
* 값 타입, 연산자, 오브젝트를 JS코드를 처리하는 영역에 사전에 만들어 놓는 것.

## 장점
* 사전 처리를 하지 않고 즉시 사용가능
* 자바스크립트 특징

## 빌트인 값 타입
* Undefined, Null, Boolean, Number, String, Object

## 빌트인 연산자
* +, -, *, /, %, ++, --, new 등

<hr/>
# 빌트인 오브젝트 유형

1. Number Object
	* 123과 같은 숫자, 상수, 지수
2. String Object
	* "abc"와 같은 문자열, 분리, 연결
3. Boolean Object
	* true, false
4. Object Object
	* {key: value} 형태로 프로퍼티를 처리하기 위한 형태
5. Array Object
	* [1, 2, "A", "ABC"]형태
6. Function Object
	* function abc(){} 형태
7. Math Object
	* abs(), round()등의 수학계산
8. Date Object
	* 연월일, 시분초
9. JSON Object
	* [{"name":"value"}] 형태, 서버와 데이터 송수신에 사용
10. RegExp Object
	* ^, $와 같은 정규표현식
11. 글로벌(Global) Object
	* 소스파일 전체에서 하나만 존재합니다.
	⇒ 전역적으로 사용되기에 인스턴스를 생성하는것이아닌 그대로 사용하는 것
	* 모든 코드에서 공유, 접근 가능
	* 전역 객체라고도 하며, 뉘앙스에 차이가 있다.


