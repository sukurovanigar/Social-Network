

function show() {
    var start =Number(document.getElementById("start").value);
    var end = Number(document.getElementById("end").value);

    for (var i = start; i <= end; i++) {// 

        var value = i;
        var n = i;
        var counter = 0;
        var numList = [];
        var objektListe = [];
        const MaxNum = [];
        var objValue;
        while (n > 1) {
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
        MaxNum.push(objValue.SeqValue);
        const largestNumber = (values) => {
            let highest =0;
            for (let i = 0; i < values.length; i += 1) {
            
                if(values[i]>highest){
                    highest = values[i];
                }
                return highest;
            }
            
        }
        console.log(largestNumber(objValue.SeqValue));

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
