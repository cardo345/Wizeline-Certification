import { Selector, t } from 'testcafe'

class Checkoutpage{
    constructor(){
        this.checkoutheader = Selector('.subheader')
        this.checkoutfistname = Selector('#first-name')
        this.checkoutlastname = Selector('#last-name')
        this.checkoutzip = Selector('#postal-code')
        this.checkoutcontinuebtn = Selector('.btn_primary.cart_button')
        this.checkouterror = Selector('h3')
    }
    async inputfirstname(firstname){
        await t.typeText(this.checkoutfistname, firstname, {paste:true})
    }
    async inputlastname(lastname){
        await t.typeText(this.checkoutlastname, lastname, {paste:true})
    }
    async inputzip(zip){
        await t.typeText(this.checkoutzip, zip, {paste:true})
    }
    async continueClick(){
        await t.click(this.checkoutcontinuebtn)
    }
}

export default new Checkoutpage()