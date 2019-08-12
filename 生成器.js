//自己定义的接口

// var obj = {
//     start:[1,2,3,4],
//     end:[5,6,7,8],
//     [Symbol.iterator]:function(){
//         let self = this;
//         let arr = self.start.concat(self.end);
//         let index = 0;
//         let len = arr.length;
//         return {
//             next(){
//                if(index < len){
//                    return {
//                        value:arr[index++],
//                        done:false
//                    }
//                }else{
//                    return {
//                        value:arr[index++],
//                        done:true
//                    }
//                }
//             }
//         }
//     }
// }

// for(let i of obj){
//     console.log(i)
// }



//使用官方现成的接口
var obj = {
    start:[1,2,3,4],
    end:[5,6,7,8]
}

var arr = obj.start.concat(obj.end);//将两数组合并

for(let [key,value] of Object.entries(arr)){
    console.log(key,value)
}