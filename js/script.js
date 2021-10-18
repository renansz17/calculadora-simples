import { Calculadora } from "./calculadora.js";

const btnsNumeros = document.querySelectorAll('[data-numero]')
const btnsOperacao = document.querySelectorAll('[data-operacao]')
const btnAllClear = document.querySelector('[data-allClear]')
const btnDeleta = document.querySelector('[data-deleta]')
const btnIgual = document.querySelector('[data-igual]')
const textoOperacaoAnterior = document.querySelector('[data-operacaoAnterior]')
const textoOperacaoAtual = document.querySelector('[data-operacaoAtual]')


const calculadora = new Calculadora(textoOperacaoAnterior, textoOperacaoAtual)

btnsNumeros.forEach(botao =>{
    botao.addEventListener('click', ()=>{
    calculadora.appendNumero(botao.innerText)
    calculadora.atualizaDisplay()
    })
})

btnsOperacao.forEach(botao =>{
    botao.addEventListener('click', ()=>{
        calculadora.escolhaOperacao(botao.innerText)
        calculadora.atualizaDisplay()
    })
})

btnIgual.addEventListener('click', botao => {
    calculadora.compute()
    calculadora.atualizaDisplay()
})
btnAllClear.addEventListener('click',botao =>{
    calculadora.limpa()
    calculadora.atualizaDisplay()
})
btnDeleta.addEventListener('click',botao =>{
    calculadora.deleta()
    calculadora.atualizaDisplay()
})