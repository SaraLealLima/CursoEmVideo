let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor nao foi encontrado`)
} else {
console.log(`O valor está na posição ${pos}`)
}


/* for(let pos = 0; pos < num.length ; pos++) {
    console.log(num[pos])
} */