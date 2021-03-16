import { Selector, t } from 'testcafe'

class productspage{
    constructor (){
        this.backpackname = Selector ('.inventory_list div.inventory_item:nth-child(1) .inventory_item_name')
        this.backpackadd = Selector ('.inventory_list div.inventory_item:nth-child(1) button')
        this.shoppingcart = Selector('.svg-inline--fa.fa-shopping-cart.fa-w-18.fa-3x')
        this.menubutton = Selector('#react-burger-menu-btn')
        this.logout = Selector('#logout_sidebar_link')
        this.pagetitle = Selector('.product_label')
        this.removebackpack = Selector ('.btn_secondary.btn_inventory')
        this.bikelightadd = Selector ('.inventory_list div.inventory_item:nth-child(2) button')
        this.bikelightname = Selector ('.inventory_list div.inventory_item:nth-child(2) .inventory_item_name')
        this.removebikelight = Selector('.inventory_list div.inventory_item:nth-child(2) button.btn_secondary.btn_inventory')
        this.bolttshirtadd = Selector ('.inventory_list div.inventory_item:nth-child(3) button')
        this.bolttshirtname = Selector ('.inventory_list div.inventory_item:nth-child(3) .inventory_item_name')
        this.fleecejacketadd = Selector ('.inventory_list div.inventory_item:nth-child(4) button')
        this.fleecejacketname = Selector ('.inventory_list div.inventory_item:nth-child(4) .inventory_item_name')
        this.removebolttshirt = Selector('.inventory_list div.inventory_item:nth-child(3) button.btn_secondary.btn_inventory')
        this.removefleecejacket = Selector('.inventory_list div.inventory_item:nth-child(4) button.btn_secondary.btn_inventory')
    }

    async menuClick(){
        await t.click(this.menubutton)
    }
    async logoutClick(){
        await t.click(this.logout)
    }
    async shoppingcartClick(){
        await t.click(this.shoppingcart)
    }
    async backpackClick(){
        await t.click(this.backpackadd)
    }async bikelightClick(){
        await t.click(this.bikelightadd)
    }
    async bolttshirtClick(){
        await t.click(this.bolttshirtadd)
    }
    async fleecejacketClick(){
        await t.click(this.fleecejacketadd)
    }
}

export default new productspage()