class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    //原型上的方法
    say(){
        console.log(this.name,this.age)
    }
}

class ZS extends Person{
    constructor(name,age,job = "唱跳rap篮球"){
        //相当于es5的对象冒充
        super(name,age);
        this.job = job
    }
}

const zs = new ZS('zs',30)
console.log(zs.name);
console.log(zs.job)
zs.say()