import Logingpage from '../Pages/Loginpage'
import productspage from '../Pages/productspage'
import Shopingcart from '../Pages/Shopingcart'
import { CREDENTIALS } from '../Data/Constants'
import Checkoutpage from '../Pages/Checkoutpage'
import Overviewpage from '../Pages/Overviewpage'
import Finishpage from '../Pages/Finishpage'

fixture('Login feature test')
    .page ('https://www.saucedemo.com/')

test('User can log in using valid credentials', async t => {
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(productspage.pagetitle.exists).ok()
})

test('User cannot log in using invalid credentials', async t => {
    await Logingpage.invalidLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(Logingpage.errormessage.exists).ok()
    await t.expect(Logingpage.errormessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})

test('User can log out successfully', async t => {
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await productspage.menuClick()
    await productspage.logoutClick()
    await t.expect(Logingpage.loginglogo.exists).ok()
})

test('User navigates to shopping cart', async t => {
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await productspage.shoppingcartClick()
    await t.expect(Shopingcart.shoppingheader.exists).ok()
    await t.expect(Shopingcart.shoppingheader.innerText).eql('Your Cart')
})

test('User adds an item to the cart', async t => {
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    var backpack = await productspage.backpackname.innerText
    await productspage.backpackClick()
    await t.expect(productspage.removebackpack.innerText).eql('REMOVE')    
    await productspage.shoppingcartClick()
    await t.expect(Shopingcart.shoppinglistbackpack.innerText).eql(await backpack)
})

test('User adds multiple items to the cart', async t => {
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await productspage.backpackClick()
    await productspage.bikelightClick()
    await productspage.bolttshirtClick()
    await productspage.fleecejacketClick()
    var backpack = await productspage.backpackname.innerText
    var bikelight = await productspage.bikelightname.innerText
    var bolttshirt = await productspage.bolttshirtname.innerText
    var fleecejacket = await productspage.fleecejacketname.innerText
    await t.expect(productspage.removebackpack.innerText).eql('REMOVE')    
    await t.expect(productspage.removebikelight.innerText).eql('REMOVE')
    await t.expect(productspage.removebolttshirt.innerText).eql('REMOVE')
    await t.expect(productspage.removefleecejacket.innerText).eql('REMOVE')
    await productspage.shoppingcartClick()
    await t.expect(Shopingcart.shoppinglistbackpack.innerText).eql(await backpack)
    await t.expect(Shopingcart.shoppinglistbikelight.innerText).eql(await bikelight)
    await t.expect(Shopingcart.shoppinglistbolttshirt.innerText).eql(await bolttshirt)
    await t.expect(Shopingcart.shoppinglistfleecejacket.innerText).eql(await fleecejacket)
})

test('User continues without mail information', async t =>{
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await productspage.backpackClick()
    await productspage.bikelightClick()
    await productspage.bolttshirtClick()
    await productspage.fleecejacketClick()
    await productspage.shoppingcartClick()
    await Shopingcart.CheckoutClick()
    await Checkoutpage.inputfirstname(CREDENTIALS.USER_INFO.FIRSTNAME)
    await Checkoutpage.inputlastname(CREDENTIALS.USER_INFO.LASTNAME)
    await Checkoutpage.continueClick()
    await t.expect(Checkoutpage.checkouterror.innerText).eql('Error: Postal Code is required')
})

test('User fills in personal information and continues to Overview page', async t =>{
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await productspage.backpackClick()
    await productspage.bikelightClick()
    await productspage.bolttshirtClick()
    await productspage.fleecejacketClick()
    await productspage.shoppingcartClick()
    await Shopingcart.CheckoutClick()
    await Checkoutpage.inputfirstname(CREDENTIALS.USER_INFO.FIRSTNAME)
    await Checkoutpage.inputlastname(CREDENTIALS.USER_INFO.LASTNAME)
    await Checkoutpage.inputzip(CREDENTIALS.USER_INFO.ZIP)
    await Checkoutpage.continueClick()
    await t.expect(Overviewpage.overviewheader.innerText).eql('Checkout: Overview')
})

test('User validates items on overview page match ordered items', async t =>{
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await productspage.backpackClick()
    await productspage.bikelightClick()
    await productspage.bolttshirtClick()
    await productspage.fleecejacketClick()
    var backpack = await productspage.backpackname.innerText
    var bikelight = await productspage.bikelightname.innerText
    var bolttshirt = await productspage.bolttshirtname.innerText
    var fleecejacket = await productspage.fleecejacketname.innerText
    await productspage.shoppingcartClick()
    await Shopingcart.CheckoutClick()
    await Checkoutpage.inputfirstname(CREDENTIALS.USER_INFO.FIRSTNAME)
    await Checkoutpage.inputlastname(CREDENTIALS.USER_INFO.LASTNAME)
    await Checkoutpage.inputzip(CREDENTIALS.USER_INFO.ZIP)
    await Checkoutpage.continueClick()
    await t.expect(Overviewpage.overviewlistbackpack.innerText).eql(await backpack)
    await t.expect(Overviewpage.overviewlistbikelight.innerText).eql(await bikelight)
    await t.expect(Overviewpage.overviewlistbolttshirt.innerText).eql(await bolttshirt)
    await t.expect(Overviewpage.overviewlistfleecejacket.innerText).eql(await fleecejacket)
})
test('User finishes purchase', async t =>{
    await Logingpage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await productspage.backpackClick()
    await productspage.bikelightClick()
    await productspage.bolttshirtClick()
    await productspage.fleecejacketClick()
    await productspage.shoppingcartClick()
    await Shopingcart.CheckoutClick()
    await Checkoutpage.inputfirstname(CREDENTIALS.USER_INFO.FIRSTNAME)
    await Checkoutpage.inputlastname(CREDENTIALS.USER_INFO.LASTNAME)
    await Checkoutpage.inputzip(CREDENTIALS.USER_INFO.ZIP)
    await Checkoutpage.continueClick()
    await Overviewpage.finishcleck()
    await t.expect(Finishpage.finishheader.innerText).eql('Finish')
    await t.expect(Finishpage.confirmation.innerText).eql('THANK YOU FOR YOUR ORDER')
    await t.expect(Finishpage.confirmation2.innerText).eql('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
})

