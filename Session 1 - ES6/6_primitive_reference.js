const foo = {};
const bar = foo;
console.log(bar === foo);

const foo2 = {};
const bar2 = {};
console.log (foo2 === bar2);

const arr = [];
const arr2 = arr;
arr.push(1);
console.log(arr2);

//Kiểu dữ liệu primitive (nguyên thủy) tức là sẽ gán giá trị vào chính bản thân biến đó (áp dụng với string, number, boolean, undefined, null)
//Kiểu dữ liệu preference (tham chiếu) tức là so sánh giá trị trên cùng 1 ô nhớ, còn nếu 2 biến là 2 object khác nhau thì sẽ so sánh trên 2 ô nhớ khác nhau và kết quả sẽ là false