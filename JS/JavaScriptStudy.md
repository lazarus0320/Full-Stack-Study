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

# ===연산자 !==연산자
===는 양쪽 값과 타입이 모두 같으면 true, 값 또는 타입이 다르면 false
반대의 경우가 !==
```javascript
console.log(1 === 1); //true
console.log(1 === "1"); //false
console.log(undefined === null); //false
```



