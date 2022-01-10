import { Box } from '@mui/system';
import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import BannerGlobal from '../components/Banner/BannerGlobal';
import ProductDescription from '../components/ProductDescription';
import Data from '../Data';

const ProductDetailPage = () => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('Product Detail')
    // eslint-disable-next-line
    const [data, setData] = useState([])
    const [panier, setPanier] = useState([])




    // const navigate = useNavigate()
    // const { id } = useParams();
    // console.log(id);
    const BuyArticle = (e) => {
        let copiePanier =  panier
        copiePanier.push(e)
        setPanier(copiePanier)
        console.log(panier);
        // navigate(`/panier`)  
        
    }

    return (
        <div>
            <BannerGlobal 
                namePage={namePage}
            />
            <Box
                sx={{m:5}}
            >
                {Data.map((item, index) => {
                    return  (
                        <ProductDescription
                            onBuyArticle={()=>BuyArticle(item)}
                            key={index}
                            picture={item.picture}
                            subTitle={item.subTitle}
                            price={item.price}
                            tag={item.tag}
                            description={item.description}
                        />
                    )
                })}
            </Box>
        </div>
    );
};

export default ProductDetailPage;