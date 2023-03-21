import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Songs } from '../Context';
import React, { useContext, useEffect, useState } from 'react';

function ListSongs() {
    const {DataSongs,handleSetSong,song}=useContext(Songs)
    console.log(DataSongs)
    const [idSong,setIdSong]=useState(0)
    const handlePlay=(idSong)=>{
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    
    useEffect(()=>{
        setIdSong(song.id)
    },[song])

    return ( 
    <div className="col-span-2 overflow-y-scroll bg-slate-800 ">
        <table className='table-auto w-full'>
            <thead className='text-white h-12'>
                <tr>
                    <th className='w-[10%]'>#</th>
                    <th className='text-left'>Title</th>
                    <th className='w-[10%]'>Author</th>
                    <th className='w-[10%]'><i><FontAwesomeIcon icon={faDownload}/></i></th>
                </tr>
            </thead>
            <tbody>
                {DataSongs.map((song,index)=>(
                <tr key={index} onClick={()=>handlePlay(song.id)}
                 className={`h-12 text-gray-500 hover:bg-gray-700
                  ${idSong === song.id && "text-teal-400"}`}>
                    <th>{index+1}</th>
                    <th className='text-left'>{song.name}</th>
                    <th className='text-center'>{song.author}</th>
                    <th><a href={song.url}><i><FontAwesomeIcon icon={faDownload}/></i></a></th>
                </tr>
                ))}
            </tbody>
        </table>
    </div> 
    );
}

export default ListSongs;