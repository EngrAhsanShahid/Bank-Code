let bank = [1,2,5,10,20,50,100,500,1000,5000]
let bankReverse = [];
let temp = 0;
let input = 5500;
let result = 0;
for(var i = bank.length ; i >= 0; i --){
	bankReverse.push(bank[i])
}
for(var i = 1; i <= bank.length ; i++){
	result = input - temp;
  if(result >= bankReverse[i]){
  	console.log("ValueToAdd=",bankReverse[i])
    temp = temp + bankReverse[i];
    i--;
  }
}

/* console.log(temp) */
