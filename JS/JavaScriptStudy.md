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

# 데이터 타입
## typeof 연산자
* 데이터(값) 타입 반환
```javascript
var point = 123;
console.log(typeof point); //number

var book = "책";
console.log(typeof book); //string
```

# Number 타입
시맨틱: 의미를 부여하여 변수 이름을 작명하는 것

* 부호를(-, +)를 가진 값
* Number 타입의 특수한 3개값
 * NaN: Not-a-Number 숫자가 아닌 것을 나타내는 값.
 ```javascript
 var point = 1 * "A";
 console.log(point); // NaN
 ```
 infinity : 양수 무한대
 -infinity : 음수 무한대
 
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

# null undefined 차이점
* undefined는 단지 변수만 선언하면 default로 선언된다.
* null은 강제로 할당해야 값이 null이 된다.
* 의도적으로 값을 할당했는지 구분할 수 있다.

* 변수의 default값이란? -> 변수에 값을 할당하지 않은 것을 나타내는 시맨틱
```javascript
var point; 
console.log(point);// point
```

# Boolean 타입
진리값 : true, false

# Object 타입
{name: value} 형태
```javascript
var book = { title: "책", price: 1000 };
console.log(book);//{title:책, point: 1000}
```
property : name과 value하나를 지칭.
Object는 property의 집합.


 
