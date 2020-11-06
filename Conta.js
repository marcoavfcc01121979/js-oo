class Conta{
  constructor(saldo_inicial, cliente, agencia) {
    this._saldo = saldo_inicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  set cliente(novoCliente) {
    if(novoCliente instanceof Cliente) this._cliente = novoCliente;
  }

  get cliente() {
    return this._cliente;
  }

  

  get saldo() {
    return this._saldo;
  }

  deposito(valor){
    if(valor <= 0 ){
      return;
    }
    this._saldo += valor;
  }

  sacar(valor){
    let taxa = 1;
    const valorSacado = taxa * valor
    if(this._saldo >= valorSacado) {
      this._saldo -= valorSacado;   
      return valorSacado;
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.deposito(valorSacado);
  }
}

export default Conta