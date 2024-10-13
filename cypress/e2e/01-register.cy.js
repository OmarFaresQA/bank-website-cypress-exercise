import {
  generateRandomUsercredentials,
  fillRegistrationForm
} from '../support/utils.js';

describe('Parabank Registeration test case', () => {
  let userData;
  before(() => {
    userData = generateRandomUsercredentials()
  });

  it('Register with random user', () => {
    cy.intercept('POST', '**').as('registerRequest')
    cy.visit(Cypress.env('registerPage'))
    fillRegistrationForm(userData)
    cy.get('[colspan="2"] > .button').click()
    //Get request and response
    cy.wait('@registerRequest').then((interception) => {
      cy.log('Register Request:', interception.request)
      cy.log('Register Response:', interception.response)
      cy.writeFile('cypress/fixtures/registerRequest.json', {
        request: interception.request,
        response: interception.response,
      })
      expect(interception.response.statusCode).to.eq(200)
    })
    //Save the registered data
    cy.writeFile('cypress/fixtures/userData.json', userData);
  })
})