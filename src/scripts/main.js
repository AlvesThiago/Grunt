document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(event){
        event.preventDefault();

        let numeroMax = document.getElementById('num-max').value;
        numeroMax = parseInt(numeroMax);

        let numAleatorio = Math.random() * numeroMax;
        numAleatorio = Math.floor(numAleatorio + 1);
        document.getElementById('resultado-valor').innerText = numAleatorio;
        document.querySelector('.resultado').style.display = 'block';

    })
})