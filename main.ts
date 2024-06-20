#! /usr/bin/env node

interface ibankaccount{
    credit (amount:number) : void;
    debit (amount:number) : void;
}

class Bankaccount implements ibankaccount{
    accountBalance : number;
    constructor (accountBalance:number){
     this.accountBalance = accountBalance
    }
public credit(amount: number) {
    if(amount>0){
        this.accountBalance+= amount
        console.log("Credit sucessfully get into new account and your balance is:"+this.accountBalance);
    }
    else{
        console.log("credit unsucessful")
    }
}
public debit(amount: number) {
    if(amount>0 && amount<this.accountBalance){
        this.accountBalance-=amount
        console.log("debit successfully share in new account balance:"+this.accountBalance);
    }else{
        console.log("debit unsuccessfully")
    }
}
}

class Customer{
    person :{
        firstName: string;
        lastName: string;
    }
    age :number;
    gender : string;
    mobile_number: number;
    bankaccount : Bankaccount ;
     constructor(person:{firstName:string,lastName:string},age:number,gender:string,mobile_number:number,bankaccount:Bankaccount){
        this.person=person;
        this.age=age;
        this.gender=gender;
        this.mobile_number=mobile_number;
        this.bankaccount=bankaccount
     }
     public display(){
        console.log("\nName:" +this.person.firstName+""+this.person.lastName);
        console.log("Age:" +this.age);
        console.log("Gender:" +this.gender);
        console.log("Mobile Number:" +this.mobile_number);
        console.log("Amount In Bank:" +this.bankaccount.accountBalance);
        console.log();
     }
}
const a1 = new Bankaccount(8000)
const c1 = new Customer ({firstName: "ammara",lastName:"tasawwur"},22,"female",3012829293,a1)
c1.display()
c1.bankaccount.debit(500)
console.log()

const a2 = new Bankaccount(5000)
const c2 = new Customer ({firstName: "hani",lastName:"tasawwur"},18,"female",301287232,a2)
c2.display()
c2.bankaccount.debit(1000)
console.log()
