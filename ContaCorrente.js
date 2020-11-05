import Cliente from "./Cliente.js";

class ContaCorrente{
  static numerosDeConta = 0;

  set cliente(novoCliente) {
    if(novoCliente instanceof Cliente) this._cliente = novoCliente;
  }

  get cliente() {
    return this._cliente;
  }

  

  get saldo() {
    return this._saldo;
  }

  constructor(agencia, cliente) {
    this._agencia = agencia;
    this._cliente = cliente;
    this._saldo = 0;
    ContaCorrente.numerosDeConta += 1;
  }

  deposito(valor){
    if(valor <= 0 ){
      return;
    }
    this._saldo += valor;
  }

  sacar(valor){
    if(this._saldo >= valor) {
      this._saldo -= valor;   
      return valor;
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.deposito(valorSacado);
  }
}

export default ContaCorrente;