
document.write("<h1>Zahlenpyramide</h1>")
function pyramid() {
    var row = 4;
    var output = "";
    var zahl = "1";
    var myspace = "";
    for (var i = 0; i < row; i++) {
        for (var s = 0; s < (row - i - 2); s++) {
            myspace += " ";
        }
        for (var col = 1; col <= i + 1; col++) {
            output += zahl;
            zahl++;
        }
        document.write("<center>");
        document.write(myspace + output+ "<br>");
        output = "";
    }
}
pyramid();
//1
var text = "";
for (var y = 1, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal").innerHTML = text;

//2
var text = "";
for (var y = 2, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal2").innerHTML = text;

//3
var text = "";
for (var y = 3, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * 3 + "<br>";
}
document.getElementById("mal3").innerHTML = text;

//4
var text = "";
for (var y = 4, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal4").innerHTML = text;

//5
var text = "";
for (var y = 5, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal5").innerHTML = text;

//6
var text = "";
for (var y = 6, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal6").innerHTML = text;

//7
var text = "";
for (var y = 7, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal7").innerHTML = text;

//8
var text = "";
for (var y = 8, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal8").innerHTML = text;

//9
var text = "";
for (var y = 9, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal9").innerHTML = text;

//10
var text = "";
for (var y = 10, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal10").innerHTML = text;


// weniger code

var text = "";
for (var y = 1, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
} 



var text = "";
var i = 0;
while (i < 11) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("mal10").innerHTML = text;


// wechselautomat

function gimmiMoney() {
    // 2€ finden
    const value17370 = document.getElementById("add").value; // 173.70 €
    const price8685 = value17370 / 2; //ok 173.70 / 2 = 86.85
    const price3_86 = (Math.trunc(price8685)); //ok 86.85 trunc = 86 mal 2€ ok 
    document.getElementById("money").innerHTML = "2€: " + (price3_86) + "x"; // 2€ ok 86x
    // 1€ findem
    const price1 = (value17370 - (2 * price3_86)).toFixed(2);//ok 173.70-(2 * 86)= 173.70 - 172.00 = 01.70 € bleibt  geld
    const price4_1 = Math.abs(Math.trunc(price1))// 1€
    document.getElementById("money1").innerHTML = "1€: " + "0" + (price4_1) + "x";
    // 0.50 € finden
    const cent = (price1 - price4_1).toFixed(2); //0.70

    // if(cent==0.90){
    //     document.getElementById("money2").innerHTML="0.50€ : 01x <br> 0.20€ : 02x <br> 0.10€ : 00x <br>"
    // }else if(cent==0.80){
    //     document.getElementById("money2").innerHTML="0.50€ : 01x <br> 0.20€ : 01x <br> 0.10€ : 01x <br>"
    // }else if(cent==0.70){
    //     document.getElementById("money2").innerHTML="0.50€ : 01x <br> 0.20€ : 01x <br> 0.10€ : 00x <br>"
    // }else if(cent==0.60){
    //     document.getElementById("money2").innerHTML="0.50€ : 01x <br> 0.20€ : 00x <br> 0.10€ : 01x <br>"
    // }else if(cent==0.50){
    //     document.getElementById("money2").innerHTML="0.50€ : 01x <br> 0.20€ : 00x <br> 0.10€ : 00x <br>"
    // }else if(cent==0.40){
    //     document.getElementById("money2").innerHTML="0.50€ : 00x <br> 0.20€ : 02x <br> 0.10€ : 00x <br>"
    // }else if(cent==0.30){
    //     document.getElementById("money2").innerHTML="0.50€ : 00x <br> 0.20€ : 01x <br> 0.10€ : 01x <br>"
    // }else if(cent==0.20){
    //     document.getElementById("money2").innerHTML="0.50€ : 00x <br> 0.20€ : 01x <br> 0.10€ : 00x <br>"
    // }else if(cent==0.10){
    //     document.getElementById("money2").innerHTML="0.50€ : 00x <br> 0.20€ : 00x <br> 0.10€ : 01x <br>"
    // }else {
    //     document.getElementById("money2").innerHTML="0.50€ : 00x <br> 0.20€ : 00x <br> 0.10€ : 00x <br>"
    // }
    if (cent == 0.00) {
        document.getElementById("money3").innerHTML = "es gibt kein Cent"
    }
    if (cent >= 0.09) {
        const price6 = cent / 0.50;// 1 mal 0.50 cent
        document.getElementById("money2").innerHTML = "0.50€: " + "0" + (Math.trunc(price6)) + "x";
        // 0.20 € finden
        if(cent== 0.40){
            document.getElementById("money3").innerHTML = "0.20€: " + "02x";
        }else{
        const price7_020 = (cent - 0.50).toFixed(2); // 0.70 - 0.50 = 0.20
        const price8 = (price7_020 / 0.20).toFixed(2); //0.20 / 0.20 = 1
        document.getElementById("money3").innerHTML = "0.20€: " + "0" + Math.abs(Math.trunc(price8)) + "x";
        }
        
        // 0.10 € finden
        const price9 = ((cent - 0.70) / 0.10).toFixed(2)
        if (cent == 0.90 || cent == 0.20 || cent== 0.50|| cent== 0.40) {
            document.getElementById("money4").innerHTML = "0.10€: 00x";
        } else {
            document.getElementById("money4").innerHTML = "0.10€: 0" + Math.abs(Math.trunc(price9)) + "x";
        }
    }
}
// HILFSNOTEN:

// value17370 = 173.70 € 
// price8685 = 86.85 €
// price3_86 = 86.00 €
// price1 = 01.70 €
// price4_1 = 1€
// cent = 0.70 €
// price6 = es gibt nur 1 mal 0.50 in 0.70.
// price7_020 = 0,20
// price8 = 1

// atm-js 

function gimmiMoney() {
    // 2€ finden
    const value = document.getElementById("add").value; // 173.70 €
    const halbvalue = value / 2; //ok 173.70 / 2 = 86.85
    const euro2 = (Math.trunc(halbvalue)); //ok 86.85 trunc = 86 mal 2€ ok 
    document.getElementById("money").innerHTML = "2 € : x " + euro2; // 2€ ok 86x
    // 1€ findem
    const findDifferense = (value - (2 * euro2)).toFixed(2);//ok 173.70-(2 * 86)= 173.70 - 172.00 = 01.70 € bleibt  geld
    const euro1 = (Math.trunc(findDifferense))// 1€
    document.getElementById("money1").innerHTML = "1 € : x " + euro1;
    // 0.50 € finden
    const findCent = (findDifferense - euro1).toFixed(2); //0.70
    const cent50 = Math.trunc(findCent / 0.50);// 1 mal 0.50 cent
    document.getElementById("money2").innerHTML = "0.50 € : x " + cent50;
    // 0.20 € finden
    const findModify20 = (findCent % 0.50).toFixed(2); // 0.70 - 0.50 = 0.20
    const cent20 = Math.trunc((findModify20 / 0.20).toFixed(2)); //0.20 / 0.20 = 1
    document.getElementById("money3").innerHTML = "0.20 € : x " + cent20;
    // 0.10 € finden
    const findModify10 = (findModify20 % 0.20).toFixed(2);
    const cent10 = Math.trunc((findModify10 / 0.10).toFixed(2));
    document.getElementById("money4").innerHTML = "0.10 € : x " + cent10;
    // Jetzt wechsel it
    const haveValue2 = document.getElementById("zwei").value;
    const haveValue1 = document.getElementById("ein").value;
    const haveValue50 = document.getElementById("funfzig").value;
    const haveValue20 = document.getElementById("zwanzig").value;
    const haveValue10 = document.getElementById("zehn").value;
    // Subtraction of Values
    const give2 =  haveValue2 - euro2;
    const give1 =  haveValue1 - euro1;
    const give50 = haveValue50 - cent50;
    const give20 = haveValue20 - cent20;
    const give10 = haveValue10 - cent10;
// wenn haveValu<0
    const show1 =Math.trunc(give1-Math.abs(give2*2).toFixed(2));
    const show50 =Math.trunc(give50-Math.abs(give1*2).toFixed(2));
    const show20 =Math.trunc(give20-Math.abs(give50*2.5).toFixed(2));
    const show10 =Math.trunc(give10-Math.abs(give20*2).toFixed(2));
    
    if(give2<0){
        doconument.getElementById("test").innerHTML="2 € : x" +haveValue2 +" 1 € : x"+show1+" 0.50 € : x"+cent50+" 0.20"; 
    }
    // if(give2<0){
    //     const show1 =Math.trunc(give1-Math.abs(give2*2).toFixed(2));
    //     document.getElementById("test").innerHTML="2 € : x" +haveValue2 +" 1 € : x"+show1+" 0.50 € : x"+cent50; 
    // }
    // if(give2<0&&give1<0){
    //     const show50 =Math.trunc(give50-Math.abs(give1*2).toFixed(2));
    //     doconument.getElementById("test").innerHTML="2 € : x" +haveValue2 +" 1 € : x"+haveValue1+" 0.50 € : x"+show50; 
    // }
    
    // if(take2<0||take1<0||take50<0||take20<0||take10<0){
    //     alert("Entschuldigung! Das Geld reicht nicht. Bitte nehmen Sie Ihre Geld zürück.")
    //     document.getElementById("message").innerHTML="ACHTUNG: <br> ES GIBT KEIN GELD IN AUTOMAT"
    // }else{
    //     document.getElementById("message").innerHTML="Sie können Ihre Münze mit nehmen!"
    // }
    document.getElementById("test2").innerHTML= give2;
    document.getElementById("test1").innerHTML= give1;
    document.getElementById("test50").innerHTML=give50;
    document.getElementById("test20").innerHTML=give20;
    document.getElementById("test10").innerHTML=give10;
}



    // const summeAutomat = Number(haveValue2 * 2) + Number(haveValue1 * 1) + Number(haveValue50 * 0.5) + Number(haveValue20 * 0.2) + Number(haveValue10 * 0.1); 
    // // Subtraction of Values
    // const give2 = haveValue2 - euro2;
    // const give1 = haveValue1 - euro1;
    // const give50 = haveValue50 - cent50;
    // const give20 = haveValue20 - cent20;
    // const give10 = haveValue10 - cent10;

    // wenn es kein 2 € gibt
    //     if (give2 < 0) {
    //         const show1 = Math.trunc(give1 - Math.abs(give2 * 2).toFixed(2));
    //         document.getElementById("test").innerHTML = "2x € : x" + haveValue2 + "<br>1 € : x" + show1 + "<br> 0.50 € : x" + cent50 + "<br> 0.20 € : x" + cent20 + "<br> 0.10 € : x" + cent10;
    //         // wenn es kein 1 € gibt
    //         if (show1 < 0) {
    //             const show50 = Math.trunc(give50 - Math.abs(give1 * 2).toFixed(2));
    //             document.getElementById("test").innerHTML = "2 € : x" + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x" + show50 + " 0.20 € : x" + cent20 + " 0.10 € : x" + cent10;
    //             // wenn es kein 50cent gibt
    //             if (show50 < 0) {
    //                 const show20 = Math.trunc(give20 - Math.abs(give50 * 2.5).toFixed(2));
    //                 document.getElementById("test").innerHTML = "2 € : x" + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x" + haveValue50 + " 0.20 € : x" + show20 + " 0.10 € : x" + cent10;

    //                 if (show20 < 0) {
    //                     const show10 = Math.trunc(give10 - Math.abs(give20 * 2).toFixed(2));
    //                     document.getElementById("test").innerHTML = "2 € : x" + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x" + haveValue50 + " 0.20 € : x" + haveValue20 + " 0.10 € : x" + show10;
    //                     if (show10 < 0) {
    //                         var dontHave=Math.abs(show10)
    //                         document.getElementById("test").innerHTML = "2 € : x" + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x" + haveValue50 + " 0.20 € : x" + haveValue20 + " 0.10 € : x" + haveValue10+" Der Automat hat derzeit nur " + summeAutomat;
    //                         alert("Entschuldigung! Das Geld reicht nicht. Bitte nehmen Sie Ihr Geld zürück.")
    //                         document.getElementById("message").innerHTML = "ACHTUNG: <br> ES GIBT KEIN GELD IN AUTOMAT"
    //                     } 

    //                 }
    //             }
    //         }
    //     }else {
    //         document.getElementById("test").innerHTML = "2 € : x" + euro2 + "<br>1 € : x" + euro1 + "<br> 0.50 € : x" + cent50 + "<br> 0.20 € : x" + cent20 + "<br> 0.10 € : x" + cent10;
    //         document.getElementById("message").innerHTML = "Sie können Ihre Münze mit nehmen!"
    // }
    // document.getElementById("test2").innerHTML = give2;
    // document.getElementById("test1").innerHTML = give1;
    // document.getElementById("test50").innerHTML = give50;
    // document.getElementById("test20").innerHTML = give20;
    // document.getElementById("test10").innerHTML = give10;//#endregion

















// sicherheit
    function gimmiMoney() {
        var haveValue2 = document.getElementById("zwei").value;
        var haveValue1 = document.getElementById("ein").value;
        var haveValue50 = document.getElementById("funfzig").value;
        var haveValue20 = document.getElementById("zwanzig").value;
        var haveValue10 = document.getElementById("zehn").value;
        var rest2 = 0;
        var rest1 = 0;
        var rest50 = 0;
        var rest20 = 0;
        var rest10 = 0;
        // 2€ finden
        var value = document.getElementById("add").value; // 173.70 €
        if (value == "") {
            alert("Etwas stimmt nicht!")
            document.getElementById("money1").innerHTML = "Please enter a monay";
        } else {
            var halbvalue = (value / 2); //ok 173.70 / 2 = 86.85
            console.log("halbvalue "+halbvalue)
            var euro2 = (Math.trunc(halbvalue)); //ok 86.85 trunc = 86 mal 2€ ok
            if (halbvalue > haveValue2) {
                rest2 = (halbvalue - haveValue2) * 2;
                console.log("rest2 "+rest2);
                document.getElementById("money2").innerHTML = " 2 € : x " + haveValue2;
                document.getElementById("money1").innerHTML = " 1 € : x " + rest2;
            } else {
                document.getElementById("money2").innerHTML = " 2 € : x " + euro2;
            }
            // 1€ findem
            var findDifferense = (value - (euro2 * 2)).toFixed(2);//ok 173.70-(2 * 86)= 173.70 - 172.00 = 01.70 € bleibt  geld
            var euro1 = (Math.trunc(findDifferense))// 1€
            if (rest2 > haveValue1) {
                rest1 = (rest2 - haveValue1) * 2;
                console.log("rest1 "+rest1);
                document.getElementById("money1").innerHTML = " 1 € : x" + haveValue1;
            } else {
                document.getElementById("money1").innerHTML = "1 € : x " + Number(euro1+rest2);
            }
            // 0.50 € finden
            var findCent = (findDifferense - euro1).toFixed(2); //0.70
            var cent50 = Math.trunc(findCent / 0.50);// 1 mal 0.50 cent
            if (rest1 > haveValue50) {
                rest50 = (rest1 - haveValue50) * 2.5;
                console.log("rest50 "+rest50);
                document.getElementById("money50").innerHTML = " 0.50 € : x " + haveValue50;
            } else {
                document.getElementById("money50").innerHTML = "0.50 € : x " + Number(cent50+rest1);
            }
            // 0.20 € finden
            var findModify20 = (findCent % 0.50).toFixed(2); // 0.70 - 0.50 = 0.20
            var cent20 = Math.trunc((findModify20 / 0.20).toFixed(2)); //0.20 / 0.20 = 1
            if (rest50 > haveValue20) {
                rest20 = (rest50 - haveValue20) *2;
                console.log("rest20 "+rest20);
                document.getElementById("money20").innerHTML = " 0.20 € : x " + haveValue20;
            } else {
                document.getElementById("money20").innerHTML = "0.20 € : x " + Number(cent20+rest50);
            }
            // 0.10 € finden
            var findModify10 = (findModify20 % 0.20).toFixed(2);
            var cent10 = Math.trunc((findModify10 / 0.10).toFixed(2));
            if (rest20 > haveValue10) {
                rest10 = (rest20 - haveValue10);
                console.log("rest10 "+rest10);
                alert("Entschuldigung! Das Geld reicht nicht. Bitte nehmen Sie Ihr Geld zürück.")
                document.getElementById("message").innerHTML = "ACHTUNG: <br> ES GIBT KEIN GELD IN AUTOMAT"
                document.getElementById("money10").innerHTML =" 0.10 € : x " + haveValue10;
            } else {
                document.getElementById("money10").innerHTML = " 0.10 € : x " + Number(cent10+rest20);
            }
        }
    }

    function rechne(muenze, munzewert, betrag){

        [1,2,3,"456"]
            return {
                "restBetrag" : 234,
                "ausgabeMunze":100
            }
        }
// en son
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
        }








        // //(////////////////////////////////////////
        
function show(){
    while(start<=end){
    var start=document.getElementById("start").value;
    var end=document.getElementById("end").value;
    var n = start;
    var counter =0;
    var numList=[];
    var a="";
    var counterList=[];
    while(n!=1){
    if(n%2==0){
        n/=2;
    }
    else{
        n=(3*n)+1;
    }
    numList[counter]=n;
    counter++;
}
var result;
for(var i=0; i < numList.length; i++){
    result=result+ numList[i]+ ', ';
    
}
counterList[result]=a;
a++;
start++;
    }
document.getElementById("SequenzLength").innerHTML="Es gibt : "+counter+" Sequenz.";
}






function show(start , end){

    for(var i = start; i<=end;i++){
        var value = i;
        var n = i;
        var counter = 0;
        var numList = [];
        var objektListe = [];
        var objValue;
        while (n != 1) {
            n % 2 == 0 ? n /= 2 : n = (3 * n) + 1;
            numList[counter] = n;
            counter++;
        }
        objValue = {
            'inpValue': value,
            'SeqValue': counter,
            'List': numList
        };
        objektListe.push(objValue);
        document.getElementById("SequenzLength").innerHTML += "Nummer: " + objValue.inpValue + " hat " + objValue.SeqValue + " Sequenzen!" + " Sie sind: " + objValue.List + "<br>";
    }
}
// function find() {
//     var value = i;
//     var n = i;
//     var counter = 0;
//     var numList = [];
//     var objektListe = [];
//     var objValue;
//     while (n != 1) {
//         n % 2 == 0 ? n /= 2 : n = (3 * n) + 1;
//         numList[counter] = n;
//         counter++;
//     }
//     objValue = {
//         'inpValue': value,
//         'SeqValue': counter,
//         'List': numList
//     };
//     objektListe.push(objValue);
//     document.getElementById("SequenzLength").innerHTML += "Nummer: " + objValue.inpValue + " hat " + objValue.SeqValue + " Sequenzen!" + " Sie sind: " + objValue.List + "<br>";
// }







