function Print(x){
    document.getElementById("prim").innerHTML=(x);//es printed
}
function findFactors(num) {
    var res = [];
    for (var i = 1; i <= num; i++) {
        if (!(num % i)) {
            res[res.length] = i;// Es zeigt wie viel kan man ein Zahl teilen (Factoren)
        }
    }
    return res;
}
function isPrime(num) {
    return findFactors(num).length === 2;// hier nimmt man die Zahlen die nur zwei Factoren hat
}
function findPrimes(num) {
    for (var i = 1, res = []; i <= num; i++) {
        if (isPrime(i)) {
            res[res.length] = i;// Addieren alle Zahlen in ein ARR.
        }
    }
    Print(res);
}