import { CREDENTIALS } from '../Data/Constants'
import Logingpage from '../Pages/Loginpage'
import Productspage from '../Pages/Productspage'
import Shopingcart from '../Pages/Shopingcart'
import Checkoutpage from '../Pages/Checkoutpage'
import Overviewpage from '../Pages/Overviewpage'
import Finishpage from '../Pages/Finishpage'

fixture('Finish purchase test')
    .page ('https://www.saucedemo.com/')

test('User finishes purchase', async t =>{
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Productspage.addmultipleproducts()
    await Productspage.navigateToShopingCart()
    await Shopingcart.checkoutClick()
    await Checkoutpage.enterUserInfo()
    await Checkoutpage.continueClick()
    await Overviewpage.finishcleck()
    await Finishpage.validateFinishPage()
})