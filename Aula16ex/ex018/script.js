let num = document.querySelector('input#fnum') //pega o input dos numeros
let lista = document.querySelector('select#flista') //pega a lista
let res = document.querySelector('div#res') // pega a div de resultado
let valores = [] // array onde serão armazenados os valores adicionados

function isNumero(n) {  //função para saber se o número é válido
    if(Number(n) >= 1 && Number(n) <= 100) {  //tem que estar entre 1 e 100
        return true
    } else {
        return false
    }
}

function inLista(n, lista) {   
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {  // função que adiciona os numeros
    if(isNumero(num.value) && !inLista(num.value, valores)) {  // verifica se é um numero valido e se já nao foi adicionado anteriormente
        valores.push(Number(num.value)) // adiciona o numero na array
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`  // mostra o numero na lista
        lista.appendChild(item)
        res.innerHTML = ''  //limpa o resultado se mais um numero for adicionado
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''  // para limpar o campo e voltar o cursor para ele
    num.focus()
}

function finalizar() {     //ao clicar no botão para finalizar os processos
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {      // com esse laço, percorremos a array
            soma += valores[pos]       // a soma dos valores
            if (valores[pos] > maior)  // descobrir maior valor
                maior = valores[pos] 
            if (valores[pos] < menor)  // descobrir menor valor
                menor = valores[pos]
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
