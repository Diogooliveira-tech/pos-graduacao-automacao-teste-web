class Menu {
    menus = {
        PRODUTOS: 'Products',
    }

    irParaProdutos() {
        cy.contains('Products').click();
    }

    irParaCarrinho() {
        cy.contains('Add to cart').click();
        cy.contains('View Cart').click();
    }

    irParaLoginCadastro() {
        cy.contains('Signup').click();
    }

    irParaFormularioContato() {
        cy.contains('Contact us').click();
    }

    // Função de logout
    irParaLogout() {
        cy.contains('Logout').click();
    }

    irPara(menu) {
        cy.contains(menu).click();
    }
}

export default new Menu();