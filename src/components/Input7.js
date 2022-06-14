import React, { useEffect } from "react";
import { useContext,useState } from "react";
import { UserContext } from "../App";


const InputField7 =(props) =>{
    const {handle,setHandle}= useContext(UserContext)
    const {name,label,value,type,validate,enum:eNum} =props.each


    const Update =(e) =>{
        setHandle({...handle,[e.target.name]:e.target.value})
    }

    

    return(
        <div >
            <label>{label}:</label><br/>
            <select name={name} label ={label}  type ={type} required ={validate.required ? {required:true}:{required:false}} onChange ={Update} class="form-control">
            {eNum.map(each => <option key ={each} value ={each}>{each}</option>)}
            </select>
        </div>
    )
}

export default InputField7