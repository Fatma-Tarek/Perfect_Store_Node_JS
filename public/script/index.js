
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
        profile1.setAttribute("href","Orders_Admin.html");
        prod.setAttribute("href","Admin_Dashboard.html");
    }

}

async function hoverFn(){
      
     fetch("/index/collection",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },
        //body:JSON.stringify("hover")
    })
     .then((response) => response.json())
     .then((responseObj) => {
        window.location.href=responseObj.url;     

     });
    

   


}  
