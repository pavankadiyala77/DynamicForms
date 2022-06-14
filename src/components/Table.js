import React from "react";

export const Table =(props) =>{
    console.log(props);
    const {firstName,lastName,email,gender,age,skills,country,description} =props.tds
    return(
        <tbody>
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{age}</td>
                <td>{skills}</td>
                <td>{country}</td>
                <td>{description}</td>
            </tr>
        </tbody>
    )
}

