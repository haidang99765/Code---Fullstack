hello();

function hello() {
    console.log("Hello");
}

const hello2 = function() {
    console.log("Hello2")
};
hello2();

const helloArr = () => {
    console.log("HelloArr");
};
helloArr();

document.getElementById("myBtn").addEventListener('click',  () => {
    console.log(this);
}); 

const sum = (a, b) => {
    return a + b;
}

const sumSh = (a,b) => a + b;
const divide = (a,b) => a / b;

//sự khác nhau giữa arrow function và normal function là sự khác nhau ở biến "this", this của arrow function
//sẽ bỏ qua kết quả của biến this, còn của normal function thì sẽ hiển thị kết quả của biến this
