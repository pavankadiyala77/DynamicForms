import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";


const InputField8 =(props) =>{
    const {handle,setHandle}= useContext(UserContext)
    const {name,label,value,type,validate} =props.each

    const Update =(e) =>{
        setHandle({...handle,[e.target.name]:e.target.value})
    }


    return(
        <div>
            <label>{label}:</label>
<textarea name ={name} label ={label} value ={handle[name]} type ={type} required ={validate.required ? {required:true}:{required:false}} onChange ={Update} className="form-control" placeholder="Enter Feedback" class="materialize-textarea form-control" autoComplete="off" />
        </div>
    )
}

export default InputField8