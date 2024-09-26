var calcTip = bill => bill >= 50 && bill <=300 ? bill*0.15 : bill*0.20;
console.log(`Tip cho hóa đơn 100 là: ${calcTip(100).toFixed(2)}`);

var bills = [125,555,44]
var tips = bills.map(bill => calcTip(bill));
var total = bills.map((bill, index)=> bill + tips[index]);

console.log(`Hóa đơn: ${bills}`);
console.log(`Tips: ${tips.map(tip => tip.toFixed(2))}`);
console.log(`Tổng: ${total.map(value => value.toFixed(2))}`);