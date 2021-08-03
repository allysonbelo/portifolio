document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector('.container').classList.toggle("show-menu")
)

document.querySelector("#qtd").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)

document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana(s)`
    atualizarPreco()
})

function atualizarPreco() {

    const qtd = document.querySelector("#qtd").value
    const temJS = document.querySelector("#js").checked
    const incluirLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtd * 100
    if (temJS) preco *= 1.1 /*ou- ou (preco *= 1.1) */
    if (incluirLayout) preco += 500
    let taxaUrgencia = 1 - prazo * 0.1
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

