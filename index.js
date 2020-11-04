import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';

const cliente1 = new Cliente('Marco', 83556826372);
const cliente2 = new Cliente('Ferreira', 111111111111);

const contaCorrenteMarco = new ContaCorrente(3507-6, cliente1);
contaCorrenteMarco.deposito(500);
const conta2 = new ContaCorrente(1002, cliente2);


let valor = 200;
contaCorrenteMarco.transferir(valor,conta2);

console.log("valor ", valor)
console.log(cliente2);
console.log('');
console.log(contaCorrenteMarco);
console.log(ContaCorrente.numerosDeConta);
