var obj = {
    name:'fly',
    time:'2018'
}
//参数一:需要代理的对象     参数二:代理设置
var proxy = new Proxy(obj,{
    get(target,key){
        return target[key].replace('2018','2019')
    },
    set(target,key,value){
        if(key == 'name'){
           
            // 满足条件返回修改后的值
            return target[key] = value;
        }
        else{
            // 不满足条件返回原来的值
            return target[key]
        }
    }
})


proxy.name = 'fxxk'
console.log(proxy.name)