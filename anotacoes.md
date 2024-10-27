1. instalar o node: https://nodejs.org/en/download/prebuilt-installer
2. node -v -> verificar versão
3. npm --version -> verificar versão
4. Extensão: ES6 Mocha Snippets, cypress Snippets (Andrew Smith) - auxilia na criação dos testes

---

5. inicializando um projeto npm
   npm init -y (inicia com os valores padrões)

6. Gerenciador de dependencia do node ( npm - node packge manager)

Usar comandos para instalação (npm install - Que instala um pacote . O pacote pode ser instalado de forma):

    a. global - a nível da máquina
    b. local / projeto - a nível do projeto
    c. Desenvolvimento - a nível de desenvolvimento

Nesse projeto será instalado a nível de desenvolvimento: ( npm install -D nome-do-pacote )
Exemplo: npm install -D cypress

\*-> Nesse projeto vamos fixar a versão do cypress, por isso o comando completo será: ( "npm install -D cypress@13.7.3")
-> comando para verificar a versão do cypress: ("npm list cypress")

7. Iniciar o projeto, rodar o comando (npx cypress open)

---

/\*
Triplo A - Arrange, Act e Assert

    Preparacao - Arrange
      - acessando o site
      - criando alguma massa de dados
      - navegando para alguma página

    Acao - Act
      - preencher e salvar o formulario
      - confirmar a exclusao

    Resultado esperado - Assert
      - visualizar a tela de cadastrar concluído
      - confirmar que a exclusao foi feita

\*/

---

LIÇÃO DE CASA Passado na Aula 3 -06-06-2024, IMPLEMENTAR ESSES TESTE

    https://automationexercise.com/test_cases

Test Case 1: Register User
Test Case 2: Login User with correct email and password
Test Case 3: Login User with incorrect email and password
Test Case 4: Logout User
Test Case 5: Register User with existing email
Test Case 6: Contact Us Form
Test Case 8: Verify All Products and product detail page
Test Case 9: Search Product
Test Case 10: Verify Subscription in home page
Test Case 15: Place Order: Register before Checkout

---

Comandos para abrir e rodar o cypress

- npx open cypress

Execução de Testes modo Headless

- npx cypress run
- rodar arquivo especifico: npx cypress run --spec cypress/e2e/automation-exercise-final-with-pom.cy.js
- npm run test \*

duvida muito boa do henrique minuto

"Com base no que você acabou de mencionar, uma possibilidade seria fazer o cadastro do usuário antes, como estamos fazendo aqui.
Você sabe que o usuário já está cadastrado, mas poderíamos realizar isso anteriormente.
Minha dúvida é a seguinte:
Existem duas boas práticas que, ao meu ver, parecem conflitantes nesse contexto.
A primeira é que cada teste deve ser independente, e a segunda é que preciso configurar as coisas antes de começar os testes.
Então, a questão é: se eu fizer um beforeAll para criar um novo usuário, isso não seria igual ao meu primeiro teste, que também cria um usuário?
Eu acabaria duplicando o código, porque no teste em si eu faria as validações, mas o passo a passo seria o mesmo. Parece que estarei repetindo a mesma ação só para usar o beforeAll.
Como funciona essa lógica? Qual o raciocínio por trás disso e o que eu deveria fazer nesse caso?"

Professor:
Tem dois conceitos chamados de rotinas de setup: São rotinas que a gente executa para preparar o nosso ambiente de testes.
Então, por exemplo, aqui a gente testando um e-commerce, digamos que eu subisse a minha aplicação do zero toda vez.
subisseuma aplicação tipo zerada. Então eu vou entender por uma aplicação sem usuário, sem produtos, sem categorias, etc..

setup
subir uma aplicação zerada - sem usuário, sem produtos, sem categorias, etc..
preparar dados que a gente precisa durante os testes: cadastrar usuários, produtos, categorias

teardown "Seria o oposto", tipo já executei todos os testes e eu não quero deixar sujeira no meu banco de teste tipo, fiz
varias compras ali na minha suite de testes e eu não quero deixar esses pedidos, contando para as metricas lá de produto.
Então na minha rotina de "teardown", eu posso:
remover dados que foram criados durante o teste
derrubar a aplicação

# Sobre Page Objects ou Comandos customizados

cadastro
preencher formulario

login
preencher formulario

fale conosco (contact us)
preencher $formulario

checkout

- selecionar entrega
- preencher pagamento
- finalizar a compra

cadastro.preencherFormulario()
checkout.selecionarEntrega()
checkout.preencherPagamento()

pró

- Legibilidade e divisao de responsabilidades

contra

- carregar as acoes que eu preciso em cada teste (imports)

cy.preencherFormulario()
cy.selecionarEntrega()
cy.preencherPagamento()

cy.get()
cy.contains()

pró

- nao precisa importar nada no arquivo de testes

contra

- legibilidade prejudicada, com falta de contexto
- acoes do sistema misturadas com comandos da ferramenta

# Relatório de execução

https://www.npmjs.com/package/cypress-mochawesome-reporter
-> npm install -D cypress-mochawesome-reporter
-> comando para rodar: npx cypress run

https://automate.browserstack.com/dashboard/v2/builds/39cb427abb0ae1f3a222a63bafa7d1162761126f
-> comando para rodar: browserstack-cypress run
-> Ou passando nome de arquivo de teste especifico
-> comando: browserstack-cypress run --spec "cypress/e2e/automation-exercise-final-with-pom.cy.js”

# O projeto possui Prettier, para formatar todo o código do projeto com as regras, rode o seguinte comando:

-> 'npm run format'

No arquivo de configuração .prettierrc, temos a seguinte configuração:

{
"semi": true,
"singleQuote": true,
"tabWidth": 2,
"trailingComma": "es5"
}

Explicação das Opções:
"semi": true – Adiciona ponto e vírgula ao final de cada linha.
"singleQuote": true – Usa aspas simples ao invés de aspas duplas.
"tabWidth": 2 – Define o tamanho da tabulação como 2 espaços.
"trailingComma": "es5" – Adiciona vírgulas no final de listas e objetos (ES5 e além).


----

# Automação de Testes em Aplicações Web

Este repositório contém materiais e exemplos relacionados à disciplina de **Automação de Testes em Aplicações Web**. O objetivo dessa disciplina é capacitar os alunos a compreender e aplicar os conceitos fundamentais e avançados relacionados à automação de testes em aplicações web. Ao final dessa disciplina, o objetivo é estar preparado para desenvolver e implementar testes automatizados de alta qualidade, eficiência e confiabilidade em projetos web.

## Objetivo da Disciplina

Capacitar o aluno a compreender e aplicar os conceitos fundamentais e avançados relacionados à automação de testes em aplicações web, fornecendo uma base sólida de conhecimentos teóricos e práticos para desenvolver e implementar testes automatizados de alta qualidade, eficiência e confiabilidade.

## Ementa da Disciplina

- Introdução a Aplicações Web
- HTML para construção das páginas
- CSS para estilização das páginas
- Javascript para interação com o usuário e servidor
- A interação do Frontend com o Backend
- Requisições Síncronas e Assíncronas
- CSS Selector e XPath
- Fundamentos e conceitos sobre Automação de Testes Web
- Adicionando bibliotecas para estruturação dos testes e interação com navegadores Web
- Escrevendo o primeiro teste automatizado Web
- Estratégias de Identificação de Elementos
- Esperas Explícitas e Implícitas
- Comboboxes, Janelas e Drag and Drop
- Tirando Screenshots
- Execução de Testes Headless
- Design Patterns para Automação Web
- Configurações Avançadas
- Execução de testes na nuvem
- Relatórios de execução de testes
- Boas práticas no uso da ferramenta

## Como Usar

Clone o repositório e siga os exemplos e exercícios propostos para aprimorar seus conhecimentos em automação de testes web. Certifique-se de seguir a ementa do curso e utilizar as boas práticas mencionadas para obter o máximo de proveito deste conteúdo.

## Dependências do Projeto

- **Faker**: Biblioteca para geração de dados aleatórios.  
  Comando para instalar:
  ```bash
  npm install -D @faker-js/faker
  ```

## Configuração de Linting e Formatação de Código

Este projeto utiliza ESLint e Prettier para garantir a qualidade e consistência do código.

1. ESLint
   O ESLint é uma ferramenta de análise de código estático que ajuda a identificar e corrigir problemas de padrão de código e possíveis erros. Neste projeto, o ESLint está configurado para verificar as melhores práticas e regras recomendadas pelo Cypress e para garantir que o código siga o padrão do Prettier.

Comando para Rodar o Lint
Para verificar o código com o ESLint, use o comando: "npm run lint".

Esse comando verifica todos os arquivos JavaScript no diretório cypress/\*_/_.js. Caso encontre problemas de formatação ou padrão, eles serão listados no terminal.

Configuração do ESLint (eslint.config.js)
O arquivo eslint.config.js define as regras de linting específicas para este projeto. Ele inclui:

Regras de boas práticas do ESLint
Configurações recomendadas para Cypress
Integração com o Prettier para garantir formatação consistente
Configuração básica do eslint.config.js:

const cypressGlobals = require('globals').cypress;

module.exports = [
{
ignores: ['cypress/reports/**'], // Ignora a pasta de relatórios
files: ['**/*.js'],
languageOptions: {
globals: {
...cypressGlobals,
browser: true,
node: true
}
},
plugins: {
cypress: require('eslint-plugin-cypress'),
prettier: require('eslint-plugin-prettier')
},
rules: {
...require('eslint-plugin-cypress').configs.recommended.rules,
...require('eslint-config-prettier').rules,
'prettier/prettier': 'error'
}
}
];

## 2. Prettier

O Prettier é um formatador de código que garante consistência na formatação do código. Ele é configurado para este projeto com as regras definidas no arquivo .prettierrc.

Comando para Rodar o Prettier
Para corrigir automaticamente a formatação do código, use o comando: "npm run format"

Este comando aplicará as regras de formatação em todos os arquivos do projeto.

Configuração do Prettier (.prettierrc)
O arquivo .prettierrc define as preferências de formatação, como uso de ponto e vírgula, aspas simples, etc. Aqui está a configuração:

{
"semi": true,
"singleQuote": true,
"tabWidth": 2,
"trailingComma": "es5"
}

- semi: Adiciona ponto e vírgula ao final das instruções.
- singleQuote: Usa aspas simples ao invés de aspas duplas.
- tabWidth: Define o tamanho da tabulação para 2 espaços.
- trailingComma: Adiciona vírgula no final de objetos e arrays, onde aplicável.

## Resumo dos Comandos

Comando : Descrição
npm run lint : Verifica o código com ESLint
npm run format : Formata o código de acordo com as regras do Prettier

Essa configuração garante que o código siga boas práticas de formatação e qualidade, facilitando a leitura e manutenção.