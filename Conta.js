class Conta{
  constructor(saldo_inicial, cliente, agencia) {
    this._saldo = saldo_inicial;
    this._cliente = cliente;
    this._agencia = agencia;
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

export default Conta