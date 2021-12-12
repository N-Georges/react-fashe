import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';

const CardComingSoon = () => {
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
                        width: 258,
                        height: 278,
                    },
                }}
            >
                <Card className='cardFirst cards' sx={{ width: 238, height: 248, boxShadow: 3 }}>
                        <Button 
                            className='coming-soon' 
                            style={{backgroundColor:'#fff', color:'#3F3B3A'}} 
                            variant="contained"
                        >
                            COMING SOON
                        </Button>
                </Card>
                <Card className='cardTwo cards' sx={{ width: 238, height: 248, boxShadow: 3 }}>
                        <Button 
                            className='coming-soon' 
                            style={{backgroundColor:'#fff', color:'#3F3B3A'}} 
                            variant="contained"
                        >
                            COMING SOON
                        </Button>
                </Card>
                <Card className='cardThree cards' sx={{ width: 238, height: 248, boxShadow: 3 }}>
                        <Button 
                            className='coming-soon' 
                            style={{backgroundColor:'#fff', color:'#3F3B3A'}} 
                            variant="contained"
                        >
                            COMING SOON
                        </Button>
                </Card>
            </Box>
        </div>
    );
};

export default CardComingSoon;