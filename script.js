//Add buttons
const in_b=document.getElementById("income-button");
const ex_b=document.getElementById("expense-button");
//popups class
const popupi = document.getElementsByClassName("add-popi")[0];
const popupe = document.getElementsByClassName("add-pope")[0];
const editpop = document.getElementsByClassName("edit-pop")[0];
//submit buttons form
const in_s=document.getElementById("income-submit");
const ex_s=document.getElementById("expense-submit");
//list and items
const itemList = document.getElementsByClassName("list")[0];
const item=document.getElementById("item");
list = JSON.parse(localStorage.getItem("list")) || [];
var i=list.length;
var editindex=null;
//balance,income,expense(header)let balance=0;
let balance=parseInt(localStorage.getItem("amount")) || 0 ;
let income_a=parseInt(localStorage.getItem("income_a")) || 0;
let expense_a=parseInt(localStorage.getItem("expense_a")) ||0;
//on click for popup
in_b.addEventListener("click",function(){
    popupi.classList.toggle("show");
});
ex_b.addEventListener("click",function(){
    popupe.classList.toggle("show");
});
in_s.addEventListener("click",function(){
    const t=document.getElementById("it").value.trim();
    const n =document.getElementById("in").value.trim();
    const a  =document.getElementById("ia").value.trim();
    if(t && n && a){
        if(editindex != null){
            list[editindex]={id:editindex,ie:"income",type:t,name:n,amount:a};
            editItem(list[editindex],editindex);
            editindex=null;
        }
        else {
            //let obj={};obj.id=i;    obj.ie="income";obj.type=t;obj.name=n;obj.amount=a;
            let obj={id:i,ie:"income",type:t,name:n,amount:a};
            list.push(obj);
            i++;
            //add item to UI
            addItem(obj,i);
        }
        localStorage.setItem("list", JSON.stringify(list));
        //change con-head
        balance+=parseInt(a);
        income_a+=parseInt(a);
        debugger;
    }
    clearInputFieldsi();
    popupi.classList.toggle("show");
    refreshFilter();
    bal(balance,income_a,expense_a);
    
});
ex_s.addEventListener("click",function(){
    const t=document.getElementById("et").value.trim();
    const n=document.getElementById("en").value.trim();
    const a=document.getElementById("ea").value.trim();
    if(t && n && a){
        if(editindex != null){
            list[editindex]={id:editindex,ie:"expense",type:t,name:n,amount:a};
            editItem(list[editindex],editindex);
            editindex=null;
        }
        else {
            let obj={id:i,ie:"expense",type:t,name:n,amount:a};
            list.push(obj);   
            i++;
            //add item to UI       
            addItem(obj,i);
            //display(obj);
        }
        localStorage.setItem("list", JSON.stringify(list));
        //change con-head
        balance-=parseInt(a);
        expense_a+=parseInt(a);
    }
    clearInputFieldse();
    popupe.classList.toggle("show");
    refreshFilter();
    bal(balance,income_a,expense_a);
});
function addItem(object){
    const newItem = item.cloneNode(true);
    newItem.id = object.id;
    newItem.classList.remove("hidden");
    //newItem.querySelector(".btn").innerElement=newItem.createTextNode("edit");
    newItem.querySelector(".ie").innerText=object.ie || "N/A";
    newItem.querySelector(".type").innerText=object.type || "N/A";
    newItem.querySelector(".name").innerText=object.name || "N/A";
    newItem.querySelector(".amount").innerText=object.amount || "N/A";
    newItem.querySelector(".btn1").setAttribute("onclick", `edit('${object.id}')`);
    newItem.querySelector(".btn2").setAttribute("onclick", `del('${object.id}')`);
    newItem.classList.add(object.ie);
    itemList.appendChild(newItem);
    // var newdiv=document.createElement("div");
    // newdiv.classList.add("items");
};
function editItem(object,index){
    //also can use let str = `${index}`;
    var change=document.getElementById(index);
    change.querySelector(".ie").innerText=object.ie || "N/A";
    change.querySelector(".type").innerText=object.type || "N/A";
    change.querySelector(".name").innerText=object.name || "N/A";
    change.querySelector(".amount").innerText=object.amount || "N/A";
    change.querySelector(".btn1").setAttribute("onclick", `edit('${object.id}')`);
    change.querySelector(".btn2").setAttribute("onclick", `del('${object.id}')`);
}
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
function edit(index){
    editindex=index;
    if (list[index].ie== "income"){
        popupi.classList.toggle("show");
        document.getElementById("it").value = list[index].type;
        document.getElementById("in").value = list[index].name;
        document.getElementById("ia").value = list[index].amount;
        balance-=parseInt(list[index].amount);
        income_a-=parseInt(list[index].amount);
    }
    else if(list[index].ie=="expense"){
        popupe.classList.toggle("show");
        document.getElementById("et").value = list[index].type;
        document.getElementById("en").value = list[index].name;
        document.getElementById("ea").value = list[index].amount;
        balance+=parseInt(list[index].amount);
        expense_a-=parseInt(list[index].amount);
    }
    debugger;
}
function del(index){
    let k="id";
    let val=parseInt(index);
    let objIndex = list.findIndex(
        (temp) => temp[k] === val
    );
    if(list[objIndex].ie=="income"){
        balance-=parseInt(list[objIndex].amount);
        income_a-=parseInt(list[objIndex].amount);
    }
    else if(list[objIndex].ie=="expense"){
        balance+=parseInt(list[objIndex].amount);
        expense_a-=parseInt(list[objIndex].amount);
    }
    list.splice(objIndex,1);
    localStorage.setItem("list", JSON.stringify(list));
    var d=document.getElementById(index);
    d.remove();
    bal(balance,income_a,expense_a);
}
function filter(cat){
    //classes income and expense
    const nListin=document.querySelectorAll(".income");
    const nListex=document.querySelectorAll(".expense");
    if(cat=="all"){       
        for(j=0;j<nListin.length;j++){
            nListin[j].classList.remove("hidden");
        }      
        for(j=0;j<nListex.length;j++){
            nListex[j].classList.remove("hidden");
        }
    }
    else if(cat=="income"){
        for(j=0;j<nListin.length;j++){
            nListin[j].classList.remove("hidden");
        }      
        for(j=0;j<nListex.length;j++){
            nListex[j].classList.add("hidden");
        }
    }
    else if(cat=="expense"){
        for(j=0;j<nListin.length;j++){
            nListin[j].classList.add("hidden");
        }      
        for(j=0;j<nListex.length;j++){
            nListex[j].classList.remove("hidden");
        }
    }
}
function refreshFilter(){
    let x=document.getElementsByName("f");
    x[0].checked= true;
    for(var j=1;j<x.length;j++){
        x[j].checked = false;
    }
    filter("all");
}
//clear list
function clearAll(){
    //classes income and expense
    const nListin=document.querySelectorAll(".income");
    const nListex=document.querySelectorAll(".expense");
    list=[];
    blist=[];
    i=0;
    balance=0;
    income_a=0;
    expense_a=0;
    bal(balance,income_a,expense_a);
    for(j=0;j<nListin.length;j++){
        nListin[j].remove();
    }      
    for(j=0;j<nListex.length;j++){
        nListex[j].remove();
    }
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("amount",0);
    localStorage.setItem("income_a",0);
    localStorage.setItem("expense_a",0);
}
//dynamic balance
function bal(b,inc,ex){
    document.getElementById("s1").textContent=b;
    document.getElementById("s2").textContent=inc;
    document.getElementById("s3").textContent=ex;
    localStorage.setItem("amount",b);
    localStorage.setItem("income_a",inc);
    localStorage.setItem("expense_a",ex);   
    debugger;
}
//reload().addEventListener("click")
// reload the current page
//window.location.reload();
function display(list){
    list.forEach(function (object) {
        const newItem = item.cloneNode(true);
        newItem.id = object.id;
        newItem.classList.remove("hidden");
        //newItem.querySelector(".btn").innerElement=newItem.createTextNode("edit");
        newItem.querySelector(".ie").innerText=object.ie || "N/A";
        newItem.querySelector(".type").innerText=object.type || "N/A";
        newItem.querySelector(".name").innerText=object.name || "N/A";
        newItem.querySelector(".amount").innerText=object.amount || "N/A";
        newItem.querySelector(".btn1").setAttribute("onclick", `edit('${object.id}')`);
        newItem.querySelector(".btn2").setAttribute("onclick", `del('${object.id}')`);
        newItem.classList.add(object.ie);
        itemList.appendChild(newItem);
    });
}
function displayb(){
    document.getElementById("s1").textContent=localStorage.getItem("amount");
    document.getElementById("s2").textContent=localStorage.getItem("income_a") ;
    document.getElementById("s3").textContent=localStorage.getItem("expense_a") ;
}
// storage display
display(list);
displayb();

