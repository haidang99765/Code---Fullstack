import './expenseItem.css';

const ExpenseItem = (props) => { //đây là JSX, các attribute được ghi thêm vào trong các thẻ custom HTML, custom HTML ở đây là thẻ <ExpenseItem/> thì sẽ gọi là prop, và các prop khi console.log ra thì sẽ ở dưới dạng object, hay nói cách khác, prop là 1 cách để chúng ta đẩy dữ liệu từ ngoài vào trong
    
    const price = Math.floor(Math.random() * 2000);
    console.log(price);
    console.log(props)
    return (
        <div className="expense-item"> 
            <h2>March 28, 2020</h2>
            <div className="expense-item-description">
                <h2>{props.name}</h2>
                <div className="expense-item-price">
                    ${props.price}
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default ExpenseItem;
//children kia là 1 prop đặc biệt, nếu custom HTML là không phải 1 thẻ tự đóng và ghi vào giữa thì sẽ được coi là prop children