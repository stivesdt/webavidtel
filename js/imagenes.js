window.onload = inicializar;
var fichero;
var storageRef;
var imagenesFBRef;

function inicializar(){
    fichero = document.getElementById("fichero");
    fichero.addEventListener("change", subirImagenAFirebase, false);

    storageRef = firebase.storage().ref();

    imagenesFBRef = firebase.database().ref().child("suscripcionweb");

    mostrarImagenesDeFirebase()

}

function mostrarImagenesDeFirebase(){

}

function subirImagenAFirebase(){
    var imagenASubir = fichero.files[0];
    var uploadTask = storageRef.child('imagenes/' + imagenASubir.name).put(imagenASubir);

    uploadTask.on('state_changed',
     function(snapshot){

    }, function(error) {

        alert("Error");

    }, function() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            alert("Se subio la imagen con url" + downloadURL)
            crearNodoEnBDFirebase(imagenASubir.name, downloadURL);
        });
        });
        
}

function crearNodoEnBDFirebase(nombreImagen, downloadURL) {
    imagenesFBRef.push({nombre: nombreImagen, url: downloadURL})

}


