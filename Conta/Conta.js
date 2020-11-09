class Conta{
  constructor(saldo_inicial, cliente, agencia) {
    if(this.constructor == conta) {
      throw new Error('A Classe conta é uma classe abstrata nao podendo ser instanciada ela diretamente.')
    }
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

  //metodo abstrado so server para ser sobreescrito.
  sacar(valor) {
    throw new Error('O método da sacar da conta é abstrato')
  }

  _sacar(valor, taxa){
    const valorSacado = taxa * valor
    if(this._saldo >= valorSacado) {
      this._saldo -= valorSacado;   
      return valorSacado;
    }
    return 0;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.deposito(valorSacado);
  }
}

export default Conta