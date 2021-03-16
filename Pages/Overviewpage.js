import { Selector, t } from 'testcafe'
class Overviewpage{
    constructor(){
        this.overviewheader = Selector('.subheader')
        this.overviewfinishbtn = Selector('.btn_action.cart_button')
        this.overviewlistbackpack = Selector('.cart_list div.cart_item:nth-child(3) .inventory_item_name')
        this.overviewlistbikelight = Selector ('.cart_list div.cart_item:nth-child(4) .inventory_item_name')
        this.overviewlistbolttshirt = Selector ('.cart_list div.cart_item:nth-child(5) .inventory_item_name')
        this.overviewlistfleecejacket = Selector ('.cart_list div.cart_item:nth-child(6) .inventory_item_name')
    }
    async finishcleck(){
        await t.click(this.overviewfinishbtn)
    }
}

export default new Overviewpage()