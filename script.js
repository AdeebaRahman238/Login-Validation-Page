function validateform(){ 
    var x=document.myform.name.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf("."); 
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Invalid E-mail Address | Try Adding @ or .com "); 
    return false;
    }
    var password=document.myform.password.value;
  var name=document.myform.name.value;
  var password=document.myform.password.value; 
  if (name==null || name==""){  
    alert("Name can't be blank.");  
    return false;  
  }
   else if(password.length<8){  
    alert("Invalid Password | Password must be at least 8 characters long.");  
    return false;  
    }    
  }  
  