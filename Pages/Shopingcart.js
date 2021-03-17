import { Selector, t } from 'testcafe'

class Shopingcart{
    constructor(){
        this.shoppingheader = Selector ('.subheader')
        this.shoppinglistbackpack = Selector ('.cart_list div.cart_item:nth-child(3) .inventory_item_name')
        this.shoppinglistbikelight = Selector ('.cart_list div.cart_item:nth-child(4) .inventory_item_name')
        this.shoppinglistbolttshirt = Selector ('.cart_list div.cart_item:nth-child(5) .inventory_item_name')
        this.shoppinglistfleecejacket = Selector ('.cart_list div.cart_item:nth-child(6) .inventory_item_name')
        this.checkoutbutton = Selector('.btn_action.checkout_button')
    }
    async checkoutClick(){
        await t.click(this.checkoutbutton)
    }
    async validateShoppingCartPage(){
        await t.expect(this.shoppingheader.exists).ok()
        await t.expect(this.shoppingheader.innerText).eql('Your Cart')
    }
    async validateIteminShoppingCart(backpack){
        await t.expect(this.shoppinglistbackpack.innerText).eql(await backpack)
    }
    async validateItemsInShoppingCart(backpack, bikelight, bolttshirt, fleecejacket){
        await t.expect(this.shoppinglistbackpack.innerText).eql(await backpack)
        await t.expect(this.shoppinglistbikelight.innerText).eql(await bikelight)
        await t.expect(this.shoppinglistbolttshirt.innerText).eql(await bolttshirt)
        await t.expect(this.shoppinglistfleecejacket.innerText).eql(await fleecejacket)
    }
}

export default new Shopingcart()