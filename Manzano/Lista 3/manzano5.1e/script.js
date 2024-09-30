let base = 5;
let expoente;

console.log("Potências de 5:");
for (expoente = 0; expoente <= 15; expoente++) {
    if (expoente === 0) {
        console.log(1);
    } else {
        base *= 5;
        console.log(base);
    }
}