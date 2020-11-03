import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = 'Marco';
cliente1.cpf = 83556826372;

const cliente2 = new Cliente();
cliente2.nome = 'Ferreira';
cliente2.cpf = 111111111111;

const contaCorrenteMarco = new ContaCorrente();
contaCorrenteMarco.agencia = 3507-6;
contaCorrenteMarco.cliente = cliente1;
contaCorrenteMarco.deposito(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 1002;

let valor = 200;
contaCorrenteMarco.transferir(valor,conta2);

console.log("valor ", valor)
console.log(conta2.cliente);

