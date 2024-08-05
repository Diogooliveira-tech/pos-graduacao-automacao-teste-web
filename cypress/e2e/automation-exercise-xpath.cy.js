/// <reference types="cypress" />

describe('Automation Exercise', () => {
    it('Test Case 1: Cadastrar um usuário', () => {
        cy.visit('https://automationexercise.com')

        const timestamp = new Date().getTime()

        //preenche informações iniciais
            //cy.get('a[href$=login]').click() // alternativa 1
            cy.contains('Signup').click()     // alternativa 2

            const signUpName = 'Tëster QA'

            cy.get('[data-qa="signup-name"]').type(signUpName)

            cy.get('[data-qa="signup-name"]').type('Tester QA')
            cy.get('[data-qa="signup-email"]').type(`test-de-qa${timestamp}@mail.com`)
            cy.contains('button', 'Signup').click()

        //seleciona checkbox para title
            // radio ou checkboxes → check
            // cy.get('#id_gender2').check()
            // cy.get('input[type=radio]').check('Mrs')
            cy.get('input[type=radio]').first().check()
            // cy.get('input[type=radio]').last().check()
            cy.get('input[type=radio]').eq(1).check() //0,1,2,3 ele vai pegar a posição

        //preenche senha
            cy.get('[type=password]').type('12345', { log: false })

        //combolist
            cy.get('[data-qa=days]').select('5')
            cy.get('[data-qa="months"]').select('1')
            //cy.get('[data-qa="months"]').select('November')
            cy.get('[data-qa="years"]').select('1993')

        //seleciona checkbox Date of Birth        
            cy.get('input[type=checkbox]#newsletter').check()
            cy.get('input[type=checkbox]#optin').check()

        //addres information 
            cy.get('[data-qa="first_name"]').type('Cristiano')
            cy.get('[data-qa="last_name"]').type('Ronaldo')
            cy.get('[data-qa="company"]').type('Tigrinho Tabajara')
            cy.get('[data-qa="address"]').type('rua treze, n 14')
            cy.get('[data-qa="country"]').type('United States')
            cy.get('[data-qa="state"]').type('Califórnia')
            cy.get('[data-qa="city"]').type('Los Angeles')
            cy.get('[data-qa="zipcode"]').type('90001')
            cy.get('[data-qa="mobile_number"]').type('111 222 333')

            cy.get('[data-qa="create-account"]').click()
            //cy.contains('Create Account')

        //resultado esperado
            cy.url().should('includes', 'account_created')
            // → https://automationexercise.com/account_created

            cy.get('[data-qa="account-created"]').should('be.visible')

            cy.get('[data-qa="continue-button"]').click()

        // assertação do nome do usuario
            // cy.contains(`Logged in as ${signUpName}`)
            // cy.get('ul.nav.navbar-nav').should('contain', `Logged in as ${signUpName}`);
            // cy.get('b').should('contain', signUpName)


    });

});