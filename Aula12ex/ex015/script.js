function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Tem coisa errada aí, arruma e tenta de novo')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'kid-m.png')
            } else if (idade >= 12 && idade < 27) {
                // Jovem
                img.setAttribute('src', 'young-m.png')
            } else if (idade >= 27 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adult-m.png')
            } else if (idade >= 50) {
                // Idoso
                img.setAttribute('src', 'old-m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src','kid-f.png')
            } else if (idade >= 12 && idade < 27) {
                // Jovem
                img.setAttribute('src','young-f.png')
            } else if (idade >= 27 && idade < 50) {
                // Adulta
                img.setAttribute('src','adult-f.png')
            } else if (idade >= 50) {
                // Idosa
                img.setAttribute('src','old-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

     }
}