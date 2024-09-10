class Contato {
    preencherFormularioContato(nome, email, assunto, mensagem, arquivo) {
        cy.get('[data-qa="name"]').type(nome);
        cy.get('[data-qa="email"]').type(email);
        cy.get('[data-qa="subject"]').type(assunto);
        cy.get('[data-qa="message"]').type(mensagem);

        cy.fixture(arquivo).as('arquivo');
        cy.get('input[name="upload_file"]').selectFile('@arquivo');

        cy.get('[data-qa="submit-button"]').click();
    }
}

export default new Contato();