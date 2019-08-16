class Gerador{
    geraHTML() {

    }

    addLista(array){

    }
}

class GeradorLista extends Gerador{
    geraHTML(){
        //console.log(lista)
        listaHTML = document.createElement("li").setAttribute("id", "lista")
        document.body.append(listaHTML)
        for(element of lista){
            document.getElementById("lista").appendChild(document.createElement("ul").appendChild(element))
        }
    }

    addLista(array){
        array.map((item) => {
            lista.push(item)
        })
    }
}

var element = null
var listaHTML = null
var lista = []
var gerador = new GeradorLista()
var listaCompras = ["shampoo", "frutas", "arroz"]
gerador.addLista(listaCompras)
gerador.addLista(listaCompras)
gerador.geraHTML()