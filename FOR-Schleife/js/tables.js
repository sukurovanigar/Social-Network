
function Interval() {
    let von = Number(document.getElementById("von").value)
    var bis = Number(document.getElementById("bis").value);
    var step = Number(document.getElementById("step").value);
    if (von !== "" || bis !== "" || step !== "") {
        document.getElementById("table").innerHTML = "<tr><th>i</th><th>i²</th><th>i³</th><th>wurzel(i)</th><th>ln(i)</th><th>e^i</th></tr>";
    }
    if (von == "" || bis == "" || step == "") {
        alert('fehlende eingaben');
        return;
    }
    var Numbers = [0];
    for (var i = von; i <= bis; i = i + step) {
        Numbers[Numbers.length] = i;
        var int = document.getElementById("table").innerHTML +="<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td><td>" + Math.sqrt(i).toFixed(8) + "</td><td>" + Math.log(i).toFixed(13) + "</td><td>" + Math.exp(i).toFixed(6) + "</td></tr>";
    }
    return int;
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
        if (von !== "" || bis !== "" || step !== "") {
            document.getElementById("table").innerHTML = "<tr><th>i</th><th>i²</th><th>i³</th><th>wurzel(i)</th><th>ln(i)</th><th>e^i</th></tr>";
        }
        if (von == "" || bis == "" || step == "") {
            alert('fehlende eingaben');
            return;
        }
        var von1=Number(document.getElementById("von").value)
        for (var i = von1, res = []; i <= num; i++) {
            if (isPrime(i)) {
                res[res.length] = i;// Addieren alle Zahlen in ein ARR.
                document.getElementById("table").innerHTML +="<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td><td>" + Math.sqrt(i).toFixed(8) + "</td><td>" + Math.log(i).toFixed(13) + "</td><td>" + Math.exp(i).toFixed(6) + "</td></tr>";

            }
        }
        return res;
    }
    
