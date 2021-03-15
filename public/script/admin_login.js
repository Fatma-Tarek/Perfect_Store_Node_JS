async function logFn(){
    let valid=false;
    let form_info= {
        "email" : email.value,
        "password": password.value,
        
    }
    console.log(form_info);
   
        if(form_info.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            valid=true;
            console.log("correct mail");
        }


if(valid==true){
    console.log("valid");
    let res=await fetch("/login/admin",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(form_info)
    })
    console.log("------------");
    console.log(JSON.stringify(form_info));
      let resJson = await res.json();
    console.log(resJson);
    if(resJson.success){
        sessionStorage.logged=true;
        console.log("registered successfully");
        ////////////////////////////////////////////////
          fetch("/login/admin/success",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(form_info)
    })
     .then((response) => response.json())
     .then((responseObj) => {
        sessionStorage.first_name=responseObj.first_name;
        sessionStorage.email=responseObj.email; 
 
        sessionStorage.admin=true;
        window.location.href=responseObj.url;     

     });
        /////////////////////////////////////////////////
    }
    else if(resJson.passward_failed)
        {
            alert("passward failed");
        }
    else if(resJson.not_found)
        {
            alert("email not_found");
        }
/*  
/*  
    let res1=await fetch("/home.html",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    })
*/
   /*
    let resJson = await res.json();
    if(resJson.success){
        console.log("Registered successfully");
        //await fetch("/home.html", {method: "GET"});




    }else{
        console.log("error happened")
    }
    */
   
}
else{
    alert("Wrong password or Email");
}

}  
