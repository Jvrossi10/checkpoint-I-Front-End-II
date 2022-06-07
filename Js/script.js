const nome = document.getElementById('nome'); 
const descricao = document.getElementById('text'); 
const url = document.getElementById('url'); 
const form = document.getElementById('form');
const error = document.querySelectorAll('.error'); 
const formItem = document.querySelectorAll('.formItem');
const btn = document.getElementById('btn'); 

var checkValidation = 0;

btn .addEventListener('click',  (e) =>{ 
    
    checkNome();
    checkDescricao(); 
    checkUrl(); 
    

    function checkNome(){
        let mensagemError = [];
        if (nome.value === '' || nome.value == null) {
           
             
            mensagemError.push ("Preencha o campo nome!"); 
            error[0].innerText = mensagemError; 
            formItem[0].classList.add('fail');
        } 
        else {
            formItem[0].classList.remove('fail');
            error[0].innerText = null; 
            formItem[0].classList.add('sucess');
            checkValidation += 1
        }
    }

    function checkDescricao(){
        let mensagemError = [];
        if (descricao.value === '' || descricao.value == null) {
            
            
            mensagemError.push ("Preencha o campo descrição!"); 
            error[1].innerText = mensagemError; 
            formItem[1].classList.add('fail');
        } 
        else {
            formItem[1].classList.remove('fail');
            error[1].innerText = null; 
            formItem[1].classList.add('sucess');
            checkValidation += 1
        }
    } 

    function checkUrl(){ 
        let mensagemError = [];
        if (url.value === '' || url.value == null) {
            
            
            mensagemError.push ("Preencha o campo URL!"); 
            error[2].innerText = mensagemError; 
            formItem[2].classList.add('fail');
        } 
        else {
            formItem[2].classList.remove('fail');
            error[2].innerText = null; 
            formItem[2].classList.add('sucess');
            checkValidation += 1
        }
    }

   

    function resp () {
        var resp = document.getElementById('resp') 
        var resposta = 
        `
        <div>
            <img src="${url.value}" alt="logo" class="logo">
            <h1 style="color: white">${nome.value}</h1> 
            <p style="color: white">${descricao.value}</p>
        <div>
        `;  
        resp.innerHTML += resposta;
    }

    
    if (checkValidation === 3) {
        resp();
    }

});