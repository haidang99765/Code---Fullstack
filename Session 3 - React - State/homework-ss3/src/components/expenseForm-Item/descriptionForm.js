import { useState } from "react";

const DescriptionForm = (props) => {
    const [description, setDescription] = useState("");

    const onDescriptionChange = (description) => {
        setDescription(description.target.value);
        console.log(description.target.value)
    };
    return (
        <>
            <input type="text" value={description} onChange={onDescriptionChange}/>
        </>
    );
}

export default DescriptionForm;