
// 체크된 메뉴 인덱스 찾기
var checkIndex = [];

function addCheck(){
  let chs = document.getElementsByName("choose");
  checkIndex = [];
  for(var i=0; i<chs.length; i++){

      if(chs[i].checked==true){

         checkIndex.push(i);
      }
  }
  console.log(checkIndex);
}

// 찾은 인덱스 내 주문 옵션으로 불러오기

var showMyMenu = () => {
  removeAllchild(); // 초기화

  for(var i=0; i<checkIndex.length;i++){
    
    const foodName = document.getElementsByClassName("foodName")[checkIndex[i]].innerText;
    let price = document.getElementsByClassName("price")[checkIndex[i]].innerText;

    let Area = document.querySelector(".order_content");
    let orderList = document.createElement('div');
    orderList.setAttribute('class','orderList');

    let fn = document.createElement('div');
    fn.setAttribute('class','FN');

    let count = document.createElement('div');
    count.setAttribute('class','count');

    let amount = document.createElement('input');
    amount.setAttribute('type','number')
    amount.setAttribute('class','amount');    
    amount.setAttribute('value','1');
    amount.setAttribute('min','1');
    amount.setAttribute('onchange','sumPirce()')

    let p = document.createElement('div');
    p.setAttribute('class','P')

    Area.appendChild(orderList);
    orderList.appendChild(fn);
    orderList.appendChild(count);
    orderList.appendChild(p);
    count.appendChild(amount);

    fn.innerHTML = foodName;
    p.innerHTML = `${price}원`
  }

  sumPirce();
}

//초기화: order content 안에 생성된 자식 요소 모두 삭제하기 
var removeAllchild = () => {
  const Area = document.querySelector(".order_content");
  while ( Area.hasChildNodes() ){
     Area.removeChild( Area.firstChild );       
  };
}


// 내 주문 옵션에 불려온 가격 총합 구하기 + 변경된 수량값 계산하기
var sumP = document.querySelector(".sumP");
var sum;

var sumPirce = () => {
  
  sum = 0;
  var deliver_price = parseInt(document.getElementsByClassName("deliver_price")[0].innerText); 

  for(var i=0; i<checkIndex.length;i++) {
    const changePrice_area = document.getElementsByClassName("P")[i];
    const count = parseInt(document.getElementsByClassName("amount")[i].value);
    const price = parseInt(document.getElementsByClassName("price")[checkIndex[i]].innerText);
    sum += count * (price*1000) ;
    changePrice_area.innerText= `${count * price*1000}원`;
  }
  sum += deliver_price;
  
  sumP.innerText = `${sum}원`;
}

// const checkMin = () =>{
//   var min_price = (document.getElementById("min_price").innerText);
//   min_price = parseInt(min_price.replace(/[^0-9]/g, ''));
//   console.log(min_price, sum);
//   if(sum < min_price){
//     alert("총 금액이 최소 주문 금액보다 " +(min_price-sum) + "원 부족합니다!");
//   } else{
//     location.href="order_end.html";
//   }
// }

// 찜
var heart = document.querySelector(".heart");

var activeHeart = () => {
  const hasClass = heart.classList.contains("full");

  if(!hasClass){
    heart.classList.add("full");
    heart.innerText = "🧡"
  } else {
    heart.classList.remove("full");
    heart.innerText = "🤍"
  };
}