const fibonacci = (n1, n2, n) => {
    const cont = [n1, n2];

    for (let i = 2; i <= (n + 1); i++) {
        cont[i] = cont[i -2] + cont[i - 1];

    }

    return cont;
}
console.log(fibonacci(1,0,10));