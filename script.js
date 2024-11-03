const in_b=document.getElementById("income-button");
const ex_b=document.getElementById("expense-button");
//popups
const popupi = document.getElementsByClassName("add-popi")[0];
const popupe = document.getElementsByClassName("add-pope")[0];
//on click for popup
in_b.addEventListener("click",function(){
    popupi.classList.toggle("show");
});
ex_b.addEventListener("click",function(){
    popupe.classList.toggle("show");
});
list=[];
const in_s=document.getElementById("income-submit");
const ex_s=document.getElementById("expense-submit");
var i=0;
in_s.addEventListener("click",function(){
    const t=document.getElementById("it");
    const n =document.getElementById("in");
    const a  =document.getElementById("ia");
    if(t && n && a){
        let obj={};
        obj.id=i;   
        obj.ie="income";
        obj.type=t;
        obj.name=n;
        obj.amount=a;
        list.push(obj);
        i++;
        //add item to items
        //change con- head
    }
    popupi.classList.toggle("show");
});
ex_s.addEventListener("click",function(){
    const t=document.getElementById("et");
    const n=document.getElementById("en");
    const a=document.getElementById("ea");
    if(t&&n&&a){
        let obj={id:i,ie:"expense",type:t,name:n,amount:a};
        list.push(obj);   
        i++;
        debugger;
        //add item to items
        //change con-head
    }
    popupe.classList.toggle("show");
});

// add income
// add expense
//add popup
//edit i/e
//change header display
// list=[
//     //each as income/expense,id,amount,type,describtion
//    // {id: ,ie: ,type: ,name: ,amount:}

// ];