const in_b=document.getElementById("income-button");
const ex_b=document.getElementById("expense-button");
list=[
    //each as income/expense,id,amount,type,describtion
   // {id: ,ie: ,type: ,dis: ,amount:}

];
let i=0;
//on click
in_b.addEventListener("click",function(){
    const popup = document.getElementsByClassName("add-popi")[0];
    popup.classList.toggle("show");
    // add the income to list
    const sub_i=document.getElementById("income-submit");
    sub_i.addEventListener("click",function(){
        list[i].id=i;
        list[i].ie="income";
        

    });
});
ex_b.addEventListener("click",function(){
    const popup = document.getElementsByClassName("add-pope")[0];
    popup.classList.toggle("show");
    // add the expense to list
    const sub_e=document.getElementById("expense-submit");
    sub_e.addEventListener("click",function(){

    });
});

// add income
// add expense
//add popup
//edit i/e
//change header display