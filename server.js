var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');
var path = require('path')
/*
var auth = require("./controlers/auth");
var items = require("./controlers/items");
*/
var app = express();

app.set("view engine","ejs");
//app.set('views', path.join(__dirname));
app.set('views', path.join(__dirname, '/public'));
//bodyParser = bodyParser.urlencoded({extended:false})
let jsonParser=bodyParser.json();

app.use(express.static(__dirname+"/public"));
/*app.use("/public", express.static(__dirname + "/public"));
app.use("/views", express.static(__dirname + "/views"));
*/
let rawdata = fs.readFileSync('product_db.json');
let cards = JSON.parse(rawdata);


let rawdata1 = fs.readFileSync('productdetail_db.json');
let productDetails = JSON.parse(rawdata1);



/*
fs.readFile("product_db.json",function(err,data){
    if(data){
        cards=JSON.parse(data);
    }
});
*/


/***********
 * **************** Routing *************************************** */
app.get("/",
    function(req,res){
        res.sendFile("index.html");

    }
);

/*
app.post("/register/users",jsonParser,
    function(req,res){
        
        console.log(req.body);
        res.send({url:"index.html"});
        
        //res.sendFile("index.html", { root: __dirname + '/public' });
        //res.send({success:"registered successfully"});
        

    }
);*/
/******************************register***********************/

let arr=[];

app.post("/register/users",jsonParser,
    function(req,res){
        
        console.log(req.body);
        //let data = JSON.stringify(student, null, 2);
       arr.push(req.body);
      console.log(arr);
      fs.writeFile("register_db.json", JSON.stringify(arr), function(err){
         if (err) throw err;
        console.log('The "data to append" was appended to file!');
        });
        //res.sendFile(__dirname+"/public/index.html");
        //res.send({success:"registered successfully"});
        //modify
        res.send({url:"index.html"});

    });



/***************************login*****************************/

app.post("/login/customer",jsonParser,
    function(req,res){
       let regArr=require('./register_db.json');
        console.log("outside");
        console.log(regArr);    
        bodyObj=req.body;
        console.log("inside");
        console.log(regArr);
        console.log(bodyObj.email);
        var custIndex =regArr.findIndex((item)=>item.email==bodyObj.email);
        console.log(custIndex);
        if(custIndex>=0)
          {
              console.log(regArr[custIndex]);
              console.log(bodyObj);
              if(regArr[custIndex].password==bodyObj.password)
                  {
                     res.send({success:"registered successfully"}); 
                  }
              else{
                  res.send({passward_failed:"passward failed"});
              }
          }
        else{//this email is not found
             res.send({not_found:"email not_found"});
        }


    }
);


/***************************Admin login*******************/
let regArrAdm=require('./registerAdmin_db.json');
console.log("outside");
console.log(regArrAdm);
app.post("/login/admin",jsonParser,
    function(req,res){
        bodyObj=req.body;
        console.log("inside");
        console.log(regArrAdm);
        console.log(bodyObj.email);
        var custIndex =regArrAdm.findIndex((item)=>item.email==bodyObj.email);
        console.log(custIndex);
        if(custIndex>=0)
          {
              console.log(regArrAdm[custIndex]);
              console.log(bodyObj);
              if(regArrAdm[custIndex].password==bodyObj.password)
                  {
                     res.send({success:"registered successfully"}); 
                  }
              else{
                  res.send({passward_failed:"passward failed"});
              }
          }
        else{//this email is not found
             res.send({not_found:"email not_found"});
        }


    }
);
/*************************DashBoard**********************/
app.post("/dashboard/admin",jsonParser,
    function(req,res){
        bodyObj=req.body;
        //go to page: DashBoard_Admin.html

    }
);

///////////////////////////////////////////////////////////////////

app.post("/getProductObj",jsonParser,
    function(req,res){
        //console.log(req.body.id);
        //res.send({success:"success"});
        res.send(productDetails[req.body.id-1]);       
        //res.sendFile("index.html", { root: __dirname + '/public' });
        //res.send({success:"registered successfully"});
        

        

});

/*
app.get("/home.html",jsonParser,
    function(req,res){
        console.log(__dirname);
        res.sendFile("index.html");

    }
);


*/
//////////////////////////////////////////////////////////////
/************************ Admin ***************************/
let admin = require('./productdetail_db.json');
console.log("admin ="+admin);
app.post("/Edit/Admin", jsonParser,
    function (req, res) {
         res.send({url:"Admin_Dashboard.html"});
        console.log("Admin"+req.body);
        //let data = JSON.stringify(student, null, 2);
        admin.push(req.body);
        console.log(admin);
        fs.writeFile("productdetail_db.json", JSON.stringify(admin), function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
    
    
    /****
    
    function(err){
         if (err) throw err;
        console.log('The "data to append" was appended to file!');
        });
       // res.sendFile(__dirname+"/public/index.html");
    ***/
       // res.sendFile(__dirname + "/public/productDetail.html");
        //res.send({success:"registered successfully"});
        

    });

//////////////////////////////////////////////////////////////
//"/login/customer/success"
app.post("/login/customer/success",jsonParser,
    function(req,res){
        let cust=require('./register_db.json');
 
        var custIndex =cust.findIndex((item)=>item.email==bodyObj.email);
        console.log(custIndex);
        if(custIndex>=0)
          {
                    res.send({url:"AllProducts",first_name:cust[custIndex].first_name,email:cust[custIndex].email});
          }
        //res.send({url:"AllProducts",welcome_string:"Welcome "+req.body.first_name+" "+req.body.last_name});
       
    });

app.get("/AllProducts",jsonParser,
    function(req,res){
        res.sendFile("Products_Dashboard.html",{ root: __dirname + '/public' });
        //res.render("Products_Dashboard.ejs");
    }
);
  app.post("/login/admin/success",jsonParser,
    function(req,res){
        
        let cust=require('./registerAdmin_db.json');
 
        var custIndex =cust.findIndex((item)=>item.email==bodyObj.email);
        console.log(custIndex);
        if(custIndex>=0)
          {
                    res.send({url:"AdminAllProducts",first_name:cust[custIndex].first_name,email:cust[custIndex].email});
          }
       

    });

    app.get("/AdminAllProducts",jsonParser,
    function(req,res){
        res.sendFile("Admin_Dashboard.html",{ root: __dirname + '/public' });
        //res.render("Products_Dashboard.ejs");
    }
);

app.get("/Admin_products",jsonParser,
    function(req,res){
        
        res.send(JSON.stringify(productDetails)); 

    }
);
//console.log(productDetails[0]);
app.get("/p/:elemId", jsonParser, 
    function(req,res){
        
        res.send({url:"/productDetail",itemObj:productDetails[0]});      

});
////////////////////////////////////////////////////////////
/****************************Products*********************** */
app.get("/products",jsonParser,
    function(req,res){
        
        res.send(JSON.stringify(productDetails)); 

    }
);
//console.log(productDetails[0]);
app.get("/p/:elemId", jsonParser, 
    function(req,res){
        
        res.send({url:"/productDetail",itemObj:productDetails[0]});      

});
/*
app.get("/productDetail",jsonParser,
    function(req,res){
        //res.setHeader("Content-Type", "text/html");
        res.render('productDetail.ejs',{prodid: productDetails[0].id,proddesc: productDetails[0].product_desc,prodimg1: productDetails[0].src1,prodimg2: productDetails[0].src2,prodimg3: productDetails[0].src3,prodprice: productDetails[0].price,prodquantity: productDetails[0].quantity});
        //res.render('productDetail.ejs',{prodid: "102"});
        
        let prod_index=productDetails.findIndex(q => q.id == req.params.id);
        if(prod_index>=0){
            //res.send(JSON.stringify(productDetails[prod_index]));
            res.render("productDetail.ejs",{prodid: productDetails[prod_index].id,prodimg1: productDetails[prod_index].src1,prodimg2: productDetails[prod_index].src2,prodimg3: productDetails[prod_index].src3,prodprice: productDetails[prod_index].price,prodquantity: productDetails[prod_index].quantity});
        //}
        //let carIndex = cars.findIndex(q => q.id == req.params.id);
        //res.send(JSON.stringify(cards));
        

    }
);
*/

app.get("/productDetail",jsonParser,function(req,res){

    res.render('productDetail.ejs',{prodid: productDetails[0].id,proddesc: productDetails[0].product_desc,prodimg1: productDetails[0].src1,prodimg2: productDetails[0].src2,prodimg3: productDetails[0].src3,prodprice: productDetails[0].price,prodquantity: productDetails[0].quantity});
    //res.redirect('productDetail.ejs');
});

app.get("/index/collection",jsonParser,
    function(req,res){
   
    
        res.send({url:"Products_Dashboard.html"});
       

    });

app.listen(8080);