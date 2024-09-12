var a =[1,3,4,6,7,9,14,16,19,25];
let newa = a.filter((value,index,arr)=>{
    return value%2==0});
console.log(newa);

// viet lai

Array.prototype.filterfn = function(callbackfn){
    let arr=[];
    for (let i=0;i<this.length;i++){
        if(callbackfn(this[i])){
            arr.push(this[i]);
        }
    }
    return arr;
}
var newarr =a.filterfn((value)=>{
    return value%2==0;
});
console.log(newarr);