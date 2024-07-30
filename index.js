const prompt = require('prompt-sync')({sigint:true});

const {criar, atualizar, remover, listar} = require("./usuario");

while(true){
  console.log(`
    
    1 - Cadastrar novo usuário
    2 - Listar usuários cadastrados
    3 - Atualizar cadastro de usuário
    4 - Excluir usuário
    5 - Sair
    
    `);

  const opcao = +prompt();

  switch (opcao) {
    case 1:
        criar();
      break;
    case 2:
        listar();
      break;
    case 3:
        atualizar();
      break;
    case 4:
        remover();
      break;
    case 5:
        process.exit
      break;

    default:
        console.log("A opção digitada não é válida")
      break;
  }
}