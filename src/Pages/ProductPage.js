import React, { useState } from 'react';
import BannerGlobal from '../components/Banner/BannerGlobal';


const ProductPage = () => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('Product')
    // eslint-disable-next-line
    const [subTitle, setSubTitle] = useState('New Arrivals Women Collection')
    return (
        <div>
            <BannerGlobal
                namePage={namePage}
                subTitle={subTitle}
            />
        </div>
    );
};

export default ProductPage;