function verifyspecies() {
    var answer1 = window.document.getElementById('answer1')
    var result = window.document.getElementById('result')
    var useranswer = (answer1.value)
    result.innerHTML = `<p>Nice, let's see...</p>`
}
    if (useranswer == Yes) {
        result.innerHTML += `<p>OMG! You're completely a Mermaid! Pretty cool!</p>`
    }
    else {
        result.innerHTML += `<p>Oh mate... It seems you're just a human being after all. That's not bad, cheer up!</p>`
    }