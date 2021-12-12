import React, { useState } from 'react';
import BannerGlobal from '../components/Banner/BannerGlobal';

const ContactPage = () => {
    // eslint-disable-next-line
    const [namePage, setNamePage] = useState('Contact')
    return (
        <div>
            <BannerGlobal 
                namePage={namePage}
            />
        </div>
    );
};

export default ContactPage;