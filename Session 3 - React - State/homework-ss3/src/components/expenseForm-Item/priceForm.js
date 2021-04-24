import { useState } from "react";

const PriceForm = (props) => {
    const [price, setPrice] = useState();

    const onChangePrice = (price) => {
        setPrice(price.target.value);
        console.log(price.target.value);
    };
    return (
        <>
            <input type="number" value={price} onChange={onChangePrice} />
        </>
    );
}

export default PriceForm;
