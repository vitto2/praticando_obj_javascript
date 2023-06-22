
const findUser = require('./encontrar')

const dados = require("./enderecos.json")

const clientes = dados.clientes; 

const listaClientes = findUser.showNames(clientes); 
const clientesSP = findUser.filterState(clientes,"RJ");
const clientTel = findUser.filterTel(clientes,"(11) 98765-4327")

console.log(clientesSP)
console.log(clientTel)