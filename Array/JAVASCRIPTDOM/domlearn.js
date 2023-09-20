


 var userDetails = [];

function register(event){
    event.preventDefault()
    console.log("function called:::::::");
    //checkFirstName();
    //checkLastName();
    //checkEmail()
//    let validationResult = formValidater();
      if(checkFirstName() && checkLastName() && checkEmail())
      {
        let inputFirstName = document.getElementById("firstname").value.trim();
        let inputLastName = document.getElementById("lastname").value.trim();
        let inputEmail = document.getElementById("email").value.trim();
        
       let user = {
                    firstName : inputFirstName,
                    lastName : inputLastName,
                    email    : inputEmail
                  }
   
                  userDetails.push(user);
                  console.log(userDetails);
                  reset();
      }
    }   

    
    



    // let validationResult = formValidater();
    //  if(validationResult)
    //  {
    //     console.log("ok");
    //  }

    // console.log(validationResult);
    // let result = getRadioButtonValue();
   // console.log(result);

function getRadioButtonValue(){
    var value;
    if(document.getElementById("male").checked){

        value =  document.getElementById("male").value;
    }
    if(document.getElementById("female").checked)
    {
       value = document.getElementById("female").value;
    }
    return value;
}

function formValidater()
{
    var letters =/^[A-Za-z]+$/;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var firstName= document.querySelector("#firstname").value.trim();
    var lastName = document.querySelector("#lastname").value.trim();
    var email = document.querySelector("#email").value.trim();
    if(firstName==""|| !letters.test(firstName)){
         document.getElementById("firstnamevalidationmsg").style.display='';
         document.getElementById("lastnamevalidationmsg").style.display='none';
         document.getElementById("emailvalidationmsg").style.display='none';
         
        return false;
    }
    if(lastName=="" || !letters.test(lastName) ){
       
        document.getElementById("lastnamevalidationmsg").style.display='';
        document.getElementById("emailvalidationmsg").style.display='none';
        document.getElementById("firstnamevalidationmsg").style.display='none';
        
        return false;
    }
    if(email=="" || !emailPattern.test(email) )
    {    
        document.getElementById("lastnamevalidationmsg").style.display='none';
        document.getElementById("firstnamevalidationmsg").style.display='none';
        document.getElementById("emailvalidationmsg").style.display='';
        
        return false;
    }
    if(getRadioButtonValue()=="")
    {
         return false;
    }
    return true;

}
function getName(){
    console.log("get name")
}



// tableShow(tableData)
// {
//   
// }



function reset(){

    document.getElementById("firstnamevalidationmsg").style.display='none';
    document.getElementById("lastnamevalidationmsg").style.display='none';
    document.getElementById("emailvalidationmsg").style.display='none';
    let inputFirstName = document.getElementById("firstname").value='';
        let inputLastName = document.getElementById("lastname").value='';
        let inputEmail = document.getElementById("email").value='';


}


function checkFirstName()
{  

    var letters =/^[A-Za-z]+$/;
    var firstName= document.querySelector("#firstname").value.trim();
    if(firstName=='' || !letters.test(firstName)) 
    {
        document.getElementById("firstnamevalidationmsg").style.display='';
        return false;
    }
    document.getElementById("firstnamevalidationmsg").style.display='none';
    return true;
    
}

function checkLastName()
{  
   
    var letters =/^[A-Za-z]+$/;
    var lastName= document.querySelector("#lastname").value.trim();
    
        if(lastName=='' || !letters.test(lastName)) 
        {
            document.getElementById("lastnamevalidationmsg").style.display='';
            return false;
        }
        document.getElementById("lastnamevalidationmsg").style.display='none';
        return true;
    
    
    
}

 function checkEmail()
  {    
            let email = document.querySelector("#email").value.trim();
      let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;       if(email=='' || !emailPattern.test(email))
       {
         
         document.getElementById("emailvalidationmsg").style.display='';
         return false;
      }
      document.getElementById("emailvalidationmsg").style.display='none';
        return true;

     }


    // show the table

       