const sum = (a,b) => {
    return a + b;
};

const sub = (a,b) => {
    return a - b;
};

const divided = (a,b) => {
    return a / b;
};

const multi = (a,b) => {
    return a * b;
};

export {sum, sub, divided, multi}; //export có thể export nhiều hơn 1 thứ với name export 

const myMath = {
    sum: sum,
    sub: sub,
    divided: divided,
    multi: multi,
};
export default myMath; //đây là export default, export kiểu này chỉ có thể export 1 thứ duy nhất
