import React, { useState } from 'react';
import About from '../components/About';
import BannerGlobal from '../components/Banner/BannerGlobal';

const AboutPage = () => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('About')
    return (
        <div>
            <BannerGlobal
                namePage={namePage}
            />
            <About/>
        </div>
    );
};

export default AboutPage;