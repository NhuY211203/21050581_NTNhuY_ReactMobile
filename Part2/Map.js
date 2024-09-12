var  a=[2,5,7,9];
let newa= a.map(value=>value*value)
console.log(newa);

// viet lai

Array.prototype.mapfn = function (callbackfn){
    let arr=[];
    for (let i=0;i<this.length;i++){
        arr.push(callbackfn(this[i]));    
    }
    return arr;
}
var newarr = a.mapfn((value)=>{
    return value*value;
});
console.log(newarr);