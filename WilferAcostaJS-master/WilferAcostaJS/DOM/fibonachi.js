const fibonacci = (n1,n2,n) => {
    const cont = [n1, n2];
    for (let i = 2; i < n;i++) {
        a=cont[i-1];
        a1=a**2;
        cont[i] = cont[i-2]+a1;
    }
    return cont;
}
n1=0;
n2=1;
n=10;
console.log(fibonacci(n1,n2,n));