//Add buttons
const in_b=document.getElementById("income-button");
const ex_b=document.getElementById("expense-button");
//popups class
const popupi = document.getElementsByClassName("add-popi")[0];
const popupe = document.getElementsByClassName("add-pope")[0];
const editpop = document.getElementsByClassName("edit-pop")[0];
//submit buttons inform
const in_s=document.getElementById("income-submit");
const ex_s=document.getElementById("expense-submit");
//list and items
const itemList = document.getElementsByClassName("list")[0];
const item=document.getElementById("item");
list=[];
var i=0;
var editindex=null;
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
            let obj={};
            obj.id=i;   
            obj.ie="income";
            obj.type=t;
            obj.name=n;
            obj.amount=a;
            list.push(obj);
            i++;
            //add item to UI
            addItem(obj,i);
            //change con-head
        }
    }
    clearInputFieldsi();
    popupi.classList.toggle("show");
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
             //change con-head
        }
    }
    clearInputFieldse();
    popupe.classList.toggle("show");
});
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
    newItem.querySelector(".btn1").setAttribute("onclick", `edit('${object.id}')`);
    newItem.querySelector(".btn2").setAttribute("onclick", `del('${object.id}')`);
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
    if (list[index].ie=="income"){
        popupi.classList.toggle("show");
        document.getElementById("it").value = list[index].type;
        document.getElementById("in").value = list[index].name;
        document.getElementById("ia").value = list[index].amount;
    }
    else if(list[index].ie=="expense"){
        popupe.classList.toggle("show");
        document.getElementById("et").value = list[index].type;
        document.getElementById("en").value = list[index].name;
        document.getElementById("ea").value = list[index].amount;
    }
    //editpop.classList.toggle("show");
}
function del(index){
    let k="id";
    let val=parseInt(index);
    let objIndex = list.findIndex(
        (temp) => temp[k] === val
    );
    list.splice(objIndex,1);
    var d=document.getElementById(index);
    d.remove();
}

//for filter we can use hidden function