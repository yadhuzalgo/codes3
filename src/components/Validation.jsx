import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () => {
    var[submitted,setSubmitted]= useState(false)
    var[inputs,setInputs]=useState({
        fname:''
    })
    var[validation,setValidaton]=useState({
        fname:''
    })
     const handleInput =(e)=>{
        const {name,value}=e.target 
        setInputs({...inputs,[name]:value})
        console.log(inputs)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSubmitted(true)
    }

    const checkValidation =()=>{
        let error = validation;
        if(!inputs.fname.trim()){
            error.fname="first name is required"
        }else{
            error.fname=""
        }    
        setValidaton(error)
        }
        useEffect(()=>{
            checkValidation()
        })
  return (
    <div>
        <form onSubmit={handleSubmit}>
           
         <TextField label='first name' name='fname' value={inputs.fname} onChange={handleInput}/>  <p/>
         {(validation.fname&&submitted)&&<p>{validation.fname}</p>}
         <Button type='submit' variant='contained' color='success'>save</Button>
        </form>
        </div>
  )
}

export default Validation
