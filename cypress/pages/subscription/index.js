class Subscription {
  scrollParaEmail() {
    cy.get('input#susbscribe_email').scrollIntoView();
  }

  submeterEmail(email) {
    cy.get('input#susbscribe_email').type(email);
    cy.get('button#subscribe').click();
  }
}
export default new Subscription();
