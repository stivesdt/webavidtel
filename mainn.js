(function () {
    emailjs.init("user_UtwwZ1xMejitd4Gf7pQdF");
  })();
  
  function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;
  
        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage,
            

        };
  
        // emailjs.send('service_5ysh7qk', 'template_kmxkdrm', contactParams).then(function (res) {})
        emailjs.send('service_5ysh7qk', 'template_kmxkdrm', contactParams).then(function (res) {console.log('SUCCESS!', response.status, response.text);},
        function(error) {
       console.log('FAILED...', error);
       })
        

  }
  
  