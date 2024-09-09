class Cadastro {
    preecherFormulario() {
        const timestamp = new Date().getTime()        
        const signUpName = 'Tester QA'

        Cypress.env('signUpName', signUpName)

        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@mail.com`)
        cy.contains('button', 'Signup').click()

        // radio ou checkboxes -> check
        cy.get('input[type=radio]').check('Mrs')
        cy.get('input[type=radio]').eq(1).check()

        //cy.get('[type=password]').type('12345', { log: false })
        cy.get('[data-qa="password"]').type('5r4s15sd5f1', { log: false })

        cy.get('[data-qa="days"]').select('5')
        cy.get('[data-qa="months"]').select('November')
        cy.get('[data-qa="years"]').select('1993')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('[data-qa="first_name"]').type('Tony')
        cy.get('[data-qa="last_name"]').type('Stark')
        cy.get('[data-qa="company"]').type('Stark Industries')
        cy.get('[data-qa="address"]').type('XXXX')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('Los Angeles')
        cy.get('[data-qa="zipcode"]').type('8789498')
        cy.get('[data-qa="mobile_number"]').type('378 98562-8781')

        cy.get('[data-qa="create-account"]').click()
        
        cy.get('b')
            .should('contain', 'Account Created!')
        cy.url().should('includes', 'account_created')

        cy.get('[data-qa="account-created"]').should('be.visible')

        cy.get('[data-qa="continue-button"]').click()

    }

    iniciarCadastro(usuario) {
        cy.get('[data-qa="signup-name"]').type(`Tester QA`)
        cy.get('[data-qa="signup-email"]').type(usuario)
        cy.contains('button', 'Signup').click()
    }
}

export default new Cadastro()