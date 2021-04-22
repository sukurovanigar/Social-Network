var haveValue = document.getElementById("value").value;
var rest2 = 0, rest1 = 0, rest50 = 0, rest20 = 0, rest10 = 0;
var value = document.getElementById("add").value; // 173.70 €// 2€ finden
var halbvalue = (value / 2); //ok 173.70 / 2 = 86.85
var euro2 = (Math.trunc(halbvalue)); //ok 86.85 trunc = 86 mal 2€ ok
function id(x){
    document.getElementById('result').innerHTML=x;
    console.log(x);
}
function rechneObEsGrossAlsValueIst(muenze,valueof,rest,operator) {
    if(muenze>valueof){
        rest=(muenze-valueof)*operator;
    }
    return rest;
}

