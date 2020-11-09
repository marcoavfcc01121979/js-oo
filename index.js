import Cliente from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaDeAutenticacao } from './sistemaDeAutenticacao.js';

const diretor = new Diretor('Maria', 10.000, 12345678910);
diretor.cadastrarSenha('123456');
const gerente = new Gerente('Felipe', 8.000, 98765432109);
gerente.cadastrarSenha('654321');

const diretorLogado = SistemaDeAutenticacao.login(diretor, '123456');
const gerenteLogado = SistemaDeAutenticacao.login(gerente, '654321');

console.log(diretorLogado);
console.log(gerenteLogado);