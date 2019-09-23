// Challenge 02 - Tip Calculator

function tipCalculator(restaurantBills) {
    function pushTipBill(tip, bill) {
        tips.push(tip);
        totals.push(bill+tip);
    }
    tips = [];
    totals = [];

    restaurantBills.forEach(bill => {
        if (bill < 50) {
            tip = (bill * 0.2);
            pushTipBill(tip, bill);
        } else if (bill >= 50 && bill < 200) {
            tip = (bill * 0.15);
            pushTipBill(tip, bill);
        } else {
            tip = (bill * 0.1);
            pushTipBill(tip, bill);
        }
    });

    return [tips, totals];
}

var myBills, myTips, myTotals, myReturn;

myBills = [124, 48];
myReturn = tipCalculator(myBills);
myTips = myReturn[0];
myTotals = myReturn[1];

console.log(myBills);
console.log(myTips);
console.log(myTotals);