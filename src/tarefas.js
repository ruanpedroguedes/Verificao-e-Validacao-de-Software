// src/tarefas.js


export function validarTitulo(titulo) {
if (typeof titulo !== 'string') return false;
const t = titulo.trim();
return t.length > 0 && t.length <= 120;
}


export function criarTarefaObjeto(titulo) {
return { id: Date.now().toString(), titulo: titulo.trim(), done: false };
}


export function adicionarTarefa(array, tarefa) {
return [...array, tarefa];
}


export function marcarConcluidaPorId(array, id) {
return array.map(t => t.id === id ? { ...t, done: !t.done } : t);
}


export function filtrarPor(array, filtro) {
if (filtro === 'all') return array;
if (filtro === 'pending') return array.filter(t => !t.done);
if (filtro === 'done') return array.filter(t => t.done);
return array;
}


export function limparInput(element) {
if (element && typeof element.value !== 'undefined') element.value = '';
}


// para permitir testes via import em node
export default {
validarTitulo,
criarTarefaObjeto,
adicionarTarefa,
marcarConcluidaPorId,
filtrarPor,
limparInput
};