var a =[50,100,200,250,300];
var newa=a.reduce((total,value)=>{
    return total+value;
});
console.log(newa);
console.log('--------------------------');


// viet lai

Array.prototype.reducefn = function(callbackfn){
    let total = 0;
    for (let i=0;i<this.length;i++){
        total+=callbackfn(total,this[i]);
    }
    return total;
}
var newarr = a.reducefn((total,value)=>{
    console.log(total);
    console.log(value);
    console.log('------------------');
    return total+value;
});
console.log(newarr);