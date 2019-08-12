// 解构赋值
// 对象的解构赋值
let obj = {
    data: {
        status: 1,
        msg: "hi"
    }
}
let {
    data: {
        status,
        msg
    }
} = obj
console.log(status, msg);
// 数组的结构赋值
let arr = [1, 2, 3, 4];
let [a, b, c, d] = arr;
console.log(b)


// 解构赋值+默认参数
let arr2 = [1, 2, 3, 4, 5]

function show(...rest) {
    let sum = 0;
    rest.forEach((ele, index) => {
        sum += ele
    })
    console.log(sum);
}
show(...arr2)

// 字符串模板 和 includes

let arr3 = [{
    id: 1,
    name: "宝马"
},{
    id: 2,
    name: "宝骏"
},{
    id: 3,
    name: "奔驰"
}]
var newArr=[];
arr3.forEach((ele)=>{
    if(ele.name.includes("宝")) newArr.push(ele)
})
console.log(newArr);
