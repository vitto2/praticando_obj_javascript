function findUserWithId(users,idUser) { 

    const user = users.find(user => user.id == idUser); 

    if(user == undefined) { 
        return "O usuário com o ID informado não existe"
    } else { 
        return user; 
    } 
}

function filterName(clientes, clienteNome) { 

    let found = clientes.filter((cliente) => { 
        let nome = cliente.nome; 
        if(nome.indexOf(clienteNome) != -1) return cliente;
    }
    )

    if(found.length >0) { 
        return found
    } else {
        return "Nenhum cliente foi encontrado com este nome."
    }
}

function listClient(clientes) { 
   const names = clientes.map(cliente => {
        return cliente.nome
   });

   return names;
}

function filterStateClientes(clientes,estado) { 
  
    let filterClient = clientes.filter((client) => { 

        const endereco = client.endereco; 

        if(endereco.estado === estado) { 
            return client
        } 
    })

    if(filterClient.length > 0) { 
        return filterClient;
    } else { 
        return "Não foi encontrado nenhum cliente residente deste estado.";
    }
    
}

function filterTelClientes(clientes,telefone) { 

    let filterClient = clientes.filter((client) => { 
        const tel = client.telefone; 

        if(tel === telefone) { 
            return client
        } 
    })

    if(filterClient.length > 0) { 
        return filterClient;
    } else { 
        return "Não foi encontrado nenhum cliente com este número.";
    }
}
module.exports = { 
    findUserWithId: findUserWithId, 
    findUserWithName: filterName,
    showNames: listClient,
    filterState: filterStateClientes,
    filterTel: filterTelClientes
} ; 
