/// <reference types="cypress" />

describe('Automation Exercise', () => {
  it('Test Case 1: Cadastrar um usuário', () => {
    const timestamp = new Date().getTime(); //Classe do Js, alternativa para contornar o problema do email já existente. Com isso, o Sistema valida que são cadastros diferentes

    cy.visit('https://automationexercise.com'); //visita a pagina

    //preenche informações iniciais
    //cy.get('a[href$=login]').click() // alternativa 1
    cy.contains('Signup').click(); // alternativa 2

    const signUpName = 'Tester QA';

    cy.get('[data-qa="signup-name"]').type(signUpName);
    cy.get('[data-qa="signup-email"]').type(`testEs-${timestamp}@gmail.com`); //concatenação da variavel timestamp com email
    cy.contains('button', 'Signup').click();

    //seleciona checkbox para title
    // radio ou checkbox -> check
    //cy.get('#id_gender2').check()
    cy.get('input[type=radio]').check('Mrs'); // alternativas, essa mais descritiva
    //cy.get('input[type=radio]').check('Mr')
    //cy.get('input[type=radio]').first().check() //seleciona o primeiro radio
    //cy.get('input[type=radio]').last().check() //seleciona o ultimo radio
    cy.get('input[type=radio]').eq(1).check(); // Ex: Se tivesse 3 elementos [0, 1, 2] comando eq serve "Pra Lista" para passar a posição desejada do elemento

    //preenche senha
    cy.get('[type=password]').type('12345', { log: false }); //isso oculta a senha
    //cy.get('[data-qa="password"]').type('54321')

    //combolist
    cy.get('[data-qa="days"]').select('5');
    cy.get('[data-qa="months"]').select('February');
    //cy.get('[data-qa="months"]').select('2')
    cy.get('[data-qa="years"]').select('2004');

    //seleciona checkbox Date of Birth
    cy.get('input[type=checkbox]#newsletter').check();
    //cy.get('input[name="newsletter"]').check()
    cy.get('input[type=checkbox]#optin').check();

    //addres information
    cy.get('[data-qa="first_name"]').type('homer');
    cy.get('[data-qa="last_name"]').type('simpson');
    cy.get('[data-qa="company"]').type('Direção LTDA');
    cy.get('[data-qa="address"]').type('rua direita');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('Alasca');
    cy.get('[data-qa="city"]').type('Homer');
    cy.get('[data-qa="zipcode"]').type('99775');
    cy.get('[data-qa="mobile_number"]').type('111 999 888');

    cy.get('[data-qa="create-account"]').click();
    //cy.contains('Create Account').click()

    //resultado esperado
    //cy.url().should('have.text', '') //tenho.texto "Nome-que-espero"
    cy.url().should('includes', 'account_created'); // deve incluir parte do texto "account_created" trecho final da url
    // -> https://automationexercise.com/account_created //umas das formas de validar que deu certo e acessou a pagina que era esperado é o comando cy.url('')

    cy.get('[data-qa="account-created"]').should('be.visible'); // o texto "xpto" deve estar visivel

    cy.get('[data-qa="continue-button"]').click();

    // assertação do nome do usuario
    //cy.contains(`Logged in as ${signUpName}`)
    //cy.get('ul.nav.navbar-nav').should('contain', `Logged in as ${signUpName}`)
    //cy.get('b').should('contain', signUpName)
    cy.get('i.fa-user').parent().should('contain', signUpName);
  });
});

/*
    Triplo A - (Arrange, Act e Assert)
    
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

/*LIÇÃO DE CASA Passado na Aula 3 -06-06-2024, IMPLEMENTAR ESSES TESTE

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
*/

/*
XPATH


describe("Automation Exercise", () => {

  it("Test Case 1: Cadastrar usuário", () => {

    //require ("cypress-xpath")



    const timestamp = new Date().getTime();



    cy.visit("https://automationexercise.com/test_cases");

    cy.xpath("//a[contains(@href, login)]").click(); // encontrar um elemento



    const signUpName = "Tester QA";



    cy.xpath(//*[@data-qa="signup-name"]).type(signUpName);

    cy.xpath(`//*[@data-qa="signup-email"]`).type(

      `tester-${timestamp}@mail.com`

    );

    cy.xpath("//button[contains(text(), Signup)]").click();



    // radio ou checkboxes -> check

    cy.xpath("//input[@type=radio and @value=Mrs]").check();

    cy.xpath("//input[@type=password]").type("12345", { log: false });



    cy.xpath(//*[@data-qa="days"]).select("5");

    cy.xpath(//*[@data-qa="months"]).select("November");

    cy.xpath(//*[@data-qa="years"]).select("1993");



    cy.xpath("//input[@type=checkbox and @id=newsletter]").check();

    cy.xpath("//input[@type=checkbox and @id=optin]").check();



    cy.xpath(//*[@data-qa="first_name"]).type("Cristiano");

    cy.xpath(//*[@data-qa="last_name"]).type("Ronaldo");

    cy.xpath(//*[@data-qa="company"]).type("Tigrinho Tabajara");

    cy.xpath(//*[@data-qa="address"]).type("rua treze, n 14");

    cy.xpath(//*[@data-qa="country"]).select("United States");

    cy.xpath(//*[@data-qa="state"]).type("Califórnia");

    cy.xpath(//*[@data-qa="city"]).type("Los Angeles");

    cy.xpath(//*[@data-qa="zipcode"]).type("90001");

    cy.xpath(//*[@data-qa="mobile_number"]).type("111 222 333");



    cy.xpath(//*[@data-qa="create-account"]).click();



    cy.url().should("include", "account_created");

    cy.xpath(//*[@data-qa="account-created"]).should("be.visible");



    cy.xpath(//*[@data-qa="continue-button"]).click();



    cy.xpath("//i[@class=fa fa-user]").parent().should("contain", signUpName);

  });

});



*/
