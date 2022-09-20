
  const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^(\+91-|\+91|0)?\d{10}$/;
    return re.test(String(phone).toLowerCase());
  };
   
   
   
   
   const form=document.getElementById("form");
    const nameInput=document.getElementById("name");
    const emailInput=document.getElementById("email");
    const subjectInput=document.getElementById("subject");
    const phoneInput=document.getElementById("phone");

   


     let typeError=false;

     let isFormvalid=false;



     function clearform(){

         document.getElementById("name").value=""
         document.getElementById("email").value=""
         document.getElementById("subject").value=""
         document.getElementById("phone").value=""
     }

  

      function resetElement(elm){

        elm.nextElementSibling.classList.remove("hidden")
        elm.classList.add("invalid");
      }


      function invalidElement(elm){

        elm.nextElementSibling.classList.add("hidden")
        elm.classList.remove("invalid");
      }


    function validate() { 

       isFormvalid=true;

        if(!typeError) {return;}


        invalidElement(nameInput)

        invalidElement(emailInput)

        invalidElement(subjectInput)

        invalidElement(phoneInput)

        if(!nameInput.value ||nameInput.value.trim()==""||nameInput.value.length < 3 || nameInput.value.length > 22){

            resetElement(nameInput);
             isFormvalid=false;

 
        }

        if(!isValidEmail(emailInput.value) ) {

            resetElement(emailInput);
           isFormvalid=false;

       }


       if(!isValidPhone(phoneInput.value) ) {

        resetElement(phoneInput);
         isFormvalid=false;

   }

       if(!subjectInput.value ||subjectInput.value.trim()==""){

        resetElement(subjectInput);
         isFormvalid=false;

   }

     

       
    }

    form.addEventListener("submit",(e)=>{

      e.preventDefault();
        typeError=true;
       
        validate();

        if(isFormvalid==true){
              
          alert('form submitted');

          clearform();
          
        }
        
    })

    nameInput.addEventListener("input",function(){

        validate();
       
        
        
    })
    emailInput.addEventListener("input",function(){

        validate();
        
    })

    subjectInput.addEventListener("input",function(){

        validate();
        
    })


    phoneInput.addEventListener("input",function(){

        validate();
        
    })

    
   
    

     

    
             

      

   

   
  

   


       
    


       
          
      
       

    

    


