import Cliente from "./Cliente.js";
import Conta from "./Conta.js";

class ContaCorrente extends Conta{
  static numerosDeConta = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia)
    ContaCorrente.numerosDeConta += 1;
  }

  sacar(valor){
    let taxa = 1.1;
    const valorSacado = taxa * valor
    if(this._saldo >= valorSacado) {
      this._saldo -= valorSacado;   
      return valorSacado;
    }
  }
}

export default ContaCorrente;