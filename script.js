import {todayDeal} from "./todayDeal.js"
import {todayDeal2} from "./todayDeal2.js";


let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

console.log(imgItem.length-1)
let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100 // 700

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn(){
    if(startSlider < 0){
        startSlider = startSlider + 100;
    }
    
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click",handleRightBtn)

function handleRightBtn(){
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
    }
    
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
    
}

/***automation of slide*/
function renderSlideAuto(){

    if(startSlider >= -endSlider+100){
        handleRightBtn()
    }
    else{
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 6000);

/****sidebar navigation*/
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")

// console.log(sidebarNavigationEl)
sidebarOpenNavigationEl.addEventListener("click",()=>{
    sidebarNavigationEl.classList.toggle("slidebar-show")
})

sidebarCloseNavigationEl.addEventListener("click",()=>{
    sidebarNavigationEl.classList.toggle("slidebar-show")
})

///today deals
console.log(todayDeal)
let todayDealProductListEl = document.querySelector(".today_deals_product_list")
console.log(todayDealProductListEl)

let todayDealProductHTML = ""

let todayDealLength = todayDeal.length
for(let i = 0 ; i < todayDealLength ; i++)
{
    console.log(todayDeal[i])

    todayDealProductHTML += `
        <div class="today_deals_product_item">
            <div class = "todayDeals_product_image">
                <img src=${todayDeal[i].img} />
            </div>
            <div class="discount_Container">
                <a href="#">Up to ${todayDeal[i].discount}% off</a>
                <a href="#">${todayDeal[i].DealofDay}</a>
            </div>
            <p>${todayDeal[i].desc}</p>
        </div>
    `
}

todayDealProductListEl.innerHTML = todayDealProductHTML
// console.log(todayDealProductHTML)


let today_deal_btn_prevEl = document.getElementById("today_deal_btn_prev")
let today_deal_btn_nextEl = document.getElementById("today_deal_btn_next")
let today_deals_product_itemEl = document.querySelectorAll(".today_deals_product_item")

let startProduct = 0;

today_deal_btn_prevEl.addEventListener("click",()=>{
    
    if(startProduct < 0)
    {
        startProduct += 500
    }
    if(startProduct > -2000)
    {
        today_deals_product_itemEl.forEach(el =>{
        el.style.transform = `translateX(${startProduct}%)`
        })
    }
})

today_deal_btn_nextEl.addEventListener("click",()=>{
    

    
    if(startProduct > -1500)
    {
        startProduct -= 500
    }
    today_deals_product_itemEl.forEach(el =>{
        el.style.transform = `translateX(${startProduct}%)`
    })
    
    
})

///slider 2 up to 75% off deals
const discount75ProductList = document.querySelector(".discount75_deals_product_list");

todayDeal2.forEach(item => {
  const dealItem = document.createElement("div");
  dealItem.className = "discount75_deals_product_item";
  dealItem.innerHTML = `
    <img src="${item.img}" alt="">
    <div class="deal-details">
      <p class="deal-of-day">${item.DealofDay}</p>
      <p class="discount">Up to ${item.discount}% off</p>
      <p class="desc">${item.desc}</p>
    </div>
  `;
  discount75ProductList.appendChild(dealItem);
});

// Step C: Implement slider movement
// Slider 2: Up to 75% off deals

const btnPrev75 = document.getElementById("discount75_deal_btn_prev");
const btnNext75 = document.getElementById("discount75_deal_btn_next");
const productList75 = document.querySelector(".discount75_deals_product_list");
const productContainer75 = document.querySelector(".discount75_deals_product_container");
const productItems75 = document.querySelectorAll(".discount75_deals_product_item");

let scrollX75 = 0;

// Get the width of one product item including margin (adjust margin if needed)
const productWidth75 = productItems75[0].offsetWidth + 10;

// Number of items to scroll per click
const itemsToScroll75 = 4;

const scrollAmount75 = productWidth75 * itemsToScroll75;

// Maximum scroll amount
const maxScrollX75 = (productItems75.length * productWidth75) - productContainer75.offsetWidth;

btnNext75.addEventListener("click", () => {
  scrollX75 = Math.min(scrollX75 + scrollAmount75, maxScrollX75);
  productList75.style.transform = `translateX(-${scrollX75}px)`;
  productList75.style.transition = "transform 0.5s ease";
});

btnPrev75.addEventListener("click", () => {
  scrollX75 = Math.max(scrollX75 - scrollAmount75, 0);
  productList75.style.transform = `translateX(-${scrollX75}px)`;
  productList75.style.transition = "transform 0.5s ease";
});


