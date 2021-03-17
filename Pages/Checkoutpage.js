import { Selector, t } from 'testcafe'
import { CREDENTIALS } from '../Data/Constants'

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
    async enterUserInfo(){
        await this.inputfirstname(CREDENTIALS.USER_INFO.FIRSTNAME)
        await this.inputlastname(CREDENTIALS.USER_INFO.LASTNAME)
        await this.inputzip(CREDENTIALS.USER_INFO.ZIP)
    }
    async validatefirstnameerror(){
        await t.expect(this.checkouterror.innerText).eql('Error: First Name is required')
    }
    async validatelastnameerror(){
        await t.expect(this.checkouterror.innerText).eql('Error: Last Name is required')
    }
    async validateziperror(){
        await t.expect(this.checkouterror.innerText).eql('Error: Postal Code is required')
    }
}

export default new Checkoutpage()