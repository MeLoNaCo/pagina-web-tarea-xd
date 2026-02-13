function validarLogin(event) {
    event.preventDefault(); 

    const user = document.getElementById("nombre").value;
    const pass = document.getElementById("contraseña").value;

    if (user === "admin" && pass === "1234") {
        alert("Inicio de sesion correcto");
        window.location.href = "index.html"; 
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function validarRegistro(event) {
    event.preventDefault(); 

    const correo = document.getElementById("correo").value;
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    const conContraseña = document.getElementById("conContraseña").value;

    
    if (!(correo.endsWith("@gmail.com") || correo.endsWith("@hotmail.com"))) {
        alert("El correo debe terminar en @gmail.com o @hotmail.com");
        return;
    }

    if (contraseña !== conContraseña) {
        alert("Las contraseñas no coinciden");
        return;
    }

    alert("Registro correcto");
    window.location.href = "login.html";
}

function confirmarPedido() {
    alert("Pedido confirmado con exito");
    window.location.href = "pedidos.html";
}


function abrirModal() {
  document.getElementById("miModal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("miModal").style.display = "none";
}

function abrirModalPedido(titulo, texto) {
  document.getElementById("modalPedido").style.display = "flex";
  document.getElementById("titulo-modal").textContent = titulo;
  document.getElementById("texto-modal").innerText = texto;
}

function cerrarModalPedido() {
  document.getElementById("modalPedido").style.display = "none";
}

function toggleMenu() {
  const sidebar = document.getElementById('miSidebar');
  if (!sidebar) return console.error('No se encontro #miSidebar');
  sidebar.classList.toggle('open');
}
