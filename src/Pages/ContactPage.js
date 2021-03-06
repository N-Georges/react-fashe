import React, { useState } from 'react';
import BannerGlobal from '../components/Banner/BannerGlobal';
import Contact from '../components/Contact';

const ContactPage = () => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('Contact')
    return (
        <div>
            <BannerGlobal 
                namePage={namePage}
            />
            <Contact/>
        </div>
    );
};

export default ContactPage;