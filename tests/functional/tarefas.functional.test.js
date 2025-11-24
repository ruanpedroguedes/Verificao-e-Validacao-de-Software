import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';


async function run() {
const options = new chrome.Options();
options.addArguments('--headless=new');
options.addArguments('--no-sandbox');
options.addArguments('--disable-dev-shm-usage');


const driver = await new Builder()
.forBrowser('chrome')
.setChromeOptions(options)
.build();


try {
const url = process.env.TEST_BASE_URL || 'http://localhost:8080';
await driver.get(url);


// Fluxo 1: adicionar > filtrar > verificar
const input = await driver.findElement(By.id('input-titulo'));
await input.sendKeys('Teste Selenium');
const btn = await driver.findElement(By.id('btn-add'));
await btn.click();


// aguardar item
await driver.wait(until.elementLocated(By.css('#lista-tarefas li')) , 2000);


// marcar como concluída
const checkbox = await driver.findElement(By.css('#lista-tarefas li input[type="checkbox"]'));
await checkbox.click();


// selecionar filtro 'Pendentes' e verificar que ficou 0
const pendingRadio = await driver.findElement(By.css('input[name="filtro"][value="pending"]'));
await pendingRadio.click();
// esperar 100ms para render
await driver.sleep(200);


const itemsPending = await driver.findElements(By.css('#lista-tarefas li'));
if (itemsPending.length !== 0) throw new Error('Esperado 0 itens pendentes após marcar como feita');


// Fluxo 2: adicionar sem título -> mensagem de erro
const allRadio = await driver.findElement(By.css('input[name="filtro"][value="all"]'));
await allRadio.click();
const input2 = await driver.findElement(By.id('input-titulo'));
await input2.clear();
const btn2 = await driver.findElement(By.id('btn-add'));
await btn2.click();
const mensagem = await driver.findElement(By.id('mensagem'));
const text = await mensagem.getText();
if (!text || text.length === 0) throw new Error('Esperado mensagem de erro ao adicionar vazio');


// Fluxo 3: filtro vazio behavior (sem tarefas novas -> lista vazia)
// Limpar tabela (recarregar)
await driver.navigate().refresh();
await driver.sleep(300);
const itemsAfter = await driver.findElements(By.css('#lista-tarefas li'));
// ok se for 0


console.log('Functional tests passed');
} finally {
await driver.quit();
}
}


run().catch(err => { console.error(err); process.exit(1); });