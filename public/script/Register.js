

async function regFn(){
    let valid=false;
    let form_info= {
        "email" : email.value,
        "password": password.value,
        "conf_password": conf_password.value,
        "first_name":first_name.value,
        "last_name":last_name.value,
        "phone_number":phone_number.value
    }
    console.log(form_info);
    if((form_info.password==form_info.conf_password)&&(form_info.phone_number.length==11)){
        if(form_info.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            valid=true;
            console.log("correct mail");
        }

    }


if(valid==true){
    console.log("valid");
   /* 
    let res=await fetch("/register/users",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(form_info)
    });
     let resObj=res.json();
     window.location.href=resObj.url;
*/
     
     fetch("/register/users",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(form_info)
    })
     .then((response) => response.json())
     .then((responseObj) => {
        window.location.href=responseObj.url;     

     });
    
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
