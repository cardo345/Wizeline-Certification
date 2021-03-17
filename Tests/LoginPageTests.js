import Logingpage from '../Pages/Loginpage'
import Productspage from '../Pages/Productspage'
import { CREDENTIALS } from '../Data/Constants'


fixture('Login feature test')
    .page ('https://www.saucedemo.com/')

test('User can log in using valid credentials', async t => {
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Productspage.validatesuccessfullogin()
})

test('User cannot log in using invalid credentials', async t => {
    await Logingpage.submitLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await Logingpage.validateLoginErrorMessage()
})

test('User can log out successfully', async t => {
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Productspage.userLogout()
    await Logingpage.validateSuccessfulLogout()
})



