// Tripo A: ( Preparacao - Arrange / Acao - Act / Comportamento esperado - Assert ) 

describe('Cadastrar entradas e saídas com bugs', () => {
  it('Cadastrar uma nova transação de entrada - falha 1', () => {
    // Tripo A - Preparacao / Arrange
    cy.visit("https://devfinance-agilizei.netlify.app")

    const timestamp = new Date().getTime()

    const descricao = `Mesada ${timestamp}`

    cy.contains("Nova Transação").click()
    cy.get("#description").type(descricao)
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")

    // Acao / Act
    //cy.contains("Salvar").contains().get().click() //com falha
    cy.contains("Salvar").click() //correção

    // Comportamento esperado / Assert
    cy.get(`#data-table tbody tr`).should(`have.length.at.least`, 1)
    cy.get('tbody tr').last().contains('td.description', descricao).should('exist')
    cy.get('.description').should('have.text', descricao)
    cy.get('.income').should('contain', '100,00')
    cy.get('.date').should('contain', '01/02/2023')

  });

  it('Cadastrar uma nova transação de entrada - falha 2', () => {
    //  Preparacao / Arrange
    cy.visit("https://devfinance-agilizei.netlify.app")
    
    cy.contains("Nova Transação").click()

    // Acao / Act
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    //cy.contains("Salvar").click()
    cy.contains("salvar", { matchCase: false }).click() //Ignora diferença de caracteres 'case sensitive'

    // Comportamento esperado / Assert
    cy.get("tbody tr").should("have.length", 1)
  });

  it('Cadastrar uma nova transação de entrada - falha 3', () => {
    //  Preparacao / Arrange
    cy.visit("https://devfinance-agilizei.netlify.app")

    cy.contains("Nova Transação").click()

    // Acao / Act
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-01-02") 
    cy.contains("Salvar").click()

    // Comportamento esperado / Assert
    cy.get("tbody tr").should("have.length", 1)
  });

  it('Cadastrar uma nova transação de entrada - falha 4', () => {
    cy.visit("https://devfinance-agilizei.netlify.app")

    cy.contains("Nova Transação").click()

    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    cy.contains("Salvar").click()

    cy.get("tbody tr").should("have.length", 1)
  });

  it('Cadastrar uma nova transação de entrada - falha 5', () => {
    cy.visit("https://devfinance-agilizei.netlify.app")

    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")

    cy.contains("Salvar").click()

    //cy.get(".alert").should("not.exist") validação que não existe
    cy.get("tbody tr").should("have.length", 1)
  });

  it('Cadastrar uma nova transação de entrada - falha 6', () => {
    cy.visit("https://devfinance-agilizei.netlify.app")

    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")

    cy.contains("Salvar").click()

    cy.get("tbody tr").should("have.length", 1) // o comando "have.length" retornar a qtd de elemento cadastrado em tela
  });
});

//it.skip - ignora a execução do teste
//link: https://gist.github.com/samlucax/0df852881249b561cdf8888493b03125
