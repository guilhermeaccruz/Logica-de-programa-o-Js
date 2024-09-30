for (let num = 1; num <= 10; num++) {
    if (num % 2 !== 0) { 
        let fatorial = 1;
        for (let i = 1; i <= num; i++) {
            fatorial *= i; 
        }
        console.log("Fatorial de " + num + " é: " + fatorial); // Exibe o resultado
    }
}