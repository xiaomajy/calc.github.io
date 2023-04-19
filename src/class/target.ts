export default class target{
    date: string=''
    money: number=0 //每月本金
    rate_money: number=0 //每月利息
    all_money:number=0 //每月还款金额
    surplus_money: number=0 //剩余金额
    /**
     * toString
     */
    public toString() {
        return {'date':this.date,'money':this.money.toFixed(3),'rate_money':this.rate_money.toFixed(3),'all_money':this.all_money.toFixed(3),'surplus_money':this.surplus_money.toFixed(3)}
    }
   
}