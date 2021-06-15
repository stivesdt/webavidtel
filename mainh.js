(function () {
    emailjs.init("user_UtwwZ1xMejitd4Gf7pQdF");
  })();
  
  function sendmail() {
    let fullname = document.getElementById("fullname").value;
    let cedula = document.getElementById("cedula").value;
    let email = document.getElementById("email").value;
    let celular = document.getElementById("celular").value;
    let dir = document.getElementById("dir").value;
    let plan = document.getElementById("plan").value;
    let permanencia = document.getElementById("permanencia").value;

    let message = document.getElementById("message").value;

        var contactParams = {
            fullname: fullname,
            cedula: cedula,
            email: email,
            celular: celular,
            dir: dir,
            plan: plan,
            permanencia: permanencia,
         
            message: message,
            
                      
        };
  
        // emailjs.send('service_5ysh7qk', 'template_kmxkdrm', contactParams).then(function (res) {})
        emailjs.send('service_5ysh7qk', 'template_kmxkdrm', contactParams);
        

  }
  
  