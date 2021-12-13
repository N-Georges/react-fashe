import { Box } from '@mui/system';
import React, { useState } from 'react';
import BannerHome from '../components/Banner/BannerHome';
import CardComingSoon from '../components/CardComingSoon';
import CardProductHome from '../components/CardProductHome';
import ProductCardHome from '../components/ProductCardHome';
import BannerVideoHome from '../components/BannerVideoHome';
import img1 from '../assets/young-man-wearing-black-t-shirt.jpg'
import img2 from '../assets/hmgoepprod.jfif'
import img3 from '../assets/vetements_image_003.jpg'
import img4 from '../assets/hmgoepprod1.jfif'

const HomePage = () => {
    // eslint-disable-next-line
    const [bestSeller, setBestSeller] = useState([
        {
            picture: img1,
            subTitle:'Herschel supply co 25l',
            price: 75.00
            
        },
        {
            picture: img2,
            subTitle:'Denim jacket blue',
            price: 92.50
        },
        {
            picture: img3,
            subTitle:'Coach slim easton black',
            price: 165.90
        },
        {
            picture: img4,
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
            console.log(item);
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