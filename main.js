const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')
const loggeddInLinks = document.querySelectorAll('.loggedd-in')

//*-------

const userId = document.getElementById('userId');
const names = document.getElementById('names');
const email = document.getElementById('email');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();
const rootRef = database.ref('datUser/usuarios');
const rootRefd = database.ref('datUser/usuarios');
const rootReff = database.ref('modelRouter/usuarios');
// const rootRefff = database.ref('modelRouter/usuarios/email');

const loginCheck = user => {

    if (user) {
      
        loggedInLinks.forEach(link => link.style.display = 'block');
        loggedOutLinks.forEach(link => link.style.display = 'none');

       
    } else {

        loggedInLinks.forEach(link => link.style.display = 'none');
        loggedOutLinks.forEach(link => link.style.display = 'block');

      
    }
}


const loginChecks = user => {

  if (user) {
    
      loggeddInLinks.forEach(link => link.style.display = 'block');
  } else {
 
      loggeddInLinks.forEach(link => link.style.display = 'none');
  }
}




const signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
  
    // Authenticate the User
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // clear the form
        signUpForm.reset();
      // close the modal
      $("#signupModal").modal("hide");
        // close the modal
        
      });
  });

const signinForm = document.querySelector("#login-form");
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;
  

  auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // clear the form
        signUpForm.reset();
      // close the modal
      $("#signinModal").modal("hide")
        // close the modal
        console.log('sign in')
      })

});

const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("signup out");
  })
});


const postList = document.querySelector('.posts');
const setupPosts = data => {
    if(data.length){
        let html = '';
        data.forEach(doc => {
            const post = doc.data();
        
            console.log(post.nombre);
            const email = document.querySelector('#login-email').value;
            if (post.nombre == email){
              loggeddInLinks.forEach(link => link.style.display = 'block');
              const li = `
             
              `;
            //   <li class="list-group-item list-group-item-action">
            //   <h6>Hola, describe el por que desea cambiar el registro de su router en su App avidtel</h6> 
            //  </li>
              // <h6>${post.nombre}</h6>
              html += li; 

                console.log("okey")
                
               
              } else {
               
                console.log("out")
               
            }
          });
          postList.innerHTML = html;
        } else {
          postList.innerHTML = '<p class="text-center"><h5><b>Hola, Inicie sesión nuevamente.</b><br> En esta oportunidad podras solicitar cambio de Router de mi App Avidtel</h5></p><img alt="Cerrar"  src="assets/logos.jpg">';
          
        }
      };

auth.onAuthStateChanged(user =>{
    if(user) {
        fs.collection("adminapp")
        .get()
        .then((snapshot) => {
          
            setupPosts(snapshot.docs)
            loginCheck(user);
            

        })
    } else {
        setupPosts([])
        loginCheck(user);
        loginChecks(user);
    }
})


//--------------------------


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // const autoId = rootRef.push().key
    // rootRef.child(autoId).set({
    rootRef.child(userId.value).set({
        name: names.value,
        email: email.value,
        id: userId.value,
        password: password.value 
    });
});

updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
      name: names.value,
      email: email.value,
      id: userId.value,
      password: password.value 
        // last_name: lastName.value

    };
    rootRef.child(userId.value).update(newData);
    const updates = {};
    // updates['/users/' + userId.value] = newData;
    updates['/update-users/'+ userId.value] = newData;
    database.ref().update(updates);
    
});

removeBtn.addEventListener('click', e => {
    e.preventDefault();
    // rootRef.child(userId.value).remove();
    // database.ref('/super-users').child(userId.value).remove();
    rootRef.child(userId.value).remove()
    .then(() => {
        window.alert('¡Esta seguro que desea eliminar el usuario!');
    })
    .catch(error => {
        console.error(error);
    });
});

removeBtn2.addEventListener('click', e => {
  e.preventDefault();
  // rootRef.child(userId.value).remove();
  // database.ref('/super-users').child(userId.value).remove();

  rootReff.child(userId.value).remove()
  .then(() => {
      window.alert('¡Esta seguro que desea eliminar el usuario!');
  })
  .catch(error => {
      console.error(error);
  });
});

rootReff.on('value', snapshot => {
    console.log('Ocurrió un evento en la base de datos !');
});

// rootRef.orderByChild("last_name").startAt('Y').on('value', snapshot => {
//     console.log(snapshot.val());
// });

//--------------------------

firebase.database().ref('modelRouter/usuarios').on('value',(data)=>{

  let Users = data.val();
  document.getElementById('tablaUsers').innerHTML+='';
    for (const user in Users){
      
      // document.getElementById('tablaUsers').innerHTML+=`
      // <tr>
      // <td>${Users[user].id}</td>
      // <td>${Users[user].email}</td>
      // <td>${Users[user].name}</td>
      // <td>${Users[user].password}</td>
      // </tr>
      // `;
    }
});

// rootReff.once('value', function(snapshot){
//   console.log(snapshot.val());
// });

// rootReff.orderByChild("email").limitToLast(2).once ('value',  function(snapshot){
//   console.log(snapshot.val());
// })

updater.addEventListener('click', (e) => {
  e.preventDefault();
  const emailr = document.querySelector('#login-emailr').value;
  console.log(emailr);
  rootReff.orderByChild("email").limitToFirst(1).startAt(emailr).on('child_added', snap => {
    console.log(snap.val(), snap.key);

   

    document.getElementById('tablaUsers').innerHTML+=`
    <tr>
    <td>${snap.val().id}</td>
    <td>${snap.val().email}</td>
    <td>${snap.val().name}</td>
    <td>${snap.val().password}</td>
    </tr>
    `;
   
  });
});

updaterd.addEventListener('click', (e) => {
  e.preventDefault();
  const emailr = document.querySelector('#login-emailr').value;
  console.log(emailr);
  rootRefd.orderByChild("email").limitToFirst(1).startAt(emailr).on('child_added', snap => {
    console.log(snap.val(), snap.key);

   

    document.getElementById('tablaUsers').innerHTML+=`
    <tr>
    <td>${snap.val().id}</td>
    <td>${snap.val().email}</td>
    <td>${snap.val().name}</td>
    <td>${snap.val().password}</td>
    </tr>
    `;
   
  });
});





