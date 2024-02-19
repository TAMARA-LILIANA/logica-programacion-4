// Función para calcular la serie fibonacci

function calcularFibonacci() {
    let aux1 = 0 ;
    let aux2 = 1 ;
    let resultado = 0 ;
    document.getElementById("fibonacciResult").innerText = ""
    let inputFibonacci = parseFloat(document.getElementById("inputFibonacci").value);

    // 
    if (!isNaN(inputFibonacci)) {
         
        for (let ciclo = 0; ciclo <= inputFibonacci ; ciclo++) {
            
            console.log(resultado)
            let texto = document.getElementById("fibonacciResult").innerText;
            texto = texto+ " " + resultado + " , " 
            document.getElementById("fibonacciResult").innerText = texto

            resultado = aux1 + aux2
            aux2 = aux1
            aux1 = resultado
        }

    } else {
        alert("Por favor, ingrese un numero.");
    }
}