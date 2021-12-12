import React from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
const CardProductHome = ({picture, subTitle, price}) => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent:'center',
                    flexWrap: 'wrap',
                    mt:2,
                    '& > :not(style)': {
                        m: 1,
                        width: 193,
                        height: 278,
                    },
                }}
            >
                <Box
                sx={{
                    display: 'flex',
                    justifyContent:'center',
                    flexWrap: 'wrap',
                    mt:2,
                    '& > :not(style)': {
                        m: 1,
                        width: 193,
                        height: 278,
                    },
                }}>
                    <Card 
                        className='card1 cards' 
                        sx={{ width: 238, height: 248, boxShadow: 3 }}
                        style={{ backgroundImage:{picture} }}
                    >
                    </Card>
                    <div className='cardProductHome-content'>
                        <p>{subTitle}</p>
                        <span>${price}</span>
                    </div>
                </Box>
                {/* <Box
                sx={{
                    display: 'flex',
                    justifyContent:'center',
                    flexWrap: 'wrap',
                    mt:2,
                    '& > :not(style)': {
                        m: 1,
                        width: 193,
                        height: 278,
                    },
                }}
                >
                    <Card 
                        className='card2 cards' 
                        sx={{ width: 238, height: 248, boxShadow: 3 }}>
                    </Card>
                    <div className='cardProductHome-content'>
                        <p>test</p>
                        <span>10€</span>
                    </div>
                </Box>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent:'center',
                    flexWrap: 'wrap',
                    mt:2,
                    '& > :not(style)': {
                        m: 1,
                        width: 193,
                        height: 278,
                    },
                }}
                >
                    <Card 
                        className='card3 cards' 
                        sx={{ width: 238, height: 248, boxShadow: 3 }}>
                    </Card>
                    <div className='cardProductHome-content'>
                        <p>test</p>
                        <span>10€</span>
                    </div>
                </Box>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent:'flex-start',
                    flexWrap: 'wrap',
                    mt:2,
                    '& > :not(style)': {
                        m: 1,
                        width: 193,
                        height: 278,
                    },
                }}
                >
                    <Card 
                        className='card3 cards' 
                        sx={{ width: 238, height: 248, boxShadow: 3 }}>
                    </Card>
                    <div className='cardProductHome-content'>
                        <p>test</p>
                        <span>10€</span>
                    </div>
                </Box> */}
            </Box>
        </div>
    );
};

export default CardProductHome;