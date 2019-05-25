import React from 'react'

const Header = () => {
    return (
        <div className="mood_nav">
            <div className="mood_logo">
                <span>Mood</span>
            </div>
            <div className="mood_text-intro">
                <h1>Create your avatar</h1>
            </div>
            <div className="mood_login">
                <a href="/"><button className="mood_login-button">Login</button></a> 
            </div>
        </div>
    )
}

export default Header