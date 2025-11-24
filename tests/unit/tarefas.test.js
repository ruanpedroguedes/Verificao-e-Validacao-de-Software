import { validarTitulo, criarTarefaObjeto, adicionarTarefa, filtrarPor, marcarConcluidaPorId } from '../../src/tarefas.js';


describe('Testes unitários de tarefas', () => {
test('validarTitulo: should accept non-empty string', () => {
expect(validarTitulo('Comprar pão')).toBe(true);
});


test('validarTitulo: should reject empty or whitespace', () => {
expect(validarTitulo(' ')).toBe(false);
expect(validarTitulo('')).toBe(false);
});


test('criarTarefaObjeto + adicionarTarefa: should add task to array', () => {
const arr = [];
const t = criarTarefaObjeto('Tarefa A');
const novo = adicionarTarefa(arr, t);
expect(novo).toHaveLength(1);
expect(novo[0].titulo).toBe('Tarefa A');
expect(novo[0].done).toBe(false);
});


test('marcarConcluidaPorId: should toggle done flag', () => {
const t1 = { id: '1', titulo: 'A', done: false };
const arr = [t1];
const out = marcarConcluidaPorId(arr, '1');
expect(out[0].done).toBe(true);
const out2 = marcarConcluidaPorId(out, '1');
expect(out2[0].done).toBe(false);
});


test('filtrarPor: should filter by pending/done/all', () => {
const arr = [
{ id: '1', titulo: 'A', done: false },
{ id: '2', titulo: 'B', done: true }
];
expect(filtrarPor(arr, 'all')).toHaveLength(2);
expect(filtrarPor(arr, 'pending')).toHaveLength(1);
expect(filtrarPor(arr, 'done')).toHaveLength(1);
});
});