const db = firebase.firestore();

const todoForm = document.getElementById('contactForm');

todoForm.addEventListener('submit', async e => {
    e.preventDefault();
    const nombre = todoForm['nombre'].value;
    const email = todoForm['email'].value;
    const mensaje = todoForm['mensaje'].value;

    
    console.log(nombre, email, mensaje);

    db.collection("contact").doc(email).set({
        nombre: nombre,
        email: email,
        mensaje: mensaje
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    

    todoForm.reset(); // Reseteamos los campos
});
