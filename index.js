import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';
import ContaPoupanca from './ContaPoupanca.js';
import Conta from './Conta.js';

const cliente1 = new Cliente('Marco', 83556826372);
const cliente2 = new Cliente('Luis Felipe', 1111111111111);

const contaCorrenteMarco = new ContaCorrente(0, cliente1, 3507-6);
contaCorrenteMarco.deposito(500);
contaCorrenteMarco.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente2, 1002);

console.log(contaPoupanca);
console.log(contaCorrenteMarco);
