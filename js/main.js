const modalL = document.getElementById("modal-login");
const modalR = document.getElementById("modal-registro")
const modalLogin = new bootstrap.Modal(modalL);
const modalRegistro = new bootstrap.Modal(modalR)


// Clases

class Usuario {
  constructor(user, mail, passwoord) {
    this.user = user;
    this.mail = mail;
    this.passwoord = passwoord;
  }
}

class Estacionamiento {
  constructor(nombre, lugar, cantiLugares, precioPorHora) {
    this.nombre = nombre,
      this.lugar = lugar,
      this.cantiLugares = cantiLugares,
      this.precioPorHora = precioPorHora
  }
  totalPagar(horas) {
    return horas * this.precioPorHora
  }

}

// Fake Bd



// // ESTACIONAMIENTOS
const estacionamientos = [];

estacionamientos.push(new Estacionamiento("La Plaza", "Cristomo 213", 20, 300))
estacionamientos.push(new Estacionamiento("El Establo", "Santiago 550", 12, 250))
estacionamientos.push(new Estacionamiento("Esquina Norte", "Cristomo 213", 10, 400))
estacionamientos.push(new Estacionamiento("La Vial", "Cristomo 213", 17, 350))
estacionamientos.push(new Estacionamiento("El Bosque", "Cristomo 213", 17, 375))

console.log(estacionamientos);

const usuarios = []



usuarios.push(new Usuario('Isa1999', 'isa@gmail.com', '1234'));

console.log(usuarios);

// elemento nav
const nav = document.getElementById('nav-toggle');


// elemtos del login
const btnOpenLogin = document.getElementById('btn-open-login');
const formLogin = document.getElementById('form-login');
const inpLoginUser = document.getElementById('input-user');
const inpLoginContra = document.getElementById('input-contraseña-login');
const inputcheck = document.getElementById('checkbox-recordar');



//elementos registro
const btnOpenRegistro = document.getElementById('btn-open-registrar')
const formRegistro = document.getElementById('form-registrar');
const btnRegistrar = document.getElementById('btn-registrar');
const inpUsuario = document.getElementById('inp-usuario-registro');
const inpCorreo = document.getElementById('inp-usuario-correo')
const inpContraseña = document.getElementById('inp-contraseña-registro');
const inpContraseñaR = document.getElementById('inp-Rcontraseña-registro');
const spanMensaje = document.getElementById('span-mensaje-registro')
const inputs = document.querySelectorAll('.gg')



//sectiones

const sectionHome = document.getElementById('section-home');
const sectionListado = document.getElementById('section-listado')
const btnCerrarSession = document.getElementById('btn-cerrar-sesion')



for (let ele of inputs) {
  ele.addEventListener('focus', (e) => {
    spanMensaje.style.display = "none"

  })
}




btnOpenLogin.onclick = () => {
  modalLogin.show();

}

btnOpenRegistro.onclick = () => {
  modalRegistro.show();
}



// Logica de Registro 

formRegistro.onsubmit = (even) => {
  even.preventDefault();

  if (inpUsuario.value.length != 0 && inpCorreo.value.length != 0 && inpContraseña.value.length != 0 && inpContraseñaR.value.length != 0 && (inpContraseña.value == inpContraseñaR.value)) {

    let usuario = new Usuario(inpUsuario.value, inpCorreo.value, inpContraseña.value)
    guardarUsuario(usuario);
    formRegistro.reset();
    ocultarMensajeSpan();
    alert('Registrado con existo');
  } else {

    spanMensaje.style.display = 'block'
    // modalRegistro.hide();
    // formRegistro.reset();
  }


}


function guardarUsuario(usuario) {
  usuarios.push(usuario)
  console.log(usuarios);
}


function ocultarMensajeSpan() {
  spanMensaje.style.display = "none"
}





// Logica Login

// Logeo automatico

if(localStorage.getItem('user')){
    mostraInicio(); 
}else{
    sectionListado.style.display = 'none'
}


formLogin.onsubmit = (even) => {
  even.preventDefault();

  let resultado = usuarios.some(ele => ele.user == inpLoginUser.value &&
    ele.passwoord == inpLoginContra.value);
      
    let usuariosGuardar = {
        user : inpLoginUser.value,
        passwoord : inpLoginContra.value
       }
    console.log(inputcheck.checked);

  if (resultado) {
      if(inputcheck.checked){
         guardarSesion(usuariosGuardar)
      }
    // if(inputcheck.value)
    formLogin.reset();
    mostraInicio();
  }


}

function guardarSesion(user){
   
  localStorage.setItem('user',JSON.stringify(user))
}

function mostraInicio() {
  btnOpenLogin.style.display = "none"
  btnOpenRegistro.style.display = "none"
  modalLogin.hide();
  nav.style.display = "block"
  btnCerrarSession.style.display = 'inline'
  sectionHome.style.display = "none"
  sectionListado.style.display = "flex"
  cargarTablaHome();
}


function cargarTablaHome() {
  const tbody = document.getElementById('t-body')

  estacionamientos.forEach((ele) => {
    tbody.innerHTML +=
                `<th scope="row"></th>
                  <td>${ele.nombre}</td>
                  <td>${ele.lugar}</td>
                  <td>${ele.precioPorHora}</td>
                  <td>${ele.cantiLugares}</td>                  
                </tr>`

  })

}



// Logica Listado/Inicio


btnCerrarSession.onclick = (even)=>{ 
  cerrarInicio();
}



function cerrarInicio() {
    sectionListado.style.display = 'none'
    sectionHome.style.display = 'flex'
    btnOpenLogin.style.display = "inline"
    btnOpenRegistro.style.display = "inline"
    modalLogin.hide();
    btnCerrarSession.style.display = 'none'
    nav.style.display = "none"
    localStorage.clear();    
    
}




// Falta implementar mas funcionalidad

// GURDAR LA SESION 
// FILTRAR Y PODER SELECCIONAR ALGUN FILAS DE LA TABLA PARA SELECCIONAR UN ESTACIOMIENTO 

// CREAR EL LADO DEL ADMINSTRADOS  PARA PODER LOGEAR TUS ESTACIONAMIENTO