import { Selector, t } from 'testcafe'
class Finishpage{
    constructor(){
        this.finishheader = Selector('.subheader')
        this.confirmation = Selector('.complete-header')
        this.confirmation2 = Selector('.complete-text')
    }
}

export default new Finishpage()