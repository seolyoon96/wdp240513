//준비 이벤트 넣어주지 않아도됨
const item = document.querySelector('.item');

// console.log(item)
item.style.backgroundColor = 'blue';
item.style.transfrom = 'translate(100px, 100px) rotate(45deg) scale(1.5)';

// window.addEventListener('event', 함수);
window.addEventListener('scroll', function () {
  const item1 = document.querySelector('.item1');
  const item2 = document.querySelector('.item2');



  const scrolled = window.scrollY; //스크롤된 양

  console.log('스크롤 값', scrolled)
  console.log(`스크롤 값 ${scrolled}`)
  console.log(`스크롤 값의 50% ${scrolled * 0.5}`)

  item1.style.transfrom = `scale(${scrolled * 0.01})`;
  item2.style.transfrom = `tranlateX(${scrolled})`;
});