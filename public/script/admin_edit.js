
function logoutFN(){
    sessionStorage.logged=false;
    sessionStorage.first_name="";
    sessionStorage.admin=false;


}
if(sessionStorage.logged=="true"){
    //console.log("Trueeeeeeeeeeeeee");
    reg.remove();
    log.innerHTML="Log out";
    log.setAttribute("href","index.html");
    welc.innerHTML="Welcome "+sessionStorage.first_name;
    log.setAttribute("onclick","logoutFN()");
    profile.style.visibility = "visible";

}

async function editFn(){
    let valid=true;
    let Edit_info= {
        "id": prouct_name.value,
        "src":"img/f.jpf",
        "src1":"img/f.jpg",
        "src2":"img/ff.jpg",
        "src3":"img/fff.jpg",
        "price":price.value,
        "quantity":quantity.value,
        "product_desc" :myTextarea.value, 
    }
    console.log(Edit_info);



/*if(valid==true){
    console.log("Edit valid");
    let res=await fetch("/Edit/Admin",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(Edit_info)
    })
   
}
else{
    alert("Can't Added");
}*/
      fetch("/Edit/Admin",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(Edit_info)
    })
     .then((response) => response.json())
     .then((responseObj) => {
        window.location.href=responseObj.url;     

     });

}