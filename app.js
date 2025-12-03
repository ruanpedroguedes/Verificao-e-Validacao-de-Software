// app.js (module) novos testes
import * as T from './src/tarefas.js';

const form = document.getElementById('form-tarefas');
const input = document.getElementById('input-titulo');
const lista = document.getElementById('lista-tarefas');
const mensagem = document.getElementById('mensagem');

let tarefas = [];
let filtroAtual = 'all';

function render() {
  const visiveis = T.filtrarPor(tarefas, filtroAtual);
  lista.innerHTML = '';

  visiveis.forEach(t => {
    const li = document.createElement('li');

    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = t.done;

    cb.addEventListener('change', () => {
      tarefas = T.marcarConcluidaPorId(tarefas, t.id);
      render();
    });

    const span = document.createElement('span');
    span.className = 'titulo' + (t.done ? ' done' : '');
    span.textContent = t.titulo;

    left.appendChild(cb);
    left.appendChild(span);
    li.appendChild(left);
    lista.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  mensagem.textContent = '';

  const titulo = input.value;

  if (!T.validarTitulo(titulo)) {
    mensagem.textContent = 'Título inválido. Preencha antes de adicionar.';
    return;
  }

  const t = T.criarTarefaObjeto(titulo);
  tarefas = T.adicionarTarefa(tarefas, t);

  T.limparInput(input);
  render();
});

const radios = document.querySelectorAll('input[name="filtro"]');
radios.forEach(r => r.addEventListener('change', (ev) => {
  filtroAtual = ev.target.value;
  render();
}));

// export para depuração
window.__tarefasApp = { getState: () => tarefas };

render();

