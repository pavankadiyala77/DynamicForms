import React from "react";
import InputField2 from './Input2'
import InputField3 from "./Input3";
import InputField4 from "./Input4";
import InputField5 from "./Input5";
import InputField6 from "./Input6";
import InputField7 from "./Input7";
import InputField8 from "./Input8";

const InputField = (props) =>{

    switch(props.each.type){ 
        case 'text':
            return <InputField2 each ={props.each}/> 
        case 'email':
            return <InputField3 each ={props.each}/>
        case 'radio':
            return <InputField4 each ={props.each}/>
        case 'date':
            return <InputField5 each ={props.each}/>
        case 'checkbox':
            return <InputField6 each ={props.each}/>
        case 'select':
            return <InputField7 each ={props.each}/>
        case 'textarea':
            return <InputField8 each ={props.each}/>

    }

    return(
        <div >
          {/* <input  label={label} name ={name} value ={value} type ={type} placeholder ={placeholder} validate ={validate}/> */}
        </div>
    )
}

export default InputField