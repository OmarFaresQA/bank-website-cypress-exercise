import {
  generateRandomUsercredentials,
  validLoginData
} from '../support/utils.js';

describe('Parabank Login test case', () => {
  let userData;
  before(() => {
    userData = generateRandomUsercredentials()
    cy.fixture('userData').then((data) => {
      userData = data;
    })
  });

  it('Login with valid user', () => {
    cy.intercept('POST', '**').as('loginRequest')
    cy.visit(Cypress.env('loginPage'))
    validLoginData(userData)
    cy.get('input.button').click()
    //Get request and response
    cy.wait('@loginRequest').then((interception) => {
      cy.log('Login Request:', interception.request)
      cy.log('Login Response:', interception.response)
      cy.writeFile('cypress/fixtures/loginRequest.json', {
        request: interception.request,
        response: interception.response,
      })
    })
    //check that user is logged in successfully
    cy.contains('Accounts Overview').should('be.visible')
  })
})