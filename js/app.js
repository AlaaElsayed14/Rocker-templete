
// toggle header button 
{const myButton = document.querySelector(".btn");

const myList = document.querySelector(".list");

myButton.addEventListener("click", show);

function show() {
    myList.classList.toggle("showList");
  }}


// show furniture dropdownlist
{const dropdown = document.querySelector("#drop-nav");
const dropdownList =document.querySelector(".dropdown-list");

dropdown.addEventListener("click" , listShow)

function listShow(){
  dropdownList.classList.toggle("show-list");
}}

// show dropdown inside furniture dropdown
{const dropTable1 = document.querySelector("#tables1");
const listTable1 = document.querySelector("#table-list1");

const dropTable2 = document.querySelector("#tables2");
const listTable2 = document.querySelector("#table-list2");

const dropTable3 = document.querySelector("#tables3");
const listTable3 = document.querySelector("#table-list3");

dropTable1.addEventListener("click", tableShow1)

function tableShow1(){
  listTable1.classList.toggle("table-details");
}

dropTable2.addEventListener("click", tableShow2)

function tableShow2(){
  listTable2.classList.toggle("table-details");
}

dropTable3.addEventListener("click", tableShow3)

function tableShow3(){
  listTable3.classList.toggle("table-details");
}}



  // toogle footer dropdown
{const myIcon1 = document.querySelector("#toggle-icon1");
const myIcon2 = document.querySelector("#toggle-icon2");
const myFooterList1 = document.querySelector(".list1");
const myFooterList2 = document.querySelector(".list2");

myIcon1.addEventListener("click", footerShow);
myIcon2.addEventListener("click", footerShow2);

function footerShow() {
    myFooterList1.classList.toggle("toggle");
}

function footerShow2() {
  myFooterList2.classList.toggle("toggle");
}}

