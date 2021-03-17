import { CREDENTIALS } from '../Data/Constants'
import Logingpage from '../Pages/Loginpage'
import Productspage from '../Pages/Productspage'
import Shopingcart from '../Pages/Shopingcart'
import Checkoutpage from '../Pages/Checkoutpage'
import Overviewpage from '../Pages/Overviewpage'

fixture('Overview feature test')
    .page ('https://www.saucedemo.com/')

test('User validates items on overview page match ordered items', async t =>{
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Productspage.addmultipleproducts()
    var backpack = await Productspage.backpackname.innerText
    var bikelight = await Productspage.bikelightname.innerText
    var bolttshirt = await Productspage.bolttshirtname.innerText
    var fleecejacket = await Productspage.fleecejacketname.innerText
    await Productspage.navigateToShopingCart()
    await Shopingcart.checkoutClick()
    await Checkoutpage.enterUserInfo()
    await Checkoutpage.continueClick()
    await Overviewpage.validateItemsInOverviewPage(backpack, bikelight, bolttshirt, fleecejacket)
})