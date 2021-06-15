(function () {
    emailjs.init("user_UtwwZ1xMejitd4Gf7pQdF");
  })();
  
  function sendmail() {
    let fullName = document.getElementById("name").value;
    let fullcc = document.getElementById("fullcc").value;
    let fulldir = document.getElementById("fulldir").value;
    let municipio = document.getElementById("municipio").value;
    let celular = document.getElementById("celular").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

    let recursos = document.getElementById("recursos").value;
    let recursosp = document.getElementById("recursosp").value;
    let recursosr = document.getElementById("recursosr").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage,
            fullcc: fullcc,
            fulldir: fulldir,
            municipio: municipio,
            celular: celular,
            recursos: recursos,
            recursosp: recursosp,
            recursosr: recursosr
            

        };
  
        // emailjs.send('service_5ysh7qk', 'template_kmxkdrm', contactParams).then(function (res) {})
        emailjs.send('service_5ysh7qk', 'template_kmxkdrm', contactParams).then(function (res) {console.log('SUCCESS!', response.status, response.text);},
        function(error) {
       console.log('FAILED...', error);
       })
        

  }
  
  