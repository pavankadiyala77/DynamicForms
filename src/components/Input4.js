import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'



const InputField4  =(props) =>{
    const {handle,setHandle}= useContext(UserContext)
    const {name,label,value,type,validate,enum:eNum} =props.each

    const Update = (e) =>{
        setHandle({...handle,[e.target.name]:e.target.value})
    }

    return(
        <div class='d-inline-flex p-2 bd-highlight'>
            <label>{name}</label><br/>
            {eNum.map((each,i) =>{
                return(
                    <div key={i} className="form-check">
                    <label >{each}</label>
                    <input class="form-check-input"  type ={type} label ={label} name ={name} value ={each} required ={validate.required ? {required:true}:{required:false}} onChange ={Update}/>
                    </div>
                )
            })}
        </div>
    )
}
export default InputField4