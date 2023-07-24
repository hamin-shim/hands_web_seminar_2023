// js의 영역. javascript
const content = document.createElement("div");
content.className = "content";
content.innerHTML = "컨텐츠0";

const mainBox = document.getElementsByClassName("mainBox")[0];
// console.log(mainBox);

mainBox.appendChild(content);
// console.log(content);

// count function
const plusBtn = document.getElementById("plusBtn");
const count = document.getElementById("count");
const minusBtn = document.getElementById("minusBtn");

console.log(plusBtn, count, minusBtn);
let currentCount = 0;

// PlusBtn . 눌렀을 때 . count가 1이 커짐
plusBtn.addEventListener("click", onPlusClicked);
// click 이벤트가 실제로 벌어졌을 때, function을 수행하는 애

function onPlusClicked() {
  currentCount = currentCount + 1; //1
  console.log(currentCount);
  count.innerHTML = currentCount;
}

// MinusBtn(documet.getElementById). 눌렸을 때(addEventListener). count가 1이 작아짐(Minus function)
minusBtn.addEventListener("click", onMinusClicked);

function onMinusClicked() {
  currentCount = currentCount - 1;
  count.innerHTML = currentCount;
}
// 왼쪽 = 오른쪽 (오른쪽을 왼쪽에 대입해라)
// 등호는..? 우리가 알던 참거짓을 판별하는 등호는..?

// 등호 한개 : 대입
// 등호 세개 : 판단, 판별, 맞나 확인

// a = a +1
// a += 1
// a++
// 위의 세 문장은 완전히 동일.
