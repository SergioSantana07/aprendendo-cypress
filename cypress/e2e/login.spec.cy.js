import LoginPage from '../../pages/loginPage.js'
import userDate from '../fixtures/userDate.json'
import DashboardPage from '../../pages/dashboardPage.JS'
import MenuPage from '../../pages/menuPage.js'
import MyInfoPage from '../../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


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
  it('User Info Update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userSuccess.username, userDate.userSuccess.password)
    dashboardPage.ConferenceDashbord()
    menuPage.acessMyInfo()
    myInfoPage.ConferenceMyInfo()
    myInfoPage.MyInfoInformation()
    
 
  })
})