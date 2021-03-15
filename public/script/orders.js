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