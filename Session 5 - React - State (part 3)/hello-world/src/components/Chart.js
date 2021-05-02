import "./Chart.css";
const Chart = (props) => {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const expenseByMonth = {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        June: 0,
        July: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
    };
    props.data.forEach((item) => {
        const monthName = item.date.toLocaleString('en-US', {month: 'short'});
        expenseByMonth[monthName] += item.price;
    });

    const allExpense = Object.values(expenseByMonth);
    let max = Math.max(...allExpense);

    if((max === 0)) {
        max = 1;
    }

    return (
        <div className="chart-container">
            {month.map((m) => (
                <MonthBar month={m} key={m} value={(expenseByMonth[m] * 100) / max} />
            ))}
        </div>
    )
}

const MonthBar = (props) => {
    return (
        <div className="chart-bar-item">
            <div className="bar-container">
                <div className="bar-fill" style={{height: props.value + '%'}}></div>
            </div>
            <p className="month-name">{props.month}</p>
        </div>
    )
}


export default Chart;