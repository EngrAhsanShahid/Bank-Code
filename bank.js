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


////// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let bank = [5000, 1000 ,500, 100, 50, 20, 10, 50 ,2 ,1];
let input = 270;
let temp = 0;
let total = 0;

for(let i = 0 ; i <= bank.length-1 ; i++){
    if(input >= bank[i]){
        console.log(bank[i])
        temp = temp + bank[i]; //390
        // console.log(temp)
        if(input > temp){
            total = input - temp; //90;
            if(total >= bank[i]){
                i--;
            }
        }
        else{
            break;
        }
    }
}
// console.log(temp)


// Correct version
let notes = [5000, 1000, 500];
let withDrawalAmount = 40000;
let temp = [];
getNotes(withDrawalAmount)

function getNotes(withDrawalAmount){
    for(var i = 0 ; i <= notes.length-1 ; i++){
        if(withDrawalAmount > notes[i]){
            withDrawalAmount = withDrawalAmount - notes[i];
            temp.push(notes[i]);
            i--;
        }
        else if(withDrawalAmount == notes[i]){
            temp.push(notes[i]);
        }
    }
}
console.log(temp)

