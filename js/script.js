var numerosAparecer = document.getElementById('numerosAparecer')
var numeros = document.querySelector('.numeros')
var select = document.querySelector('#quantidadeNum')
var numeroMax = 0

function numMax(){
    var valor = select.value
    if(Number(valor) === 6){
        numeroMax = 6
    } if (Number(valor) === 7){
        numeroMax = 7
    } if (Number(valor) === 8){
        numeroMax = 8
    } if (Number(valor) === 9){
        numeroMax = 9
    } if (Number(valor) === 10){
        numeroMax = 10
    } if (Number(valor) === 11){
        numeroMax = 11
    } if (Number(valor) === 12){
        numeroMax = 12
    } if (Number(valor) === 13){
        numeroMax = 13
    } if (Number(valor) === 14){
        numeroMax = 14
    } if (Number(valor) === 15){
        numeroMax = 15
    }
}

function sorteio(){
    return parseInt(Math.random() * 60)
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
    numerosAparecer.innerHTML = valores.sort()
}