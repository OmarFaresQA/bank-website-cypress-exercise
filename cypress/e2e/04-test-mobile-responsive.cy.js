import {
    generateRandomUsercredentials
} from '../support/utils.js';

['iphone-8', 'macbook-15', 'ipad-mini'].forEach(viewport => {
    describe('Parabank Mobile Responsive test case', () => {
        let userData;
        before(() => {
            cy.viewport(viewport)
            userData = generateRandomUsercredentials()
        });

        it('Check that page icon appear in different screens', () => {
            cy.visit(Cypress.env('loginPage'));
            cy.get('img[alt="ParaBank"]').should('be.visible')
        })
    })
})