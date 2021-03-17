import { CREDENTIALS } from '../Data/Constants'
import Logingpage from '../Pages/Loginpage'
import Productspage from '../Pages/Productspage'
import Shopingcart from '../Pages/Shopingcart'
import Checkoutpage from '../Pages/Checkoutpage'
import Overviewpage from '../Pages/Overviewpage'

fixture('Checkout feature test')
    .page ('https://www.saucedemo.com/')
    .beforeEach(async t => {
        await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('User continues without first name', async t =>{
    await Productspage.addmultipleproducts()
    await Productspage.navigateToShopingCart()
    await Shopingcart.checkoutClick()
    await Checkoutpage.continueClick()
    await Checkoutpage.validatefirstnameerror()
    await Checkoutpage.inputfirstname(CREDENTIALS.USER_INFO.FIRSTNAME)
    await Checkoutpage.continueClick()
    await Checkoutpage.validatelastnameerror()
    await Checkoutpage.inputlastname(CREDENTIALS.USER_INFO.LASTNAME)
    await Checkoutpage.continueClick()
    await Checkoutpage.validateziperror()
})

test('User fills in personal information and continues to Overview page', async t =>{
    await Productspage.addmultipleproducts()
    await Productspage.navigateToShopingCart()
    await Shopingcart.checkoutClick()
    await Checkoutpage.enterUserInfo()
    await Checkoutpage.continueClick()
    await Overviewpage.validateOverviewPage()
})