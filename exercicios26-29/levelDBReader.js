class levelDBReader{
    constructor(level){
        var levelDB = level("juanvmr")
        function privateWrite(word){
            levelDB.put("word", word, (err)=>{
                if(!err){
                    console.log("Palavra " + word + " escrita no banco")
                }
            })
        }

        function privateRead(path){
            var fileManager = require("fs")
            var file = fileManager.readFileSync(path)
            var wordArray = file.toString().split(" ")
            wordArray.forEach(privateWrite)
        }

        this.read = privateRead
    }
}

var asdas = new levelDBReader(require("level"))
asdas.read("C:\\Users\\lab21\\Documents\\testo.txt")