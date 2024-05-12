import userDate from '../fixtures/userDate.json'

describe('Orange HRM Tests', () => {

  const selectorslist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    wrongCredentialAlert: "[role='alert']",
    dashboardGrid:".orangehrm-dashboard-grid"
  }

  it('Login-Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userDate.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userDate.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
  })
  it('Login-Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userDate.userFail.username)
    cy.get(selectorslist.passwordField).type(userDate.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
  })
})