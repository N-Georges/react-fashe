import React, { useState } from 'react';
import { Box } from '@mui/system';
import BannerHome from '../components/Banner/BannerHome';
import CardComingSoon from '../components/CardComingSoon';
import CardProductHome from '../components/CardProductHome';
import ProductCardHome from '../components/ProductCardHome';
import BannerVideoHome from '../components/BannerVideoHome';
// import img1 from '../assets/young-man-wearing-black-t-shirt.jpg'
// import img2 from '../assets/hmgoepprod.jfif'
// import img3 from '../assets/vetements_image_003.jpg'
// import img4 from '../assets/hmgoepprod1.jfif'
import Data from  '../Data'

const HomePage = () => {
    // eslint-disable-next-line
    // const article = [
    //     {
    //         picture: img1,
    //         subTitle:'Herschel supply co 25l',
    //         price: 75.00,
    //         tag:'new',
    //         // bestSeller: true 
    //     },
    //     {
    //         picture: img2,
    //         subTitle:'Denim jacket blue',
    //         price: 92.50,
    //         tag:'sale',
    //         // bestSeller: true 
    //     },
    //     {
    //         picture: img3,
    //         subTitle:'Coach slim easton black',
    //         price: 165.90,
    //         tag:'new',
    //         // bestSeller: true 
    //     },
    //     {
    //         picture: img4,
    //         subTitle:'Herschel supply co 25l',
    //         price: 15.90,
    //         tag:'sale',
    //         // bestSeller: true 
    //     }
    // ]
    const [data, setData] = useState([])
    const [panier, setPanier] = useState([])

    const BuyArticle = (i) => {
        let copieArticle = Data
        let copiePanier = panier
        copiePanier.push(copieArticle[i])
        setPanier(copiePanier)
        console.log(Data[i]);
        console.log(panier);

    }

    let DataCopy = data 
    const handlebtns=(e)=>{
        console.log(e.target.value);
        
    }
    
    return (
        <div>
            <BannerHome/>
            <CardComingSoon/>
            <ProductCardHome
               handleOnClick={handlebtns}
            />
            <Box sx={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 193,
                        height: 228,
                        marginBottom: 20 
                    }
            }}>
            
            {Data.map((item, index) => {
                return  (
                    <CardProductHome
                        onBuyArticle={() => BuyArticle(index)}
                        key={index}
                        picture={item.picture}
                        subTitle={item.subTitle}
                        price={item.price}
                        tag={item.tag}
                    />
                )
            })}
            {/* {Data.filter(tag => tag === 'new').map((item, index) => {
                return(
                    <CardProductHome
                        onBuyArticle={() => BuyArticle(index)}
                        key={index}
                        picture={item.picture}
                        subTitle={item.subTitle}
                        price={item.price}
                        tag={item.tag}
                    />
                )
            })} */}
            </Box>
            <BannerVideoHome/>
        </div>
    );
};

export default HomePage;