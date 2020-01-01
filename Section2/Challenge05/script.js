// Challenge 05 - Tip Calculator PRO 5000
//I've played a LOT with arrays, objects(key-value pairs) and made a lot of
//inefficient stuff. But...It is pratice to learn more. 

var johnBills = {
    name: 'john',
    paidBills: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    tipRate: [0.2,0.15,0.1],
    valRanges: [[50],[50,200]],
    calcBills: function() {
        for (var i = 0; i < this.paidBills.length; i++) {
            switch (true) {
                case this.paidBills[i] < this.valRanges[0][0]:
                    this.pushBill(i, this.tipRate[0])
                    break;
                case (this.paidBills[i] >= this.valRanges[1][0]) && (this.paidBills[i] <= this.valRanges[1][1]):
                    this.pushBill(i, this.tipRate[1])
                    break;
                default:
                    this.pushBill(i, this.tipRate[2])
                    break;
            }
        }
    },
    pushBill: function (index, rate){
        this.tips.push(this.paidBills[index] * rate);
        this.totals.push(this.tips[index] + this.paidBills[index])
    }
}

var markBills = {
    name: 'mark',
    paidBills: [77, 475, 110, 45],
    tips: [],
    totals: [],
    tipRate: [0.2,0.1,0.25],
    valRanges: [[100],[100,300]],
    calcBills: function() {
        for (var i = 0; i < this.paidBills.length; i++) {
            switch (true) {
                case this.paidBills[i] < this.valRanges[0][0]:
                    this.pushBill(i, this.tipRate[0])
                    break;
                case (this.paidBills[i] >= this.valRanges[1][0]) && (this.paidBills[i] <= this.valRanges[1][1]):
                    this.pushBill(i, this.tipRate[1])
                    break;
                default:
                    this.pushBill(i, this.tipRate[2])
                    break;
            }
        }
    },
    pushBill: function (index, rate){
        this.tips.push(this.paidBills[index] * rate);
        this.totals.push(this.tips[index] + this.paidBills[index])
    }
}

function averager(billList) {
    var averageList = [];
    var average = 0;
    for (let i = 0; i < billList.length; i++){
        for (let j = 0; j < billList[i].tips.length; j++) {
            average += billList[i].tips[j];
        }
        average /= billList[i].tips.length;
        averageList[i] = [billList[i].name,average]
    }
    return averageList
}

johnBills.calcBills();
markBills.calcBills();
var avgList = averager([markBills,johnBills]);

var higher;
for (let i = 0; i < avgList.length-1; i++) {
    higher = avgList[i][1] > avgList[i+1][1] ? avgList[i] : avgList[i+1];
}

console.log(johnBills);
console.log(markBills);
console.log(avgList);
console.log(higher[0]+'\'s family paid the highest average of tips, $'+higher[1]);
