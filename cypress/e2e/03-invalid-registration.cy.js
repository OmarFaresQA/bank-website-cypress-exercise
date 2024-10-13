import {
    generateRandomUsercredentials,
    fillRegistrationForm
} from '../support/utils.js';

describe('Parabank invalid registration test case', () => {
    let userData;
    before(() => {
        userData = generateRandomUsercredentials();
        cy.fixture('userData').then((data) => {
            userData = data;
        })
    });

    it('Re-registering with existing user', () => {
        cy.intercept('POST', '**').as('invalidRegisterRequest')
        cy.visit(Cypress.env('registerPage'))
        fillRegistrationForm(userData)
        cy.get('[colspan="2"] > .button').click()
        cy.contains('This username already exists.').should('be.visible')
        //Get request and response
        cy.wait('@invalidRegisterRequest').then((interception) => {
            cy.log('Invalid Register Request:', interception.request)
            cy.log('Invalid Register Response:', interception.response)
            cy.writeFile('cypress/fixtures/invalidRegisterRequest.json', {
                request: interception.request,
                response: interception.response,
            });
            expect(interception.response.statusCode).to.eq(200)
        });
    })
})