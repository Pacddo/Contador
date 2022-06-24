var numerowrapper = document.getElementById ("numero");
var numero = 0;

function increment() { 
numero = numero + 1;
numerowrapper.innerHTML = numero;   
}

function decrement() {
numero = numero - 1;  
numerowrapper.innerHTML = numero;    
}