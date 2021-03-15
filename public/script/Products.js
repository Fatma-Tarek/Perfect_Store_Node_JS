//filterFN()
/*
let cards=[];
async function getCardsData(){

    let res= await fetch("/products");
    let resObj=await res.json();
    cards=resObj;
    console.log(cards);

}

getCardsData();*/
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

    if(sessionStorage.admin=="true"){
        // 1. Create the button
        var button = document.createElement("button");
        button.innerHTML = "Add New Product";

        // 2. Append somewhere
        var body = document.getElementsByTagName("article")[0];
        body.appendChild(button);

        // 3. Add event handler
        button.addEventListener ("click", function() {
        alert("did something");
        });
        }
    }

async function viewFn(ev){
}
const viewElem= (ev)=>{
    console.log(ev.target.id);
    const elemId=ev.target.id;
    var para = new URLSearchParams();
    para.append("elemId", elemId);
    location.href = "/productDetail.html?" + para.toString();

};


card1.addEventListener("click",viewElem);
card2.addEventListener("click",viewElem);
card3.addEventListener("click",viewElem);
card4.addEventListener("click",viewElem);
card5.addEventListener("click",viewElem);
card6.addEventListener("click",viewElem);
card7.addEventListener("click",viewElem);
card8.addEventListener("click",viewElem);





let cards=[];
fetch("/products")
.then((response) => response.json())
.then((responseObj) => {
    cards=responseObj;
    
    console.log(cards);
    prod1img.setAttribute("src",cards[0].src);
    prod2img.setAttribute("src",cards[1].src);
    prod3img.setAttribute("src",cards[2].src);
    prod4img.setAttribute("src",cards[3].src);
    prod5img.setAttribute("src",cards[4].src);
    prod6img.setAttribute("src",cards[5].src);
    prod7img.setAttribute("src",cards[6].src);
    prod8img.setAttribute("src",cards[7].src);

    prod1id.innerHTML=cards[0].id+" item";
    prod2id.innerHTML=cards[1].id+" item";
    prod3id.innerHTML=cards[2].id+" item";
    prod4id.innerHTML=cards[3].id+" item";
    prod5id.innerHTML=cards[4].id+" item";
    prod6id.innerHTML=cards[5].id+" item";
    prod7id.innerHTML=cards[6].id+" item";
    prod8id.innerHTML=cards[7].id+" item";


    prod1price.innerHTML="$"+cards[0].price;
    prod2price.innerHTML="$"+cards[1].price;
    prod3price.innerHTML="$"+cards[2].price;
    prod4price.innerHTML="$"+cards[3].price;
    prod5price.innerHTML="$"+cards[4].price;
    prod6price.innerHTML="$"+cards[5].price;
    prod7price.innerHTML="$"+cards[6].price;
    prod8price.innerHTML="$"+cards[7].price;

    
    prod1quantity.innerHTML=cards[0].quantity;
    prod2quantity.innerHTML=cards[1].quantity;
    prod3quantity.innerHTML=cards[2].quantity;
    prod4quantity.innerHTML=cards[3].quantity;
    prod5quantity.innerHTML=cards[4].quantity;
    prod6quantity.innerHTML=cards[5].quantity;
    prod7quantity.innerHTML=cards[6].quantity;
    prod8quantity.innerHTML=cards[7].quantity;

    
    document.getElementById("cover").remove();
  

});







//prod1img