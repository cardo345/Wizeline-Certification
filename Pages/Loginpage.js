import { Selector, t } from 'testcafe'
import Productspage from '../Pages/Productspage'


class Logingpage{
    constructor (){
        this.usenamefield = Selector ('input[name = "user-name"]')
        this.passwordfield = Selector ('input[name = "password"]')
        this.loginbutton = Selector('.btn_action')
        this.errormessage = Selector('h3')
        this.loginglogo = Selector('.login_logo')
    }
    async submitLogin(username, password){
        await t
        .typeText(this.usenamefield, username, {paste:true})
        .typeText(this.passwordfield, password, {paste:true})
        .click(this.loginbutton)
}
    async validateLoginErrorMessage(){
        await t.expect(this.errormessage.exists).ok()
        await t.expect(this.errormessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
    }
    async validateSuccessfulLogout(){
        await t.expect(this.loginglogo.exists).ok()
    }
}

export default new Logingpage()