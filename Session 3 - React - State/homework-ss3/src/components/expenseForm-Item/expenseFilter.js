import { useState } from "react";

const ExpenseFilter = (props) => {
    const [filter, setFilter] = useState();
    const onChangeFilter = (filter) => {
        console.log(filter.target.value);
    };
    return (
        <>
            <select onChange={onChangeFilter}>
                <option value="-1">Low</option>
                <option value="0">Normal</option>
                <option value="1">High</option>
            </select>
        </>
    );
}


export default ExpenseFilter;
