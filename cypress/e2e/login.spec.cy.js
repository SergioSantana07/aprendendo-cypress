import userDate from '../fixtures/userDate.json'

describe('Orange HRM Tests', () => {

  const selectorslist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    wrongCredentialAlert: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    myInfoGrid: ".orangehrm-edit-employee",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",
    savedConfirmed: '.oxd-toast-close'

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
  it('User Info Update', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userDate.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userDate.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
    cy.get(selectorslist.myInfoButton).click()
    cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    cy.get(selectorslist.myInfoGrid)
    cy.get(selectorslist.firstNameField).clear().type("FirstNameTest")
    cy.get(selectorslist.middleNameField).clear().type("MiddleNameTest")
    cy.get(selectorslist.lastNameField).clear().type("LastNameTest")
    cy.get(selectorslist.genericField).eq(3).clear().type("NicknameTest")
    cy.get(selectorslist.genericField).eq(4).clear().type("Employee")
    cy.get(selectorslist.genericField).eq(5).clear().type("OtherIdTest")
    cy.get(selectorslist.genericField).eq(6).clear().type("DriverLicenseTest")
    cy.get(selectorslist.genericField).eq(7).clear().type("2034-05-13")
    cy.get(selectorslist.dateCloseButton).click()
    cy.get(selectorslist.genericField).eq(8).clear().type("SSNTest")
    cy.get(selectorslist.genericField).eq(9).clear().type("SINTest")
    cy.get(selectorslist.saveButton).eq(0).click()
    cy.get(selectorslist.savedConfirmed)

  })
})