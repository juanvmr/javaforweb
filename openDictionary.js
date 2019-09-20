var rl = require("readline-sync")
const req = require("request")
var word = rl.question("Digite uma palavra a ser pesquisada: ")
req("http://dicionario-aberto.net/search-json/" + word, (err, resp, body)=>{
    console.log("Palavra: " + body.entry.id)
    console.log("Definição: " + body.entry.sense.def)
    console.log("Origem: " + body.entry.etym.orig)
})

/*{"entry" : {
    "@id" : "teste",
    "@ast" : "1",
    "form" : {
        "orth" : "Teste"
    },
    "sense" : [{
        "gramGrp" : "f.",
        "usg" : {
            "@type" : "style",
            "#text" : "Obsol."
        },
        "def" : "O mesmo que _testemunha_."
    }],
    "etym" : {
        "@orig" : "Lat",
        "#text" : "(Lat. _testis_)"
    }
}
}*/