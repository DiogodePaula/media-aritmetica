let numbers = [8.67, 9.50, 6.38, 7.45, 5.87, 6.39, 7.32, 6.25, 8.11, 6.33, 4.15, 1.12, 2.56, 5.55, 9.99]

function somar(total, number){
    return total + number;
}

document.getElementById("result").innerHTML += `
    <h2>A Soma das notas é: ${numbers.reduce(somar, 0)}</h2>
    <h2>A Média das notas é: ${numbers.reduce(somar, 0) / numbers.length}
`