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

Instalação do Projeto
Clone o Repositório

bash
Copiar código
git clone https://github.com/usuario/projeto.git
cd projeto
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
