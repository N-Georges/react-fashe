import React from 'react';
// eslint-disable-next-line
import backgroundvideo from '../assets/Squares - 810942.mp4'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
const BannerVideoHome = () => {
    return (
        <div className='banner-video'>
            <div className='banner-video-content'>
                <p>The Beauty</p>
                <h1>LOOKBOOK</h1>
                <div className='play'>
                    <PlayArrowRoundedIcon style={{ fill: '#fff', cursor:'pointer' }}/>
                    <p>PLAY VIDEO</p>
                </div>
            </div>
        </div>
    );
};

export default BannerVideoHome;