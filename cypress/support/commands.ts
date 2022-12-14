
Cypress.Commands.add('getByTestId', (testId) => {
  return cy.get(`[data-test-id=${testId}]`)
})


/**
 * tamagotchi test commands
 */

Cypress.Commands.add('getForm', () => {
  return cy
    .getByTestId('sign-up-form-container')
})


Cypress.Commands.add('getUsernameInput', () => {
  return cy
    .getByTestId('sign-up-form-username-input')
})

Cypress.Commands.add('getEmailInput', () => {
  return cy
    .getByTestId("sign-up-form-email-label")
})

Cypress.Commands.add('getPasswordInput', () => {
  return cy
    .getByTestId('sign-up-form-password-label')
})

Cypress.Commands.add('getConfirmPasswordInput', () => {
  return cy
    .getByTestId('sign-up-form-confirm-password-input')
})
