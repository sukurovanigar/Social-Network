function gimmiMoney() {
    var haveValue = document.getElementById("value").value;
    var rest2 = 0, rest1 = 0, rest50 = 0, rest20 = 0, rest10 = 0;
    var value = document.getElementById("add").value; // 173.70 €// 2€ finden
    if (value == "") {
        alert("Etwas stimmt nicht!")
        document.getElementById("money1").innerHTML = "Please enter a monay";
    } else {
        var halbvalue = (value / 2); //ok 173.70 / 2 = 86.85
        var euro2 = (Math.trunc(halbvalue)); //ok 86.85 trunc = 86 mal 2€ ok
        if (halbvalue > haveValue) {
            rest2 = (halbvalue - haveValue) * 2;
            console.log("rest2"+rest2);
            document.getElementById("money2").innerHTML = " 2 € : x " + haveValue;
            document.getElementById("money1").innerHTML = " 1 € : x " + rest2;
        } else {
            document.getElementById("money2").innerHTML = " 2 € : x " + euro2;
        }
        var findDifferense = (value - (euro2 * 2)).toFixed(2);// 1€ findem//ok 173.70-(2 * 86)= 173.70 - 172.00 = 01.70 € bleibt  geld
        var euro1 = (Math.trunc(findDifferense))// 1€
        if (rest2 > haveValue) {
            rest1 = (rest2 - haveValue) * 2;
            console.log("rest1 " + rest1);
            document.getElementById("money1").innerHTML = " 1 € : x" + haveValue;
        } else {
            document.getElementById("money1").innerHTML = "1 € : x " + Number(euro1 + rest2);
        }
        var findCent = (findDifferense - euro1).toFixed(2); //0.70// 0.50 € finden
        var cent50 = Math.trunc(findCent / 0.50);// 1 mal 0.50 cent
        if (rest1 > haveValue) {
            rest50 = (rest1 - haveValue) * 2.5;
            console.log("rest50 " + rest50);
            document.getElementById("money50").innerHTML = " 0.50 € : x " + haveValue;
        } else {
            document.getElementById("money50").innerHTML = "0.50 € : x " + Number(cent50 + rest1);
        }
        var findModify20 = (findCent % 0.50).toFixed(2); // 0.70 - 0.50 = 0.20 // 0.20 € finden
        var cent20 = Math.trunc((findModify20 / 0.20).toFixed(2)); //0.20 / 0.20 = 1
        id(rechneObEsGrossAlsValueIst(rest50,haveValue,rest20,2));
        if (rest50 > haveValue) {
            rest20 = (rest50 - haveValue) * 2;
            console.log("rest20 " + rest20);
            document.getElementById("money20").innerHTML = " 0.20 € : x " + haveValue;
        } else {
            document.getElementById("money20").innerHTML = "0.20 € : x " + Number(cent20 + rest50);
        }
        var findModify10 = (findModify20 % 0.20).toFixed(2);// 0.10 € finden
        var cent10 = Math.trunc((findModify10 / 0.10).toFixed(2));
        if (rest20 > haveValue) {
            rest10 = (rest20 - haveValue);
            console.log("rest10 " + rest10);
            alert("Entschuldigung! Das Geld reicht nicht. Bitte nehmen Sie Ihr Geld zürück.")
            document.getElementById("message").innerHTML = "ACHTUNG: <br> ES GIBT KEIN GELD IN AUTOMAT"
            document.getElementById("money10").innerHTML = " 0.10 € : x " + haveValue;
        } else {
            document.getElementById("money10").innerHTML = " 0.10 € : x " + Number(cent10 + rest20);
        }
    }
    id(rechneObEsGrossAlsValueIst(halbvalue,haveValue,rest2,2));
}
