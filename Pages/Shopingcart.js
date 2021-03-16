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
    async CheckoutClick(){
        await t.click(this.checkoutbutton)
    }

}

export default new Shopingcart()