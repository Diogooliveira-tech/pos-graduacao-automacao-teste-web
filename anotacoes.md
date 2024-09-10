1. instalar o node: https://nodejs.org/en/download/prebuilt-installer
2. node -v -> verificar versão
3. npm --version -> verificar versão
4. Extensão: ES6 Mocha Snippets, cypress Snippets (Andrew Smith) - auxilia na criação dos testes
--------------
5. inicializando um projeto npm
    npm init -y (inicia com os valores padrões)

6. Gerenciador de dependencia do node ( npm - node packge manager) 

 Usar comandos para instalação (npm install - Que instala um pacote . O pacote pode ser instalado de forma):

    a. global - a nível da máquina
    b. local / projeto - a nível do projeto
    c. Desenvolvimento - a nível de desenvolvimento

  Nesse projeto será instalado a nível de desenvolvimento: ( npm install -D nome-do-pacote )
        Exemplo: npm install -D cypress

  *-> Nesse projeto vamos fixar a versão do cypress, por isso o comando completo será: ( "npm install -D cypress@13.7.3") 
    -> comando para verificar a versão do cypress: ("npm list cypress")

7. Iniciar o projeto, rodar o comando (npx cypress open)
-----------------

/*
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
*/

-----------------

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

----------------

Comandos para abrir e rodar o cypress
 - npx open cypress

Execução de Testes modo Headless
 - npx cypress run 
 - rodar arquivo especifico: npx cypress run --spec cypress/e2e/automation-exercise-final-with-pom.cy.js


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