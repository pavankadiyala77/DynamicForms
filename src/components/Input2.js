import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";


const InputField2 = (props) =>{
    const {handle,setHandle}= useContext(UserContext)
    const {name,label,value,type,placeholder,validate} =props.each

   const Update =(e) =>{
       setHandle({...handle,[e.target.name]:e.target.value})
   }

    return(
        <div>
            <label>{label}:</label>
           <input name ={name} placeholder ={placeholder} label ={label} value ={handle[name]} type ={type} required ={validate.required ? {required:true}:{required:false}} onChange ={Update} className="form-control form-control-lg" autoComplete="off" />
        </div>
    )
}

export default InputField2