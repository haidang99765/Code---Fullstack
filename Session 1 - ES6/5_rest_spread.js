//rest và spread là 2 phương thức làm việc với mảng và object, concat là nối 1 phần tử vào 1 mảng, rest thì làm việc với mảng, spread làm việc với object
const arr = [1];
arr.push(2);
arr.push(3);
console.log(arr.concat(4))
console.log(arr);
console.log([...arr, 4]); //đây là 1 cách khác khi chúng ta dùng concat, ... kia là lấy tất cả toàn bộ phần tử trong mảng arr => và đây là Rest, rest thì sẽ không chỉnh sửa mảng cũ, mà chỉ thêm mới giá trị vào mảng cũ
//khi chúng ta console.log(arr.push(number)) thì sẽ hiển thị ra số phần tử ở trong 1 mảng mà đã thêm phần tử mới vào, còn với concat thì sẽ hiển thị ra mảng có chứa cả giá trị mới đc thêm vào

const obj = {
    name1: "alice",
    age: 16,
    address: {
        city: 'Hanoi',
        district: 'Cau Giay',
    }
}

console.log ({
    ...obj,
    age: 18,
    gender: "F",
}); //đây là Spread, Spread là không sửa những giá trị cũ, chỉ tạo ra giá trị mới

const {name1, age, address: {city, district}} = obj; //đây là cú pháp mà từ obj kia chúng ta sẽ lấy ra 2 giá trị name và age, đây là Destructoring
console.log (name1, age);

const coordinate = [0,1];
const [x,y] = coordinate;

