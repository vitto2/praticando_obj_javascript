
const findUser = require('./encontrar')

const dados = require("./enderecos.json")

const clientes = dados.clientes; 

const listaClientes = findUser.showNames(clientes); 
const clientesSP = findUser.filterState(clientes,"RJ");

//console.log(findUser.findUserWithId(clientes,7));
//console.log(findUser.findUserWithName(clientes,"Lorena"));

console.log(clientesSP)