import React, { useState } from 'react';
import BannerGlobal from '../components/Banner/BannerGlobal';

const ProductDetail = () => {
    const [namePage, setNamePage] = useState('Product Detail')
    return (
        <div>
            <BannerGlobal 
                namePage={namePage}
            />
            
        </div>
    );
};

export default ProductDetail;