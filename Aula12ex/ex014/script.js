function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = Math.floor(Math.random()*24); 
    var msg2 = ''
    
    if (hora >= 0 && hora < 12) {
        msg2 = 'Bom dia meu camarada!'
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg2 = 'Boa tarde meu compatriota!'
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg2 = 'Boa noite meu compatriota!'
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
		msg.innerHTML = `
			<p> Agora são ${hora} horas</p>
			<p>${msg2}</p>`
}
