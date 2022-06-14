import React from "react";
import { Modal } from "bootstrap";
import { useContext } from "react";
import { UserContext } from "../App";

const InputField5 = (props) =>{
    const {handle,setHandle}= useContext(UserContext)
    const {name,label,value,type,validate} =props.each

    const Update =(e) =>{
        setHandle({...handle,[e.target.name]:e.target.value})
    }

    
    return(
        <div >
            <label>{label}:</label>
            <input name ={name} label ={label} value ={handle[name]} type ={type} required ={validate.required ? {required:true}:{required:false}} onChange ={Update}  />
            
        </div>
    )
}
export default InputField5