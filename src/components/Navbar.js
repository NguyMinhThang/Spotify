import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    return (
         <div className='h-24 bg-slate-900 text-white leading-[6rem] text-center text-3xl'>
        <i className='faspotify mr-5'><FontAwesomeIcon icon={faSpotify}/></i>
        Spotify
    </div>
    );
}

export default Navbar;