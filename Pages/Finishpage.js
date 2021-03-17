import { Selector, t } from 'testcafe'
class Finishpage{
    constructor(){
        this.finishheader = Selector('.subheader')
        this.confirmation = Selector('.complete-header')
        this.confirmation2 = Selector('.complete-text')
    }
    async validateFinishPage(){
        await t.expect(this.finishheader.innerText).eql('Finish')
        await t.expect(this.confirmation.innerText).eql('THANK YOU FOR YOUR ORDER')
        await t.expect(this.confirmation2.innerText).eql('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }
}

export default new Finishpage()