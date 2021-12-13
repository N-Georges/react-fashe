import React from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
const CardProductHome = ({picture, subTitle, price}) => {
    console.log(picture);
    return (
        <>
            <Box
                sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2,
                    '& > :not(style)': {
                        m: 1,
                        width: 193,
                        // height: 278,
                    },
                }}>
                <Card
                    className='card1 cards'
                    sx={{ width: 238, height: 248, boxShadow: 3 }}
                    style={{backgroundImage: `url(${picture})`}}
                >
                    
                </Card>
                <div className='cardProductHome-content'>
                    <p>{subTitle}</p>
                    <span>${price}</span>
                </div>
            </Box>
        </>
    );
};

export default CardProductHome;