//Add buttons
const in_b=document.getElementById("income-button");
const ex_b=document.getElementById("expense-button");
//popups class
const popupi = document.getElementsByClassName("add-popi")[0];
const popupe = document.getElementsByClassName("add-pope")[0];
//submit buttons inform
const in_s=document.getElementById("income-submit");
const ex_s=document.getElementById("expense-submit");
//list and items
const itemList = document.getElementsByClassName("list")[0];
const item=document.getElementById("item");
list=[];
var i=0;
//on click for popup
in_b.addEventListener("click",function(){
    popupi.classList.toggle("show");
});
ex_b.addEventListener("click",function(){
    popupe.classList.toggle("show");
});
in_s.addEventListener("click",function(){
    const t=document.getElementById("it");
    const n =document.getElementById("in");
    const a  =document.getElementById("ia");
    if(t && n && a){
        let obj={};
        obj.id=i;   
        obj.ie="income";
        obj.type=t.value.trim();;
        obj.name=n.value.trim();;
        obj.amount=a.value.trim();;
        list.push(obj);
        i++;
        //add item to UI
        addItem(obj,i);
        //change con-head
    }
    clearInputFieldsi();
    popupi.classList.toggle("show");
});
ex_s.addEventListener("click",function(){
    const t=document.getElementById("et");
    const n=document.getElementById("en");
    const a=document.getElementById("ea");
    if(t&&n&&a){
        let obj={id:i,ie:"expense",type:t.value.trim(),name:n.value.trim(),amount:a.value.trim()};
        list.push(obj);   
        i++;
        //add item to UI       
        addItem(obj,i);
        //change con-head
    }
    clearInputFieldse();
    popupe.classList.toggle("show");
});
//add popup FOR EDIT
//edit i/e
//change header display
//filter
//pie chart
function addItem(object,index){
    const newItem = item.cloneNode(true);
    newItem.id = object.id;
    newItem.classList.remove("hidden");
    //newItem.querySelector(".btn").innerElement=newItem.createTextNode("edit");
    newItem.querySelector(".ie").innerText=object.ie || "N/A";
    newItem.querySelector(".type").innerText=object.type || "N/A";
    newItem.querySelector(".name").innerText=object.name || "N/A";
    newItem.querySelector(".amount").innerText=object.amount || "N/A";
    itemList.appendChild(newItem);
    debugger;
    // var newdiv=document.createElement("div");
    // newdiv.classList.add("items");
};
function clearInputFieldsi() {
    document.getElementById("it").value = "";
    document.getElementById("in").value = "";
    document.getElementById("ia").value = "";
}
function clearInputFieldse() {
    document.getElementById("et").value = "";
    document.getElementById("en").value = "";
    document.getElementById("ea").value = "";
}