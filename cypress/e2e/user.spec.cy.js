import LoginPage from '../../pages/loginPage.js'
import userDate from '../fixtures/userDate.json'
import DashboardPage from '../../pages/dashboardPage.JS'
import MenuPage from '../../pages/menuPage.js'
import MyInfoPage from '../../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update', () => {
   
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userSuccess.username, userDate.userSuccess.password)
    dashboardPage.ConferenceDashbord()
    menuPage.acessMyInfo()
    myInfoPage.ConferenceMyInfo()
    myInfoPage.FillPersonalDetails(chance.first(),chance.last(),chance.last())
    myInfoPage.FillEmployeeDetails(chance.prime({min: 100, max: 2000}),chance.prime({min: 100, max: 2000}),chance.ssn(),"2034-10-20")
    myInfoPage.FillStatusDetails("2000-10-20")
    myInfoPage.SaveForm()
 
  })
})