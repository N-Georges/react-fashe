import { Box } from '@mui/system';
import React, { useState } from 'react';
import BannerGlobal from '../components/Banner/BannerGlobal';
import ProductDescription from '../components/ProductDescription';
import Data from '../Data';

const ProductDetailPage = () => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('Product Detail')
    const [panier, setPanier] = useState([])
    // eslint-disable-next-line
    const [data, setData] = useState([])
    // eslint-disable-next-line
    const dataPanier = panier
    const BuyArticle = (e) => {
        let copieData = Data
        console.log(copieData[e]);
        let copiePanier = panier
        copiePanier.push(copieData[e])
        console.log(copiePanier);
        setPanier(copiePanier)
        setData(copieData)
        console.log('achat effectuer !')
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
                            onBuyArticle={() => BuyArticle(index)}
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