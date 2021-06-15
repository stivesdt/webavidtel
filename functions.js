const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // const autoId = rootRef.push().key
    // rootRef.child(autoId).set({
    rootRef.child(userId.value).set({
        first_name: firstName.value,
        last_name: lastName.value,
        age: age.value 
    });
});

updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
        age: age.value,
        first_name: firstName.value
        // last_name: lastName.value

    };
    rootRef.child(userId.value).update(newData);
    const updates = {};
    // updates['/users/' + userId.value] = newData;
    updates['/super-users/'+ userId.value] = newData;
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

rootRef.on('value', snapshot => {
    console.log('Ocurrió un evento en la base de datos !');
});

rootRef.orderByChild('last_name').startAt('Y').on('value', snapshot => {
    console.log(snapshot.val());
});

// rootRef.on('child_removed', snapshot => {
//     console.log('Child(s) removed !');
// });

// rootRef.on('child_changed', snapshot => {
//     console.log('Child(s) changed !');
// });




