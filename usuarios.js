const prompt = require("prompt-sync")({sigint:true});

const usuarios = [];

let ultimoId = 1;

const emailNaoDuplicado = email => {
    if(usuarios.find(usuario => usuario.email == email)){
        return false;
    }
    return true;
};

const modelo = (id = ultimoId++) => {

    const nome = prompt("Digite o nome do usuário");
    const email = prompt("Digite o e-mail do usuário");
    const telefones = [];

    while(true){
        const telefone = prompt("Digite um número de telefone do usuário, ou 0 para sair");
        if(telefone == 0){
            break;
        }else{
            telefones.push(telefone);
        }
    }

    if(emailNaoDuplicado(email)){
        return{
            nome,
            email,
            telefones,
            id
            };
    }

    console.log("Falha em realizar o cadastro");

};

const criar = () => {
    const novo = modelo();

    if(novo){
        usuarios.push(novo);
        console.log("Usuário cadastrado com sucesso");
    }
};

const listar = () => {
    if(usuarios.lenght == 0){
        console.log("Lista de usuários vazia");
        return false;
    }else{
        return true;
        }
    usuarios.forEach(usuarios => {
        console.log(`
        ID ${usuario.id}
        Nome: ${usuario.nome}
        Email: ${usuario.email}
        `)

        usuario.telefones.forEach((telefone, indice) => {
            console.log(`Relefone ${indice +1}: ${telefone}`);
        });

    });

};

