import React from 'react';

const BannerGlobal = ({namePage, subTitle}) => {
    return (
        <div className='banner-global'>
            <div className='banner-global-content'>
                <h1>{namePage}</h1>
                <h6>{subTitle}</h6>
            </div>
        </div>
    );
};

export default BannerGlobal;