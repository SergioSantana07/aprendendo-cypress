import LoginPage from '../../pages/loginPage.js'
import userDate from '../fixtures/userDate.json'
import DashboardPage from '../../pages/dashboardPage.JS'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {


  it('Login-Success', () => {
   
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userSuccess.username, userDate.userSuccess.password)
    dashboardPage.ConferenceDashbord()

  })
  it('Login-Fail', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userFail.username, userDate.userFail.password)
    loginPage.ConferenceError()
    
  })

})