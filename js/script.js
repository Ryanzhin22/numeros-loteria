var numeros = document.querySelector('.numeros')
var numerosLoto = document.querySelector('.numeros-loto')
var numerosQuina = document.querySelector('.numeros-quina')
var lotofacil = document.querySelector('.lotoFacil')
var megasena = document.querySelector('.megaSena')
var quina = document.querySelector('.quina')
var numeroMax = 0

function lotoFacil(){
    lotofacil.style.display = 'block'
    megasena.style.display = 'none'
    numeros.style.display = 'none'
    quina.style.display = 'none'
    numerosQuina.style.display = 'none'
}

function megaSena(){
    megasena.style.display = 'block'
    lotofacil.style.display = 'none'
    numerosLoto.style.display = 'none'
    quina.style.display = 'none'
    numerosQuina.style.display = 'none'
}

function quiNa(){
    quina.style.display = 'block'
    lotofacil.style.display = 'none'
    numerosLoto.style.display = 'none'
    megasena.style.display = 'none'
    numeros.style.display = 'none'
}

/* SORTEIO DOS NÚMEROS ALEATÓRIOS */

function sorteio(){
    return parseInt(Math.random() * 60)
}

/*MEGASENA*/

function numMax(){
    var select = document.querySelector('#quantidadeNum')
    var valor = select.value
    for(var c = 0; valor >= c; c++){
        numeroMax = c
    }
}

function gerar(){
    var imparPar = document.querySelector('input[name="imparOuPar"]:checked').value

    var valores = []
    numeros.style.display = 'block'

    while (valores.length < numeroMax){
        var resultado = sorteio()

        if(imparPar == 'impar'){
            if(resultado % 2 == 1){
                if(valores.indexOf(resultado) === -1){
                    valores.push(resultado)
                }
            } 
        }
        if(imparPar == 'par'){
            if(resultado % 2 == 0){
                if(valores.indexOf(resultado) === -1){
                    valores.push(resultado)
                }
            }
        }
        if(imparPar == 'parImpar'){
            if(valores.indexOf(resultado) === -1){
                valores.push(resultado)
            }
        }
    }
    var numerosAparecer = document.getElementById('numerosAparecer')
    numerosAparecer.innerHTML = valores.sort()
}

/*LOTOFACIL*/

function numMaxLoto(){
    var selectLoto = document.querySelector('#quantidadeNumLoto')
    var valor = selectLoto.value
    for(var c = 0; valor >= c; c++){
        numeroMax = c
    }
}

function gerarLoto(){
    valoresLoto = []
    numerosLoto.style.display = 'block'

    while (valoresLoto.length < numeroMax){
        var resultadoLoto = sorteio()

        if(valoresLoto.indexOf(resultadoLoto) === -1){
            valoresLoto.push(resultadoLoto)
        }
    }

    var aparecerLoto = document.getElementById('mudarLoto')
    aparecerLoto.innerHTML = valoresLoto.sort()
}

/*QUINA*/

function numMaxQuina(){
    var select = document.querySelector('#quantidadeNumQuina')
    var valor = select.value
    for(var c = 0; valor >= c; c++){
        numeroMax = c
    }
}

function gerarQuina(){
    valoresQuina = []
    numerosQuina.style.display = 'block'

    var imparParQuina = document.querySelector('input[name="imparOuParQuina"]:checked').value

    while(valoresQuina.length < numeroMax){
        var resultadoQuina = sorteio()

        if(imparParQuina == 'impar'){
            if(resultadoQuina % 2 == 1){
                if(valoresQuina.indexOf(resultadoQuina) === -1){
                    valoresQuina.push(resultadoQuina)
                }
            } 
        }
        if(imparParQuina == 'par'){
            if(resultadoQuina % 2 == 0){
                if(valoresQuina.indexOf(resultadoQuina) === -1){
                    valoresQuina.push(resultadoQuina)
                }
            }
        }
        if(imparParQuina == 'parImpar'){
            if(valoresQuina.indexOf(resultadoQuina) === -1){
                valoresQuina.push(resultadoQuina)
            }
        }
    }
    var aparecerQuina = document.getElementById('mudarQuina')
    aparecerQuina.innerHTML = valoresQuina.sort()
}