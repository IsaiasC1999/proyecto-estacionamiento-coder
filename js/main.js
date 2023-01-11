const modalL = document.getElementById("modal-login");
const modalR = document.getElementById("modal-registro")
const modalLogin = new bootstrap.Modal(modalL);
const modalRegistro = new bootstrap.Modal(modalR)
const btnOpenLogin = document.getElementById('btn-login');
const btnOpenRegistro = document.getElementById('btn-registrar')

btnOpenLogin.onclick = ()=>{
  modalLogin.show();
}


btnOpenRegistro.onclick = ()=>{
  modalRegistro.show();
}



myModalAlternative.show();