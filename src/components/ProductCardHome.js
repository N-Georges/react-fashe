import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// eslint-disable-next-line
import CardProductHome from './CardProductHome';


const preventDefault = (event) => event.preventDefault();


const ProductCardHome = () => {
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
                    <Link className='links' href="#" underline="hover" color='black' >
                        {'Best Seller'}
                    </Link>
                    <Link className='links' href="#" underline="hover" color='black' >
                        {'New'}
                    </Link>
                    <Link className='links' href="#" underline="hover" color='black' >
                        {'Sale'}
                    </Link>
                    <Link className='links' href="#" underline="hover" color='black' >
                        {'Old'}
                    </Link>
                </Box>

            </div>
        </div>
    );
};

export default ProductCardHome;