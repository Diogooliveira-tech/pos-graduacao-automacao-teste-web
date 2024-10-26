/// <reference types="cypress" />

import cadastro from '../pages/cadastro';
import login from '../pages/login';
import menu from '../pages/menu';
import produtos from '../pages/produtos';
import contato from '../pages/contato';
import carrinho from '../pages/carrinho';
import subscription from '../pages/subscription';

import { faker } from '@faker-js/faker';

describe('Automation Exercise', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Test Case 1: Cadastrar um usuário', () => {
    // Arrange
    menu.irParaLoginCadastro();

    // Act
    cadastro.preecherFormulario();

    // Assert
    cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'));
  });

  it('Test Case 2: Login User with correct email and password', () => {
    // Arrange
    menu.irParaLoginCadastro();

    // Act
    login.preencherLogin('tester-1721346302730@mail.com', '12345');

    // Assert
    cy.get('i.fa-user').parent().should('contain', 'Tester QA');
  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    // Arrange
    menu.irParaLoginCadastro();

    // Act
    login.preencherLogin('tester-1721346302730@mail.com', '54321');

    // Assert
    cy.get('.login-form form p').should(
      'contain',
      'Your email or password is incorrect!'
    );
  });

  it('Test Case 4: Logout User', () => {
    // Arrange
    menu.irParaLoginCadastro();
    login.preencherLogin('tester-1721346302730@mail.com', '12345');
    cy.get('i.fa-user').parent().should('contain', 'Tester QA');

    // Act
    menu.irParaLogout();

    // Assert
    cy.url().should('include', 'login');
    cy.contains('Login to your account').should('be.visible');
  });

  it('Test Case 5: Register User with existing email', () => {
    // Arrange
    menu.irParaLoginCadastro();

    // Act
    cadastro.iniciarCadastro('tester-1721346302730@mail.com');

    // Assert
    cy.get('.signup-form form p')
      .should('be.visible')
      .and('contain', 'Email Address already exist!');
  });

  it('Test Case 6: Contact Us Form', () => {
    // Arrange
    menu.irParaFormularioContato();

    // Act
    contato.preencherFormularioContato(
      'Tester',
      'tester-qa@mail.com',
      'Test Automation',
      'Learning Test Automation',
      'example.json'
    );

    // Assert
    cy.get('.status').should(
      'have.text',
      'Success! Your details have been submitted successfully.'
    );
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    // Arrange
    menu.irParaProdutos();

    // Act
    produtos.verificarProdutosEVisualizarPrimeiroProduto();

    // Assert
    produtos.verificarInformacoesProduto();
  });

  it('Test Case 9: Search Product', () => {
    // Arrange
    menu.irParaProdutos();

    // Act
    produtos.pesquisarProduto('Shirt');

    // Assert
    produtos.verificarResultadoPesquisa();
  });

  it('Test Case 10: Verify Subscription in home page', () => {
    // Arrange
    subscription.scrollParaEmail();

    // Act
    subscription.submeterEmail('tester-qa@mail.com');

    // Assert
    cy.contains('You have been successfully subscribed!').should('be.visible');
  });

  it('Test Case 15: Place Order: Register before Checkout', () => {
    // Arrange
    menu.irParaLoginCadastro();
    cadastro.preecherFormulario();

    // Act
    menu.irParaCarrinho();
    carrinho.finalizarCompra();

    // Assert
    carrinho.verificarDetalhesEnderecoEOrdem();
    carrinho.preencherPagamento(
      faker.person.fullName(),
      faker.finance.creditCardNumber(),
      faker.finance.creditCardCVV(),
      12,
      2035
    );
    carrinho.verificarCompraRealizada();
    carrinho.deletarConta();
  });
});
