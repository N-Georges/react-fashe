import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// eslint-disable-next-line
import CardProductHome from './CardProductHome';
import Data from '../Data'
import { Typography } from '@mui/material';

const preventDefault = (event) => event.preventDefault();


const ProductCardHome = ({handleOnClick, e}) => {
    return (
        <div >
            <div className='productHome'>
                <h1>Our Products</h1>
                <Box
                    sx={{
                        typography: 'body1',
                        '& > :not(style) + :not(style)': {
                            ml: 2,
                        },
                    }}
                    onClick={preventDefault}
                    >
                    <button value='bestSeller' onClick={(e) => handleOnClick(e)}>BestSeller</button>
                    <button value='new' onClick={ handleOnClick}>New</button>
                    <button value='sale' onClick={ handleOnClick}>Sale</button>
                    <button value='old' onClick={ handleOnClick}>Old</button>
                    
                </Box>

            </div>
        </div>
    );
};

export default ProductCardHome;