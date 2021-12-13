import { Box } from '@mui/system';
import React, { useState } from 'react';
import BannerHome from '../components/Banner/BannerHome';
import CardComingSoon from '../components/CardComingSoon';
import CardProductHome from '../components/CardProductHome';
import ProductCardHome from '../components/ProductCardHome';
import BannerVideoHome from '../components/BannerVideoHome';

const HomePage = () => {
    // eslint-disable-next-line
    const [bestSeller, setBestSeller] = useState([
        {
            picture: '../assets/gshock.jpg',
            subTitle:'Herschel supply co 25l',
            price: 75.00
        },
        {
            picture:{backgroundImage:`url(${"../assets/young-man-wearing-black-t-shirt.jpg"})`},
            subTitle:'Denim jacket blue',
            price: 92.50
        },
        {
            // picture:{backgroundImage:`url(../assets/young-man-wearing-black-t-shirt.jpg)`},
            subTitle:'Coach slim easton black',
            price: 165.90
        },
        {
            // picture:{backgroundImage:`url(../assets/young-man-wearing-black-t-shirt.jpg)`},
            subTitle:'Herschel supply co 25l',
            price: 15.90
        }
    ])
    return (
        <div>
            <BannerHome/>
            <CardComingSoon/>
            <ProductCardHome/>
            <Box sx={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 193,
                        height: 228,
                        marginBottom: 20 
                    }
            }}>
            {bestSeller.map((item, index) => {
                return (
                    <CardProductHome
                        key={index}
                        picture={item.picture}
                        subTitle={item.subTitle}
                        price={item.price}
                    />
                )
            })}
            </Box>
            <BannerVideoHome/>
        </div>
    );
};

export default HomePage;