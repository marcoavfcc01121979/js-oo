import Conta from "./Conta.js";

export default class ContaPoupanca extends Conta{
  constructor(saldo_inicial, cliente, agencia) {
    super(saldo_inicial, cliente, agencia);
  }

  sacar(valor) {
    const taxa = 1.02;
    return this._sacar(valor, taxa);
  }
}