import React, { useState } from 'react';
import BannerGlobal from '../components/Banner/BannerGlobal';

const AboutPage = () => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('About')
    return (
        <div>
            <BannerGlobal
                namePage={namePage}
            />
        </div>
    );
};

export default AboutPage;