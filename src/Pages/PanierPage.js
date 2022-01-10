import { Button } from '@mui/material';
import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import BannerGlobal from '../components/Banner/BannerGlobal';
import PanierBody from '../components/PanierBody';
import Data from  '../Data'



const PanierPage = ({panier, setPanier}) => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('PANIER')
    return (
        <div>
            <BannerGlobal
                namePage={namePage}
                />
            {Data.map((item, index) => {
                return  (
                    <PanierBody
                        key={index}
                        picture={item.picture}
                        subTitle={item.subTitle}
                        price={item.price}
                        tag={item.tag}
                    />
                )
            })}
            <Button sx={{m:4}}>Acheter</Button>
        </div>
    );
};

export default PanierPage;