import React from 'react'
import CreateAvatar from './CreateAvatar';
import ButtonDownload from './ButtonDownload';

const Home = () => {
    return (
        <div className="mood_home">
            <CreateAvatar />
            <ButtonDownload />  
        </div>
    )
}

export default Home