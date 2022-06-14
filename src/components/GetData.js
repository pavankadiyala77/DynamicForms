import React from 'react'
import axios from 'axios'
import InputField from './Input1'
import { useState,useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'
import { Table } from './Table'
import { Button } from 'react-bootstrap'



 export const GetData =()=>{
     let arr = [
        {
            "name": "firstName",
            "label": "First Name",
            "value": "",
            "type": "text",
            "placeholder": "please enter first name",
            "validate": {
                "required": true,
                "minLength": 10,
                "maxLength": 15
            }
        },
        {
            "name": "lastName",
            "label": "Last Name",
            "value": "",
            "type": "text",
            "placeholder": "please enter last name",
            "validate": {
                "required": false,
                "minLength": 10,
                "maxLength": 15
            }
        },
        {
            "name": "email",
            "label": "Email",
            "value": "",
            "type": "email",
            "placeholder": "please enter email",
            "validate": {
                "required": true,
                "minLength": 10,
                "maxLength": 20
            }
        },
        {
            "name": "gender",
            "label": "Gender",
            "value": "",
            "enum": [
                "male",
                "female"
            ],
            "type": "radio",
            "validate": {
                "required": true
            }
        },
        {
            "name": "age",
            "label": "Age",
            "value": "",
            "type": "date",
            "validate": {
                "required": true,
                "min": "1970-01-01",
                "max": "2002-12-31"
            }
        },
        {
            "name": "skills",
            "label": "Skills",
            "value": "",
            "enum": [
                "Html",
                "Css",
                "JavaScript",
                "PHP",
                "Angular",
                "React",
                "Sql"
            ],
            "type": "checkbox",
            "validate": {
                "required": true
            }
        },
        {
            "name": "country",
            "label": "Country",
            "value": "",
            "enum": [
                "India",
                "Sri Lanka",
                "Pakisthan",
                "Bangladesh",
                "China",
                "Nepal",
                "Bhutan"
            ],
            "type": "select",
            "validate": {
                "required": true
            }
        },
        {
            "name": "description",
            "label": "Descritpion",
            "value": "",
            "type": "textarea",
            "validate": {
                "required": false,
                "maxLength": 50
            }
        }
    ]
     let array =JSON.parse(localStorage.getItem('handle')||'[]')
    const {handle,setHandle}= useContext(UserContext)
    const [retrive,setRetrive] = useState([]);


  
    useEffect(()=>{
    //     axios.get('http://192.168.4.109:8080/api/getForm')
    // .then(response => {
    //     setRetrive(response.data.success.formControlls)
    //     console.log(response.data.success.formControlls);

    // })
    // .catch(error =>{
    //     console.log(error);
    // })
    setRetrive(arr)
    console.log(data)

    },[])

   const Submit =(e) =>{
       e.preventDefault()
       console.log(handle);
       array.push({...handle})
       console.log(array);
        localStorage.setItem('handle',JSON.stringify(array))  
        window.location.reload()
   }

   const data = JSON.parse(localStorage.getItem('handle'));

   const col ={
       color:'tomato',
       textDecoration:'underline'
   }            


    return(
        <div>
        <div className='active'>
             <div className="card-body" >
                 <h1>Register Here</h1>
            <form onSubmit={Submit} className='change' >
         {
             retrive.map((each,i) => {
                 return (
                    <InputField  key = {i} each ={each}/>
                 )
             })
         }
         
         <Button  className ="btn btn-info" type = 'submit'>submit</Button>
         </form>
         </div>
         </div><br/><br/><br/>
         <h1>Check Here</h1>
         <table className ="table table-hover">
             <thead>
                 <tr style={col}>
                 <th>FIRSTNAME</th>
                 <th>LASTNAME</th>
                 <th>EMAIL</th>
                 <th>GENDER</th>
                 <th>DATE OF BIRTH</th>
                 <th>SKILLS</th>
                 <th>COUNTRY</th>
                 <th>DESCRIPTION</th>
                 </tr>
             </thead>
             {
                 array.map((each,i) =>  {
                    return <Table tds = {each} key ={i}/>    
                 })  
             }
         </table>
         </div>
       
        
    )
}






