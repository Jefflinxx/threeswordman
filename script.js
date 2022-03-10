// String and Number concat
// 由左到右去算
// 如果數字碰到字串，數字就會變成字串，再去concat
// 字串如果是數字，前面加正負就會變回數字
// 數字加數字就會是數字，add
// 字串之間只有＋這個符號有用，其意義是concat
// 如果對字串做其他數字運算操作，就會呈現NaN，意思是not a Number
// not a Number的型別是number，跟字串＋就變成concat
// not a Number如果繼續做數字運算仍然是not a Number

console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);

var a = [1, 2, 3];
var b = a;
a.push(5);
console.log(b);

console.log(typeof function () {});
console.log(typeof new Date());
console.log(typeof {});
console.log(typeof new Array());
