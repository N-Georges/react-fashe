import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Panier = ({picture, subTitle, price, tag}) => {
    console.log(price);
    return (
        <div>

            <Box sx={{ m:4 }}>
                <Box sx={{display: 'flex'}}>
                    <Typography sx={{color: 'info.main'}} gutterBottom variant="h5" m='4'>
                        Article: {price} 
                    </Typography>
                </Box>    
            </Box>
        </div>
    );
};

export default Panier;