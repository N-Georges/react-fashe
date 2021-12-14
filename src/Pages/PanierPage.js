import React, { useState } from 'react';
import BannerGlobal from '../components/Banner/BannerGlobal';
import Panier from '../components/Panier';



const PanierPage = ({subTitle, panier}) => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('PANIER')
    console.log(panier);
    return (
        <div>
            <BannerGlobal
                namePage={namePage}
            />
            <Panier
                // subTitle={subTitle}
                subTitle
            />
        </div>
    );
};

export default PanierPage;