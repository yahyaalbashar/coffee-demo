var coffeeType=prompt("what type of coffee do you want?");
var noCups=prompt("how many cups do you want to order?");

var orderDetails;

if (noCups >= 1 && noCups <3){
  orderDetails="congrats you gained a discount of 25%";
}
else if (noCups > 3 && noCups <= 5){
  orderDetails="congrats you gained a discount of 50% dicount";
}
else if(noCups > 5 && noCups<10){
  orderDetails="congrats you gained a discount of 50% dicount and a sticker";

}
else if(noCups >=10){
  orderDetails="congrats you gained a discount of 50% dicount and a DONUT!!!!";

}
else{
  orderDetails="no discounts";

}

document.write(orderDetails);
document.getElementById("order").innerText=coffeeType;
document.getElementById("cupscount").innerText=noCups;
confirm("are you happy with your discount?");
alert("Thank you and goodbye!");