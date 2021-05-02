import { useState } from "react"

 const FormInput = (props)  => {
    const handleValueChange = (event) => {}
    return (
        <div>
            <label>
                {props.label}:
                <input placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.onChange}/>
            </label>
        </div>
    )
}

export default FormInput;