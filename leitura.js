
const findUser = require('./encontrar')

const dados = require("./enderecos.json")

const clientes = dados.clientes; 

let listaClientes = findUser.showNames(clientes); 
const clientesSP = findUser.filterState(clientes,"RJ");
const clientTel = findUser.filterTel(clientes,"(11) 98765-4327");
const clientCep = findUser.filterCep(clientes,"54321-876");
const mediaChar = findUser.characteresMedia(clientes);

const adress = {
    "logradouro": "Caminho 71",
        "numero": 0,
        "bairro": "Vida Nova",
        "cidade": "Lauro de Freitas",
        "estado": "BA",
        "cep": "42700000"
}

console.log(listaClientes)
findUser.editAddress(clientes,1,adress)
findUser.characteresCount(clientes,9)
console.log(mediaChar)

