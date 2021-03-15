
var para = new URLSearchParams(window.location.search);
var pass = para.get("elemId");
var id;

switch(pass){
    case "card1":
        id=1;
        break;  
    case "card2":
        id=2;
        break;
    case "card3":
        id=3;
        break;        
    case "card4":
        id=4;
        break;    
    case "card5":
        id=5;
        break;
    case "card6":
        id=6;
        break; 
    case "card7":
        id=7;
        break; 
    case "card8":
        id=8;
        break;                   
}
fetch("/getProductObj",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:'{"id":'+id+'}'
})
 .then((response) => response.json())
 .then((responseObj) => {
    console.log(responseObj);

    prodid.innerHTML="Item"+responseObj.id;
    prodimg1.setAttribute("src",responseObj.src1);
    prodimg2.setAttribute("src",responseObj.src2);
    prodimg3.setAttribute("src",responseObj.src3);

    proddesc.innerHTML=responseObj.product_desc;
    prodprice.innerHTML="$"+responseObj.price;
    prodquantity.innerHTML=responseObj.quantity;

    document.getElementById("cover").remove();


 });



/*****************************/
function moveFn(){

}

/*******************************/
function logoutFN(){
    sessionStorage.logged=false;
    sessionStorage.welcome_string="";
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


