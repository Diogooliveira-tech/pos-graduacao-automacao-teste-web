class Carrinho {
  finalizarCompra() {
    cy.get('.btn-default.check_out').should('be.visible').click();
  }

  verificarDetalhesEnderecoEOrdem() {
    cy.get('.heading').first().should('have.text', 'Address Details');
    cy.get('.heading').last().should('have.text', 'Review Your Order');
  }

  preencherPagamento(nome, numeroCartao, cvc, mesExpiracao, anoExpiracao) {
    // Preenche número de telefone
    cy.get('.form-control').type('378 98562-8781');
    cy.get('.btn-default.check_out').click();

    // Campos de pagamento
    cy.get('[data-qa="name-on-card"]').type(nome);
    cy.get('[data-qa="card-number"]').type(numeroCartao);
    cy.get('[data-qa="cvc"]').type(cvc);
    cy.get('[data-qa="expiry-month"]').type(mesExpiracao);
    cy.get('[data-qa="expiry-year"]').type(anoExpiracao);
    cy.get('[data-qa="pay-button"]').click();
  }

  verificarCompraRealizada() {
    cy.get('[data-qa="order-placed"]').should('be.visible');
  }

  deletarConta() {
    cy.get('[href *="delete"]').click();
    cy.get('b').should('contain', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
  }
}
export default new Carrinho();
