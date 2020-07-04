var agora = new Date()
var hora = agora.getHours()-12

console.log(`Agora são exatamente ${hora} horas.`)

if (hora >=0 && hora<=4) {
    console.log('Boa madrugada meu bombom')
} else if (hora < 12 && hora >= 5) {
    console.log('Bom dia meu mel')
} else if (hora <= 18) {
    console.log('Boa tarde camarada')
}  else {
    console.log('Boa noite meu garoto')
} 
