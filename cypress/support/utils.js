export function generateRandomUsercredentials() {
    const randData = Math.random().toString(36).substring(2, 10)
    return {
        firstName: "Jane",
        lastName: "Lee",
        address: "3016 Chestnut Street",
        city: "Polk City",
        state: "Florida",
        zipCode: "33868",
        phone: "727-415-4762",
        ssn: "292-15-4452",
        username: `username${randData}`,
        password: `pass${randData}`,
        passwordConfirmation: `pass${randData}`
    }
}

export function fillRegistrationForm(userData) {
    cy.get('#customer\\.firstName').type(userData.firstName)
    cy.get('#customer\\.lastName').type(userData.lastName)
    cy.get('#customer\\.address\\.street').type(userData.address)
    cy.get('#customer\\.address\\.city').type(userData.city)
    cy.get('#customer\\.address\\.state').type(userData.state)
    cy.get('#customer\\.address\\.zipCode').type(userData.zipCode)
    cy.get('#customer\\.phoneNumber').type(userData.phone)
    cy.get('#customer\\.ssn').type(userData.ssn)
    cy.get('#customer\\.username').type(userData.username)
    cy.get('#customer\\.password').type(userData.password)
    cy.get('#repeatedPassword').type(userData.passwordConfirmation)
}

export function validLoginData(userData) {
    cy.get('#loginPanel > form > div:nth-child(2) > input').type(userData.username)
    cy.get('#loginPanel > form > div:nth-child(4) > input').type(userData.password)
}