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
    async validateOverviewPage(){
        await t.expect(this.overviewheader.innerText).eql('Checkout: Overview')
    }
    async validateItemsInOverviewPage(backpack, bikelight, bolttshirt, fleecejacket){
        await t.expect(this.overviewlistbackpack.innerText).eql(await backpack)
        await t.expect(this.overviewlistbikelight.innerText).eql(await bikelight)
        await t.expect(this.overviewlistbolttshirt.innerText).eql(await bolttshirt)
        await t.expect(this.overviewlistfleecejacket.innerText).eql(await fleecejacket)
    }
}

export default new Overviewpage()