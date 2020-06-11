let total=0;
const arr=[
    {quantity:3,price:56},
    {quantity:4,price:956},
    {quantity:5,price:6},
]
let tprice=gettotal(arr);
const details=getUserDetails("Shyam", "Tiwari","asdf@gmail.com");
function getUserDetails(firstName,lastName,email){
    return `${firstName} ${lastName} || ${email}`
}
function gettotal(arr){
    for(let i=0;i<arr.length;i++){
        total+=arr[i].quantity * arr[i].price;
    }
    return total;
}
tax=total*0.80;
console.log(details);
console.log(tprice);
console.log(tax);