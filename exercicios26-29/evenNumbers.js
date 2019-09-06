var getEvenNumbers = function (argv){
    return (argv % 2) === 0;
}
console.log(process.argv.filter(getEvenNumbers));