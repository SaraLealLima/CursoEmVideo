function contar() {
    let ini = document.getElementById('inicio')
    let fi = document.getElementById('fim')
    let pas = document.getElementById('passo')
    let res = document.getElementById('res') 

    if(ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('Erro! Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fi.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
             for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
             }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1F449} `
        } res.innerHTML += `\u{1F3C1}`

    }
    
    
}