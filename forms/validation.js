
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
    const messageInput=document.getElementById("message");
    const phoneInput=document.getElementById("phone");

   


     let typeError=false;

     let isFormvalid=false;



     function clearform(){

         document.getElementById("name").value=" "
         document.getElementById("email").value=" "
         document.getElementById("subject").value=" "
         document.getElementById("message").value=" "
         document.getElementById("phone").value=" "
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

      let isFormvalid=true;

        if(!typeError) {return;}


        invalidElement(nameInput)

        invalidElement(emailInput)

        invalidElement(subjectInput)

        invalidElement(messageInput)

        invalidElement(phoneInput)

        if(!nameInput.value ||nameInput.value.trim()==""||nameInput.value.length < 3 || nameInput.value.length > 22){

            resetElement(nameInput);
            let isFormvalid=false;

 
        }

        if(!isValidEmail(emailInput.value) ) {

            resetElement(emailInput);
            let isFormvalid=false;

       }


       if(!isValidPhone(phoneInput.value) ) {

        resetElement(phoneInput);
        let isFormvalid=false;

   }

       if(!subjectInput.value){

        resetElement(subjectInput);
        let isFormvalid=false;

   }

  //     if(!messageInput.value){

  //     resetElement(messageInput);
  //     let isFormvalid=false;

  // }

       
    }

    form.addEventListener("submit",(e)=>{


        typeError=true;
        e.preventDefault();
        validate();

        if(isFormvalid==true){

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

    // messageInput.addEventListener("input",function(){

    //     validate();
        
    // })

    phoneInput.addEventListener("input",function(){

        validate();
        
    })

    
   
    

     

    
             

      

   

   
  

   


       
    


       
          
      
       

    

    


