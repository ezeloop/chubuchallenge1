let button1=document.querySelectorAll(".btn")[0]

let contentB1=button1.textContent


let button2=document.querySelectorAll(".btn")[1]

let contentB2=button2.textContent


let button3=document.querySelectorAll(".btn")[2]

let contentB3=button3.textContent


button1.addEventListener("click", () =>{
    alert(contentB1)
});

button2.addEventListener("click", () =>{
    alert(contentB2)
});

button3.addEventListener("click", () =>{
    alert(contentB3)
});




