//js구문
//함수는 특정 작업을 수향하는 코드 블록
function myF() {
  document.getElementById('demo').innerHTML = 'Hello javascript!!'


  const demo = document.querySelector('.demo')

  demo.innerHTML = 'Hello javascript!!'
  demo.style.color ='white'
  demo.style.fontSize ='30px'
  demo.style.backgroundColor ='blue'
  demo.style.transform = 'translate(200px, 500px) rotate(45deg) scale(1.5)'
}


//변수
//데이터를 저장하는 공간
//변수 선언(let, const, var)
let a = 20
a = 10
console.log(a)

const b = 30
// b = 40
console.log(b)


//데이터 타입
//숫자(number)
let num1 = 1
let num2 = 2
console.log(num1 + num2) //3이 출력


//문자열(string)
let str1 = '1'
let str2 = '2'
console.log(str1 + str2) //12가 출력(가나를 붙여쓰는 것으로 인식)


//불린(boolean)
const isTrue = true
const isFalse = false
console.log(isTrue, isFalse)


//객체(object)
const post = {
  img: 'https://images.unsplash.com/photo-1717496001989-0a0f32386d12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: '여행..가고싶다...',
}
console.log(post)
console.log(post.img) //이미지만 출력하고 싶을 떄
console.log(post.title) //타이틀만 출력하고 싶을 때


//배열(array)
//순서가 았눈 라스트
const arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(arr[0]) //1이 출력(0부터 카운트 시작)

const users = [
  {name: '홍길동', age: 20},
  {name: '김철수', age: 30},
  {name: '이영희', age: 40}
]
console.log(users[1]) //'{name: '김철수', age: 30}' 가 출력
console.log(users[1].name) //'김철수' 가 출력
console.log(`${users[1].name} 님 안녕하세요`) //'김철수 님 안녕하세요' 가 출력


//함수(function)
//기명함수
function 함수이름() {} //{안에 액션 값 필요}
함수이름() //함수실행


//익명함수
const fun1 = function () {
  console.log('fun1')
}
fun1()


//화살표함수
const fun2 = () => {
  console.log('fun2')
}
fun2()


//조건문
//if문
// const aa = 1
// const aa = 3
const aa = 2
// if (조건) {조건이 참일 때 실행될 코드}
if (aa === 1) {
  console.log('aa는 1입니다')
} else if (aa === 2) {
  console.log('aa는 2입니다')
} else {
  console.log('aa는 1이 아닙니다')
}
// if else문
// if (조건) {조건이 거짓일 때 실행될 코드}


//slide
let current = 0 //현재 슬라이드 위치 //let 재할당 가능, const 재할당 불가능
const lstSlide = document.querySelector('.slide ul');
const slideCount = document.querySelectorAll('.slide li').length;

console.log(slideCount) //3 //console은 제대로 적용되었는지 확인하는 방법
// console.log(lstSlide)
// lstSlide.style.border = '1px solid purple'

//3초마다 슬라이드가 넘어가도록
// setInterval(함수, 시간)
setInterval(function () {
  slide(); //슬라이드 함수 호출
}, 3000)

//슬라이드 함수 정의 및 생성
function slide() {
  // console.log('dd');

  //current 0, 1, 2
  // 0 * -100% = 0(left: 0)
  // 1 * -100% = -100%(left: -100%)
  // 2 * -100% = -200%(left: -200%)

  current = (current + 1) % slideCount //'3'은 슬라이드 갯수
  lstSlide.style.left = current * -100 + '%';
}