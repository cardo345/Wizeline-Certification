import { CREDENTIALS } from '../Data/Constants'
import Logingpage from '../Pages/Loginpage'
import Productspage from '../Pages/Productspage'
import Shopingcart from '../Pages/Shopingcart'

fixture('Shoppingcart feature test')
    .page ('https://www.saucedemo.com/')

test('User navigates to shopping cart', async t => {
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Productspage.navigateToShopingCart()
    await Shopingcart.validateShoppingCartPage()
})

test('User adds an item to the cart', async t => {
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    var backpack = await Productspage.backpackname.innerText
    await Productspage.addBackPack()
    await Productspage.validateRemovebutton()    
    await Productspage.navigateToShopingCart()
    await Shopingcart.validateIteminShoppingCart(backpack)
})

test('User adds multiple items to the cart', async t => {
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    var backpack = await Productspage.backpackname.innerText
    var bikelight = await Productspage.bikelightname.innerText
    var bolttshirt = await Productspage.bolttshirtname.innerText
    var fleecejacket = await Productspage.fleecejacketname.innerText
    await Productspage.addmultipleproducts()
    await Productspage.validateRemoveButtons()
    await Productspage.navigateToShopingCart()
    await Shopingcart.validateItemsInShoppingCart(backpack, bikelight, bolttshirt, fleecejacket)
})