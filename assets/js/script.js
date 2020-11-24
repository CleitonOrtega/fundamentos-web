let nome=document.getElementById('nome')
let email=document.getElementById('email')
let assunto=document.getElementById('assunto')
let mapa=document.querySelector('#mapa')
let nomeOK = false
let emailOK = false
let assuntoOK = false


nome.style.width = '100%'
email.style.width = '100%'

function validacaoNome(){
    let txtNome=window.document.querySelector('#txtNome')
    
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOK = true
    }

}

function validacaoEmail(){
    let txtEmail = document.getElementById('txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOK = true
    }

}

function validacaoAssunto(){
    let txtAssunto = document.getElementById('txtAssunto')

    if(assunto.value.length > 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no maximo 100 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    }else{
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }

}

function enviar(){

    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert('Formulario enviado com sucesso!')
    }else{
        alert('Preencha o formulario corretamente antes de enviar...')
    }

}

function mapaZoom(){
    mapa.style.width='800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.height = '250px'

}