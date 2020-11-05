import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';
import ContaPoupanca from './ContaPoupanca.js';
import Conta from './Conta.js';

const cliente1 = new Cliente('Marco', 83556826372);

const contaCorrenteMarco = new Conta(0, cliente1, 3507-6);
contaCorrenteMarco.deposito(500);
contaCorrenteMarco.sacar(100)

const contaPoupanca = new Conta(50, cliente1, 1002);

console.log(contaPoupanca);
console.log(contaCorrenteMarco);
