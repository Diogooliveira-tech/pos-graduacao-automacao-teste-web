class Menu {

    menus = {
        PRODUTOS: 'Products',

    }

    irParaHome() {
        // implementar aqui
    }

    irParaProdutos() {
        cy.contains(`Products`).click()
    }

    irParaCarrinho() {
        // implementar aqui
        cy.contains("Add to cart").click()
        cy.contains("View Cart").click()
    }

    irParaLoginCadastro() {
        cy.contains('Signup').click()
    }

    irParaFormularioContato() {
        cy.contains(`Contact us`).click()

        cy.get(`.contact-form h2`)
            .should('be.visible')
            .and('have.text', 'Get In Touch')

        cy.get('[data-qa="name"]').type(`Tester`)
        cy.get('[data-qa="email"]').type(`tester-qa@mail.com`)
        cy.get('[data-qa="subject"]').type(`Test Automation`)
        cy.get('[data-qa="message"]').type(`Learning Test Automation`)

        cy.fixture('example.json').as('arquivo')
        cy.get('input[name="upload_file"]').selectFile('@arquivo')

        cy.get('[data-qa="submit-button"]').click()
    }

    //destrinchar mais essa possibilidade de implementação
    irPara(menu) {
        cy.contains(menu).click()
    }

}

export default new Menu()