import React from "react";
import { useContext,useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../App";

const InputField6 = (props) =>{
    const {handle,setHandle}= useContext(UserContext)
    const [user,setUser] =useState({languages:[]})

    const Handle =(e) =>{
        
        const {languages} =user;
        const {value,checked} = e.target
        if(checked){
            setUser({
                languages:[...languages,value],
            })
        }
        else{
            setUser({
                languages:languages.filter(e => e!==value)
            })
        }
    }

    useEffect(()=>{
        setHandle({...handle,[name]:user.languages})
    },[user])

    const {name,label,value,type,validate,enum:eNum} =props.each
    
    return(
        <div>
            <label>{label}::</label>
            {
                eNum.map((each,i) =>{
                    return (
                             <React.Fragment key={i}>
                            <input type={type} name ={name} value ={each} label ={label}  onChange ={Handle} autoComplete="off" class="form-check-input"  />
                            <label >{each}</label>
                            </React.Fragment>
                    )
                })
            }   
        </div>
    )
}
export default InputField6