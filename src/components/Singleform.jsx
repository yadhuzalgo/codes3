import { Button, Input, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Singleform = () => {
    var[input,setInput]= useState({
        value1:'',
        value2:'',
        value3:''
    })
    const inputHandler = (e)=>{
        const {name,value} = e.target 
        setInput({...input,[name]:value})
    } 
  return (
    <div>
        <Typography>{input.value1}</Typography>
      <TextField label='first name' name='value1' value={input.value1} onChange={inputHandler} /> <p/>
      <Typography>{input.value2}</Typography>
      <TextField label='middle name' name='value2' value={input.value2} onChange={inputHandler} /> <p/>
      <Typography>{input.value3}</Typography>
      <TextField label='last name' name='value3' value={input.value3} onChange={inputHandler} /><p/>
      <Button variant='contained'>submit</Button>
    </div>
  )
}

export default Singleform
