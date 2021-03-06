export class Calculadora{
    constructor(textoOperacaoAnterior, textoOperacaoAtual){
        this.textoOperacaoAnterior = textoOperacaoAnterior
        this.textoOperacaoAtual = textoOperacaoAtual
        this.limpa()
    }

    limpa(){
        this.operacaoAtual= ''
        this.operacaoAnterior= ''
        this.operacao = undefined
    }

    deleta(){
        this.operacaoAtual = this.operacaoAtual.toString().slice(0, -1)
    }

    appendNumero(numero){

       if(numero === '.' && this.operacaoAtual.includes('.'))return
       this.operacaoAtual = this.operacaoAtual.toString() + numero.toString()
    }
    
    escolhaOperacao(operacao){
        if(this.operacaoAtual === '')return
        if(this.operacaoAnterior !==''){
            this.compute()
        }
        this.operacao = operacao
        this.operacaoAnterior = this.operacaoAtual
        this.operacaoAtual = ''
    }

    compute(){
        let computacao
        const anterior = parseFloat(this.operacaoAnterior)
        const atual = parseFloat(this.operacaoAtual)
        if (isNaN(anterior) || isNaN(atual)) return
        switch (this.operacao){
            case '+':
                computacao = anterior + atual
                break
            case '-':
                computacao = anterior - atual
                break 
            case '*':
                computacao = anterior * atual
                break 
            case '÷':
                computacao = anterior / atual
                break 
            default:
                return
        }
        this.operacaoAtual = computacao
        this.operacao= undefined
        this.operacaoAnterior=''
    }

    displayNumero(numero){
        const stringNumero  = numero.toString()
        const digitosInteiros = parseFloat(stringNumero.split('.')[0])
        const digitosDecimais = stringNumero.split('.')[1]
        let inteirosDisplay

        if(isNaN(digitosInteiros)){
            inteirosDisplay = ''
        } else{
            inteirosDisplay = digitosInteiros.toLocaleString('pt-BR',{
                maximumFractionDigits:0
            })
        }
        if(digitosDecimais != null){
            return `${inteirosDisplay}.${digitosDecimais}`
        }else{
            return inteirosDisplay
        }
    }

    atualizaDisplay(){
        this.textoOperacaoAtual.innerText = this.displayNumero(this.operacaoAtual)
        if(this.operacao != null){
            this.textoOperacaoAnterior.innerText = `${this.displayNumero (this.operacaoAnterior)} ${this.operacao}`
        }else{
            this.textoOperacaoAnterior.innerText = ''
        }
    }

}