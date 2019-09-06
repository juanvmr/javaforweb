/*var jsonRepeatFilter = function(userString){
    return resultado.indexOf(userString) === -1;
}*/

function askUser(){
    return rl.question("Digite uma sequencia de palavras: ").split(" ");
}

var rl = require('readline-sync');
var fileManager = require('fs');
var file;
var jsonId = 0;
var jsonObj = {
    table : []
};
var asked = askUser();
var resultado = [];
/*resultado = askUser().filter(jsonRepeatFilter);
jsonObj.table.push(resultado);
console.log(resultado);*/
for(var i=0; i<asked.length; i++){
    if(!resultado.includes(asked[i])){
        jsonObj.table.push({id : jsonId, string : asked[i]});
        resultado.push(asked[i]);
        jsonId++;
    }
}
console.log(jsonObj.table);
file = fileManager.writeFileSync("dictionary.json", JSON.stringify(jsonObj), {encoding:"utf8", flag:"a"})