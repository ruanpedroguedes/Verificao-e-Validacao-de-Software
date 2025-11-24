# 📘 Plataforma de Tarefas — README Oficial

Uma aplicação **extremamente simples**, feita apenas com **HTML + CSS + JavaScript puro**, acompanhada de testes unitários, testes funcionais e CI.

---

## 📌 1. Sobre a Aplicação

Esta plataforma permite:

* Criar tarefas
* Listar tarefas
* Marcar tarefas como concluídas
* Excluir tarefas

Tudo salvo no **LocalStorage** — logo, **sem backend e sem banco de dados**.

---

## 📁 2. Estrutura do Projeto

```
📦 projeto-tarefas
├── index.html
├── style.css
├── script.js
├── /tests
│   ├── unit
│   │   └── tasks.test.js
│   └── functional
│       └── selenium.test.js
├── jest.config.js
├── package.json
├── requirements.txt (para Selenium)
├── .github/workflows/tests.yml
└── README.md
```

---

## ⚙️ 3. Como Rodar o Projeto Localmente

### **1) Clonar o projeto**

```bash
git clone https://github.com/SEU_USUARIO/projeto-tarefas.git
cd projeto-tarefas
```

### **2) Abrir a aplicação**

Basta abrir o arquivo:

```
index.html
```

Nada precisa ser instalado.

---

## 🧪 4. Rodando os Testes

### 🔹 **Testes Unitários (Jest)**

Instalar dependências:

```bash
npm install
```

Rodar testes:

```bash
npm test
```

### 🔹 **Testes Funcionais (Selenium WebDriver)**

Instalar dependências Python:

```bash
pip install -r requirements.txt
```

Rodar testes Selenium:

```bash
python tests/functional/selenium.test.js
```

---

## 🤖 5. Integração Contínua (GitHub Actions)

O CI executa automaticamente:

* Testes unitários (Jest)
* Testes funcionais (Selenium)

Arquivo do workflow:

```
.github/workflows/tests.yml
```

Para ativar:

1. Suba o repositório no GitHub
2. O pipeline começará automaticamente em **Actions**

---

## 📝 6. Plano de Testes (Para Colocar no Notion)

Aqui está **exatamente o conteúdo** que você deve colocar no Notion. Basta copiar e colar.

### 📄 **Título:** Plano de Testes — Plataforma de Tarefas

### **1. Objetivo**

Garantir que a aplicação de tarefas funcione corretamente, validando criação, listagem, conclusão e exclusão de tarefas.

### **2. Escopo dos Testes**

* Testes unitários: funções JS que manipulam LocalStorage.
* Testes funcionais: fluxo do usuário (criar → marcar → excluir).
* Testes de interface: validação mínima dos elementos principais.

### **3. Estratégia de Testes**

* Jest para lógica de negócio.
* Selenium WebDriver para automatizar o comportamento real.
* GitHub Actions rodando ambos para garantir estabilidade.

### **4. Casos de Teste**

#### **Caso 1 — Criar tarefa**

* Ação: usuário digita e clica em "Adicionar".
* Resultado esperado: tarefa aparece na lista.

#### **Caso 2 — Marcar tarefa como concluída**

* Ação: clicar no checkbox.
* Resultado esperado: tarefa recebe classe `.done`.

#### **Caso 3 — Excluir tarefa**

* Ação: clicar no botão "Excluir".
* Resultado esperado: item some da lista e do LocalStorage.

#### **Caso 4 — Persistência**

* Ação: recarregar página.
* Resultado esperado: lista permanece igual.

### **5. Critérios de Aceite**

* 100% dos testes unitários passando.
* Fluxo funcional completo sem erros.
* UI mínima funcionando em mobile e desktop.

### **6. Riscos e Mitigações**

| Risco                             | Mitigação                               |
| --------------------------------- | --------------------------------------- |
| Falha do Selenium no CI           | webdriver atualizado no pipeline        |
| Dados corrompidos no LocalStorage | função de validação antes de renderizar |

### **7. Ferramentas**

* Jest
* Selenium WebDriver
* GitHub Actions
* LocalStorage


