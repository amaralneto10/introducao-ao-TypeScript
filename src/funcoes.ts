function soma(num1: number, num2: number) : number {
    return num1 + num2
}

function calcularMedia(notas: number[]): number {
    const total = notas.reduce((acumulador: number, nota: number) => acumulador + nota, 0)
    return total / notas.length
}

console.log(calcularMedia([10,5,3,9]))