import { useState } from "react";

const DateForm = (props) => {
    const [date, setDate] = useState("");
    const onChangeDate = (date) => {
        setDate(date.target.value);
        console.log(date.target.value);
    };
    return (
        <>
            <input type="date" value={date} onChange={onChangeDate} />
        </>
    );
}

export default DateForm;