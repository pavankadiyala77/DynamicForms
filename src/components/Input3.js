import  React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'
const InputField3 =(props) =>{
    const {handle,setHandle}= useContext(UserContext)
    const {name,label,value,type,placeholder,validate} =props.each
    const {required,maxlength,minlength} = validate

    const Upadate =(e) =>{
        setHandle({...handle,[e.target.name]:e.target.value})
    }

    return(
        <div>
            <label>{label}:</label>
            <input name ={name} label ={label} value ={handle[name]} type={type} placeholder={placeholder} required ={validate.required ? {required:true}:{required:false}} onChange ={Upadate} className="form-control form-control-lg" autoComplete="off"  />
        </div>
    )
}
export default InputField3