import React, { useState } from 'react';
import BannerGlobal from '../components/Banner/BannerGlobal';
import Like from '../components/Like';

const LikePage = () => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('COUP DE COEUR')
    return (
        <div>
            <BannerGlobal
                namePage={namePage} 
            
            />
            <Like/>
        </div>
    );
};

export default LikePage;