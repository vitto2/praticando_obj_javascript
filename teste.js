const list = ["Vitor","Rafa","Pedro","Rael","Casemiro"]

let posic = list.findIndex(function(element) { 
    return element == "Rael"
});

list.splice(posic,1)


console.log(list)