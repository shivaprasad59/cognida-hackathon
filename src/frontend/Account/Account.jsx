import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import User from './User'
import History from './History'
const Account = () => {
    
    const [variant1, setVariant1] = useState('contained');
    const [variant2, setVariant2] = useState('outlined');
    const [account,setAccount]=useState(true)
    const handleVariant1 = () => {
        setVariant1('contained');
        setVariant2('outlined');
        setAccount(true)
    };

    const handleVariant2 = () => {
        setVariant2('contained');
        setVariant1('outlined');
        setAccount(false)
    };

    

    return (
        <div style={{display:"flex"}}>
            <Box sx={{ marginLeft: 2, marginTop: 2 }}>
            <Button variant={variant1} onClick={handleVariant1} sx={{  display: 'block' ,paddingRight:2.5}}>
                Details
            </Button>
            <Button variant={variant2} onClick={handleVariant2} sx={{ display: 'block' }}>
                History
            </Button>
        </Box>
        <div>
           {account?<User/>:<History/>}
        </div>
        </div>
    );
};

export default Account;
