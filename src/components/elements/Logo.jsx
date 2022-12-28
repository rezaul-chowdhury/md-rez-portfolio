import React from 'react';
import LogoImg from '../../../src/images/logo-v5.png'

const Logo = () => {
    return (
        <div className='w-60 h-52'>
            <img src={LogoImg} alt={'logo-img'}/>
        </div>
    );
};

export default Logo;
