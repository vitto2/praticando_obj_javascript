
const findUser = require('./encontrar')

const dados = require("./enderecos.json")

const clientes = dados.clientes; 

const listaClientes = findUser.showNames(clientes); 
const clientesSP = findUser.filterState(clientes,"RJ");
const clientTel = findUser.filterTel(clientes,"(11) 98765-4327");
const clientCep = findUser.filterCep(clientes,"54321-876");

const adress = {
    "logradouro": "Caminho 71",
        "numero": 0,
        "bairro": "Vida Nova",
        "cidade": "Lauro de Freitas",
        "estado": "BA",
        "cep": "42700000"
}

findUser.editAddress(clientes,1,adress)


console.log(clientesSP)
console.log(clientTel)
console.log(clientCep)
console.log(findUser.findUserWithId(clientes,1))