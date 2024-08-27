//1] get 메서드
//getElementById
let title = document.getElementById('title');
console.log(title);
title.textContent = '헬스 3대 운동';

//getElementByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[0]);

//getElementsByTagName
let liList = document.getElementsByTagName('li');
console.log(liList);

// 2] HTML 요소 쿼리
let h2 = document.querySelector('#title');
console.log('h2:', h2);

let item = document.querySelector('.item');
console.log('query item: ', item);

let itemAll = document.querySelectorAll('.item');
console.log('itemAll : ', itemAll);

//innerHTML - 요소 직접 넣기
h2.innerHTML = '<span>운동!</span>';

//innerHTML - 요소 가져오기
console.log(h2.textContent);

//textContent, innerHTML을 사용하면 모두 지워지기 때문에 주의해서 사용
