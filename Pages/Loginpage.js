import { Selector, t } from 'testcafe'

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
    async invalidLogin(username, password){
        await t
        .typeText(this.usenamefield, username, {paste:true})
        .typeText(this.passwordfield, password, {paste:true})
        .click(this.loginbutton) 
    }

}

export default new Logingpage()