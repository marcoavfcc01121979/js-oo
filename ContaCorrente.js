class ContaCorrente{
  agencia;
  cliente;

  _saldo = 0;

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