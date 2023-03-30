import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sampleform = () => {
    var[input,setInput] = useState();
    const inputHandle = (event)=>{
        setInput(event.target.value)
         console.log(input)
    }
    var[output,setOutput] = useState();
     const outputHandle = (event)=>{
        setOutput(event.target.value)
         console.log(output)
     }
      return (
    <div>
     <Typography>{input}</Typography>
     <TextField variant='outlined' label='first name' onChange={inputHandle}/><p/>
     <Typography>{output}</Typography>
     <TextField variant='filled' label='last name' onChange={outputHandle}/><p/>
     <Button variant='contained'>log in</Button>
    </div>
  )
}

export default Sampleform
