Automação de Testes em Aplicações Web
Este repositório contém materiais, exemplos e configurações para a disciplina de Automação de Testes em Aplicações Web. O objetivo desta disciplina é capacitar os alunos a desenvolver e implementar testes automatizados eficientes e confiáveis em projetos web.

Objetivo da Disciplina
Capacitar o aluno a compreender e aplicar os conceitos fundamentais e avançados de automação de testes em aplicações web, fornecendo uma base teórica e prática sólida para o desenvolvimento de testes automatizados de alta qualidade.

Ementa da Disciplina
Introdução a Aplicações Web
HTML para construção das páginas
CSS para estilização das páginas
Javascript para interação com o usuário e servidor
Interação do Frontend com o Backend
Requisições Síncronas e Assíncronas
CSS Selector e XPath
Fundamentos e conceitos sobre Automação de Testes Web
Adicionando bibliotecas para estruturação dos testes e interação com navegadores Web
Escrevendo o primeiro teste automatizado Web
Estratégias de Identificação de Elementos
Esperas Explícitas e Implícitas
Comboboxes, Janelas e Drag and Drop
Tirando Screenshots
Execução de Testes Headless
Design Patterns para Automação Web
Configurações Avançadas
Execução de testes na nuvem
Relatórios de execução de testes
Boas práticas no uso da ferramenta
Como Usar
Clone o repositório e siga os exemplos e exercícios propostos para aprimorar seus conhecimentos em automação de testes web. Certifique-se de seguir a ementa do curso e aplicar as boas práticas recomendadas.

Descrição do Projeto
Este projeto é uma implementação prática da disciplina, utilizando Cypress para automação de testes end-to-end (E2E) em um site de e-commerce de exemplo (Automation Exercise). Os testes cobrem funcionalidades como cadastro de usuários, login, navegação de produtos, carrinho de compras, formulários de contato e assinaturas.

O projeto segue o padrão Page Object Model (POM) para organização do código, com seletores centralizados e utilitários para facilitar a manutenção.

Também inclui integração com BrowserStack para execução de testes na nuvem, relatórios detalhados com Mochawesome e configurações de linting e formatação com ESLint e Prettier.

Casos de Teste Implementados
Os testes automatizados cobrem os seguintes cenários do site Automation Exercise:

1. **Caso de teste 1: Cadastrar um usuário** - Testa o cadastro de um novo usuário com dados válidos.
2. **Test Case 2: Login User with correct email and password** - Verifica login com credenciais corretas.
3. **Test Case 3: Login User with incorrect email and password** - Valida mensagem de erro para credenciais incorretas.
4. **Test Case 4: Logout User** - Testa o logout do usuário logado.
5. **Test Case 5: Register User with existing email** - Verifica erro ao tentar cadastrar com e-mail já existente.
6. **Test Case 6: Contact Us Form** - Testa o envio do formulário de contato.
7. **Test Case 8: Verify All Products and product detail page** - Navega pela página de produtos e detalhes.
8. **Test Case 9: Search Product** - Testa a funcionalidade de busca de produtos.
9. **Test Case 10: Verify Subscription in home page** - Verifica a assinatura na página inicial.
10. **Test Case 15: Place Order: Register before Checkout** - Testa o fluxo completo de compra, incluindo cadastro e checkout.

Estrutura do Projeto
- `anotacoes.md`: Anotações e observações sobre o projeto.
- `selectores.md`: Documentação dos seletores utilizados nos testes.
- `browserstack.json`: Configuração para execução de testes no BrowserStack.
- `cypress.config.js`: Configuração do Cypress.
- `eslint.config.js`: Configuração do ESLint.
- `package.json`: Dependências e scripts do projeto.
- `cypress/e2e/`: Arquivos de teste E2E.
- `cypress/pages/`: Implementação do Page Object Model, com classes para cada página (cadastro, login, produtos, etc.).
- `cypress/fixtures/`: Dados de teste em JSON (users.json, profile.json, example.json).
- `cypress/reports/`: Relatórios de execução dos testes em HTML e JSON.
- `cypress/screenshots/`: Capturas de tela dos testes.
- `cypress/support/`: Comandos customizados e configurações de suporte.
- `log/`: Logs de build e execução.
- `results/`: Resultados de testes no BrowserStack (HTML e JSON).

Instalação do Projeto
Clone o Repositório

bash
Copiar código
git clone https://github.com/Diogooliveira-tech/pos-graduacao-automacao-teste-web.git
cd pos-graduacao-automacao-teste-web
Remova o Arquivo yarn.lock (se existir)

bash
Copiar código
rm -f yarn.lock
Instale as Dependências

bash
Copiar código
yarn install
Configure o Husky

bash
Copiar código
yarn prepare
Execução de Scripts
Executar Testes E2E com Cypress

bash
Copiar código
yarn e2e
Verificar o Código com ESLint

bash
Copiar código
yarn lint
Formatar o Código com Prettier

bash
Copiar código
yarn format
Esses comandos ajudam a garantir que o código esteja bem formatado e em conformidade com as regras de estilo.

Execução de Testes no BrowserStack
Este projeto está configurado para execução de testes na nuvem usando BrowserStack, permitindo testes em diferentes navegadores e sistemas operacionais sem necessidade de configuração local.

Pré-requisitos
- Conta no BrowserStack (https://www.browserstack.com/)
- BrowserStack CLI instalado: `npm install -g browserstack-cypress-cli`

Como Executar
1. Configure suas credenciais do BrowserStack no arquivo `browserstack.json` (ou use variáveis de ambiente BROWSERSTACK_USERNAME e BROWSERSTACK_ACCESS_KEY).
2. Execute os testes na nuvem:
   bash
   Copiar código
   browserstack-cypress run
3. Os relatórios serão gerados na pasta `results/`, incluindo `browserstack-cypress-report.html` e `browserstack-cypress-report.json`.

A configuração atual testa no Chrome (versões latest e latest-1) no Windows 10, com execução headless e paralelismo de 2.

Dependências do Projeto
As principais dependências deste projeto são:

@faker-js/faker: Geração de dados aleatórios.
cypress: Framework para testes E2E.
cypress-mochawesome-reporter: Relatórios de teste em formato Mochawesome.
eslint: Linter para verificar padrões e erros de código.
eslint-config-prettier: Integração entre ESLint e Prettier.
eslint-plugin-cypress: Suporte de ESLint para Cypress.
eslint-plugin-prettier: Plugin do Prettier para ESLint.
husky: Gerenciador de hooks de Git.
mocha: Framework de testes, utilizado para relatórios do Mochawesome.
pinst: Desabilita os hooks do Husky para versões publicadas.
prettier: Formatador de código para consistência.
Configuração de Linting e Formatação
O projeto utiliza ESLint e Prettier para garantir a qualidade e consistência do código.

ESLint
O ESLint está configurado para verificar as melhores práticas e garantir que o código siga o padrão do Prettier.

Comando para Verificar o Código com ESLint

bash
Copiar código
yarn lint
Configuração do ESLint (eslint.config.js)

javascript
Copiar código
const cypressGlobals = require('globals').cypress;

module.exports = [
  {
    ignores: ['cypress/reports/**'],
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
Prettier
O Prettier é configurado para garantir a formatação consistente do código.

Comando para Formatar o Código

bash
Copiar código
yarn format
Configuração do Prettier (.prettierrc)

json
Copiar código
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
Resumo dos Comandos
Comando	Descrição
yarn e2e	Executa os testes E2E com Cypress
yarn lint	Verifica o código com ESLint
yarn format	Formata o código com Prettier
yarn prepare	Configura o Husky para hooks de Git
