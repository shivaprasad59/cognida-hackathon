import React, { useEffect, useState } from 'react'
import SignIn from './SignIn'
import { Button,ButtonGroup } from '@mui/material'
import './Auth.css'
import SignUp from './SignUp'
const Auth = (props) => {
  const [variant1,setVariant1]=useState("contained")
  const [variant2,setVariant2]=useState("outlined")
  const setUserDetails=props.setUserDetails;
  const [login,setLogin]=useState(true)
  useEffect(()=>{
    if(login){
      setVariant1("contained")
      setVariant2("outlined")
    }
    else{
      setVariant2("contained")
      setVariant1("outlined")
    }
  },[login])
  return (
    <div >
     <div className='button-group'>
     <ButtonGroup
  disableElevation
  
  aria-label="Disabled elevation buttons"
>
  <Button onClick={()=>{setLogin(true); setVariant1("contained");setVariant2("outlined")}} variant={variant1}>Login</Button>
  <Button onClick={()=>{
    setLogin(false);
    setVariant1("outlined");
    setVariant2("contained")
  }} variant={variant2}>SignUp</Button>
</ButtonGroup>
     </div>
        {
          login?<SignIn setLogin={setLogin} setUserDetails={setUserDetails}/>:<SignUp setLogin={setLogin}/>
        }
    </div>
  )
}

export default Auth