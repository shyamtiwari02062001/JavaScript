let arr=[
    {quantity:1,price:10},
    {quantity:23,price:3},
    {quantity:11,price:5},
];
let total_price=0;
for(let i=0;i<arr.length;i++){
    total_price+=(arr[i].quantity*arr[i].price);
}
console.log(total_price)