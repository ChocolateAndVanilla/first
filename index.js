// var arr = [
//     {
//         id:0,
//         name:'宝马'
//     },
//     {
//         id:1,
//         name:'宝骏'
//     },
//     {
//         id:2,
//         name:'路虎'
//     }
// ]

// function search(keyword){
//     var newArr = [];

//     arr.forEach(function(item){
//         if(item.name.includes(keyword)) newArr.push(item)
//     })

//     return newArr
// }

// console.log(search('宝'))

//ES6函数的简化写法
//当只有一个参数的时候,可以省略括号
// 当函数体只有一行的时候,可以省略 return 和 {}
// var show = item => item

// console.log(show(2));

//如果有多个参数的话,就不能省略括号
// var show = (x,y) => {
//     return x + y
// }
// console.log(show(2,3))


// var obj = {
//     name:'fly',
//     show(){
//         setTimeout(() => {
//             console.log(this.name)
//         },1000)
//     }
// }
// obj.show()

var arr = [1,2,3,4]

//entries()方法可以将数组模拟成一个对象 数据就会具备key 和 value
// for(let [index,item] of arr.entries()){
//     console.log(index,item)
// }

// for(let item of arr.keys()){
//     console.log(item)
// }

// for(let item of arr.values()){
//     console.log(item)
// }


//数组 for of 的另外一种写法
for(let [index,item] of Object.entries(arr)){
    console.log(item)
}