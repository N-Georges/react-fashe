import { Button } from '@mui/material';
import React, { useState } from 'react';
import BannerGlobal from '../components/Banner/BannerGlobal';
import LikeBody from '../components/LikeBody';
import Data from  '../Data'
const LikePage = () => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('COUP DE COEUR')

    const [count, setCount] = useState(1)
    // eslint-disable-next-line
    const addQuantity = () => {
        setCount(count + 1)
    }
// eslint-disable-next-line
    const removeQuantity = () => {
        if (count <= 1) {
            setCount(1)
        } else (
            setCount(count - 1)

        )
        console.log(count);
    }
    return (
        <div>
            <BannerGlobal
                namePage={namePage}
            />
            {Data.map((item, index) => {
                return  (
                    <LikeBody
                        // onClickDetail={()=> DetailArticle(item)}
                        key={index}
                        picture={item.picture}
                        subTitle={item.subTitle}
                        price={item.price}
                        tag={item.tag}
                    />
                )
            })}
        </div >
    );
};

export default LikePage;