import React, { useContext } from 'react';
import { Songs } from '../Context';

function DetailSongs() {
    const {song}=useContext(Songs)
    return ( 
    <div className="col-span-1 p-3">
       <h2 className='text-cyan-500 font-bold ml-10'>Now Playing</h2>
       <h2 className='text-neutral-300 text-2xl ml-10'>{song.name}</h2>
       <div className="w-[240px] m-auto mt-10">
       <img className="w-full" alt="avatar" src={song.links.images[0].url}/>
       </div>
       <div className="flex justify-evenly items-center mt-10 ">
       <img className="w-[70px] rounded-full" alt="avatar" src={song.links.images[1].url}/>
       <span className='text-xl text-white'>{song.author}</span>
       </div>
    </div> 
    );
}

export default DetailSongs;