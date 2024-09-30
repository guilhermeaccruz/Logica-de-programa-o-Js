let celsius, fahrenheit;

console.log("Conversão de Celsius para Fahrenheit");
console.log("Celsius    Fahrenheit");
celsius = 10;

while (celsius <= 100) {
    fahrenheit = (celsius * 9 / 5) + 32;
    console.log(celsius + "          " + fahrenheit.toFixed(2));
    celsius += 10;
}