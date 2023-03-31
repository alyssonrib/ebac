const form = document.getElementById('form-ebac');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroUm = document.getElementById('number-1');
    const numeroDois = document.getElementById('number-2');

    if (numeroDois.value > numeroUm.value){
        alert("o Formulário é valido!");
    } else{
        alert("Formulário inválido");
    }
})